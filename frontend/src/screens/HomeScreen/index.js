import { View, Text ,Image , FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { useUser } from '../../Context/User';
import  SearchBar  from '../../components/SearchBar';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { filterTutors, getTutors } from './controller';
import Container from '../../components/Container';

export default function HomeScreen({ navigation }) {
    let [tutors, setTutors] = useState([])
    const [original, setOriginal] = useState([])
    const {user, setUser} = useUser()
    const flexDirection = [{marginRight: "5%"}, {alignSelf: "center"}, {marginLeft: "5%"}]

    useFocusEffect(
        React.useCallback(()=>{
            getTutors(setTutors, setOriginal)
        }, [])
    )

    tutors = filterTutors(tutors, user)
        
    return (
        <>
        <Text style={styles.title}>Home</Text>
        <SearchBar original={original} setTutors={setTutors}/>


            <FlatList data={tutors} renderItem={(tutorData) =>{
                return(
                    <TouchableOpacity key={tutorData.item.lname} style={styles.tutorCard} onPress={()=>{navigation.navigate("HomeStack", { screen: "TutorScreen",  params: { tutor: tutorData.item },})}}>
                        <View style={styles.cardContent}>
                            <View style={styles.imageContainer}>
                                {tutorData.item.profile_image ? 
                                (<Image style={styles.tutorProfile} source={{uri: tutorData.item.profile_image}}/>
                                ) : (
                                <Image style={styles.tutorProfile} source={require('../../../assets/logo.png')}/>
                                )}
                            </View>
                            <View style={styles.tutorInfo}>
                                <Text style={styles.tutorName}>{tutorData.item.fname} {tutorData.item.lname}</Text>
                                <Text style={styles.tutorDetail}>Teaching since {tutorData.item.since}</Text>
                            </View>
                            <View style={styles.rateContainer}>
                                <Text style={styles.rate}>{tutorData.item.rate}$ / H</Text>
                            </View>
                        </View>
                        <View style={styles.subjectsContainer}>
                            {tutorData.item.subjects.map((subject, index) =>(
                            <View style={[styles.subjectContainer, flexDirection[index % 3]]}>
                            <Text style={styles.subjectName}>{subject.subject}</Text>
                            </View>
                            ))}
                        </View>
                    </TouchableOpacity>
                )
            }}
            // keyExtractor={(tutor) => tutor.id}
            />
        </>
    )
}