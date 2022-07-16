import { View, Text ,Image , FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { useUser } from '../../Context/User';
import  SearchBar  from '../../components/SearchBar';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getTutors } from './controller';

export default function HomeScreen({ navigation }) {
    let [tutors, setTutors] = useState([])
    const [original, setOriginal] = useState([])
    const {user, setUser} = useUser()

    useFocusEffect(
        React.useCallback(()=>{
            getTutors(setTutors, setOriginal)
        }, [])
    )

    if (tutors){
        tutors = tutors.filter((tutor)=>{
            for (var userSubjects of user.subjects){
                let tutorSubjects = Object.values(tutor.subjects).map((tutorSubject)=> tutorSubject.subject);
                if ((tutorSubjects).includes(userSubjects.subject)) return true
            }
        })
    }

    return (
        <>
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Home</Text>
            </View>
            <SearchBar original={original} setTutors={setTutors}/>
            <FlatList data={tutors} renderItem={(tutorData) =>{
                return(
                    <TouchableOpacity key={tutorData.item.lname} style={styles.tutorCard} onPress={()=>{navigation.navigate("HomeStack", { screen: "TutorScreen",  params: { tutor: tutorData.item },})}}>
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