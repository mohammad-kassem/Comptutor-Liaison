import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import FullWidthButton from '../../components/FullWidthButton'
import { ScrollView } from 'react-native-gesture-handler'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getTutor, onHandlePress } from './controller'
import AbsolutePositionButtonContainer from '../../components/AbsolutePositionButtonContainer'
import Icon from 'react-native-vector-icons/FontAwesome'
import Container from '../../components/Container'

export default function TutorScreen( {route} ) {
    const [tutor, setTutor] = useState({"degrees": [], "subjects": []})
    const tutorId = route.params.tutor.id
    const navigation = useNavigation() 
    const flexDirection = [{marginRight: "3%"}, {alignSelf: "center"}, {marginLeft: "3%"}]

    useFocusEffect(
        React.useCallback(()=>{
            getTutor(tutorId, setTutor)
        }, [])
    )

    return (
        <>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Container>
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
                        <Text style={styles.titleContent}>Teaching Since: {tutor.since}</Text>
                        <View style={styles.rateContainer}>
                            <Text style={styles.rate}>{tutor.rate}$ / H</Text>
                            <Text style={styles.titleContent}>for live session</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.chat}>
                    <FullWidthButton text="Start a Chat" onHandlePress={() => navigation.navigate("ChatStack", { screen: "ChatScreen",  params: { reciever: tutor, isStudent: true },})} icon="send"/>
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
                        <View style={styles.subjectsContainer}>
                            {tutor.subjects.map((subject, index) =>(
                            <View style={[styles.subjectContainer, flexDirection[index % 3]]}>
                            <Text style={styles.subjectName}>{subject.subject}</Text>
                            </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.blank}>

                    </View>
                </View>
            </View>
            </Container>

        </ScrollView>
        <AbsolutePositionButtonContainer>
            <FullWidthButton text="Book an appointment" onHandlePress={()=>onHandlePress(tutor, navigation)} color="green"/>
        </AbsolutePositionButtonContainer>
        </>
    )
}