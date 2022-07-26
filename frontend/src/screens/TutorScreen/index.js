import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import FullWidthButton from '../../components/FullWidthButton'
import { ScrollView } from 'react-native-gesture-handler'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getTutor, onHandlePress } from './controller'
import AbsolutePositionButtonContainer from '../../components/AbsolutePositionButtonContainer'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function TutorScreen( {route} ) {
    const [tutor, setTutor] = useState({"degrees": [], "subjects": []})
    const tutorId = route.params.tutor.id
    const navigation = useNavigation() 

    useFocusEffect(
        React.useCallback(()=>{
            getTutor(tutorId, setTutor)
        }, [])
    )

    return (
        <>
        <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.imageContainer}>
            {tutor.profile_image ? 
            (<Image style={styles.tutorProfile} source={{uri: tutor.profile_image}}/>
            ) : (
            <Image style={styles.tutorProfile} source={require('../../../assets/logo.png')}/>
            )}
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.titleContainer}>
                    <View style={styles.title}>
                        <Text style={styles.tutorName}>{tutor.fname} {tutor.lname}</Text>
                        <Text style={styles.tutorExperince}>Teaching since {}</Text>
                    </View>
                    <TouchableOpacity style={styles.chatting} onPress={() => navigation.navigate("ChatStack", { screen: "ChatScreen",  params: { reciever: tutor, isStudent: true },})}>
                        <Icon name="comments" size={24} color="white"/>
                        <Text style={styles.chattingText}>Chat with {tutor.fname}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ratesContainer}>
                    <Text style={styles.videoRate}>${tutor.rate} /H for Live Session</Text>
                </View>
                <View style={styles.tutorDetails}>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoTitle}>About</Text>
                        <View style={styles.infoMain}>
                            <Text style={styles.infoText}>{tutor.about}</Text>
                        </View>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoTitle}>Education</Text>
                        <View style={styles.infoMain}>
                            {tutor.degrees.map((degree) =>(
                            <Text style={styles.infoText}>{degree.university} - {degree.degree}</Text>
                            ))}
                        </View>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoTitle}>Subjects</Text>
                        <View style={styles.infoMain}>
                            {tutor.subjects.map((subject) =>(
                            <Text style={styles.infoText}>{subject.subject}</Text>
                            ))}
                        </View>
                    </View>
                    <View style={styles.blank}>

                    </View>
                </View>
            </View>
        </ScrollView>
        <AbsolutePositionButtonContainer>
            <FullWidthButton text="Book an appointment" onHandlePress={()=>onHandlePress(tutor, navigation)}/>
        </AbsolutePositionButtonContainer>
        </View>
        </>
    )
}