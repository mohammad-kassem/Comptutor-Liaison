import { View, Text ,Image , FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../../Context/User';
import  SearchBar  from '../../components/SearchBar';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation()
    let [tutors, setTutors] = useState([])
    const [original, setOriginal] = useState([])
    const {user, setUser} = useUser()


    useEffect(function(){
        getTutors();
      }, []);
    
    const getData = async () => {
        let value;
        try {
          value = await AsyncStorage.getItem('storage_Key');
          if(value !== null) {
          }
        } catch(e) {
            alert("Error getting token")
        }
        return value
    }

    async function getTutors(){
        const token = await getData();
        axios({
          method: "get",
          url: "http://192.168.1.105:8000/api/v1/tutor/get",
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`}
        })
        .then(function(response){
            // console.log(response.data.tutors);
          setTutors(response.data.tutors);
          setOriginal(response.data.tutors);
        })
        .catch(function(error){
          let message = Object.values(error.response.data);
          alert(message[0]);
        })
    };

    tutors = tutors.filter((tutor)=>{
        for (var userSubjects of user.subjects){
            let tutorSubjects = Object.values(tutor.subjects).map((tutorSubject)=> tutorSubject.subject);
            if ((tutorSubjects).includes(userSubjects.subject)) return true
        }
    })

    return (
        <>
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Home</Text>
            </View>
            <SearchBar original={original} setTutors={setTutors}/>
            <FlatList data={tutors} renderItem={(tutorData) =>{
                return(
                    <TouchableOpacity key={tutorData.item.lname} style={styles.tutorCard} onPress={()=>{navigation.navigate("TutorScreen", {"tutor": tutorData.item})}}>
                        <View style={styles.cardContent}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.tutorProfile} source={require('../../../assets/logo.png')}/>
                            </View>
                            <View style={styles.tutorInfo}>
                                <Text style={styles.tutorName}>{tutorData.item.fname} {tutorData.item.lname}</Text>
                                <View style={styles.tutorRates}>
                                    <Text style={styles.tutorDetail}>Chatting: {tutorData.item.rate_chat}</Text>
                                    <Text style={styles.tutorDetail}>Zoom: {tutorData.item.rate_zoom}</Text>
                                </View>
                                <Text style={styles.tutorDetail}>Teaching since {tutorData.item.experience}</Text>
                            </View>
                        </View>
                        <View style={styles.tutorSubjects}>
                            {tutorData.item.subjects.map((subject, index)=>{return(
                            <Text style={styles.tutorSubject}>{subject.subject}</Text>
                            )})}
                        </View>
                    </TouchableOpacity>
                )
            }}
            // keyExtractor={(tutor) => tutor.id}
            />
        </View>
        </>
    )
}