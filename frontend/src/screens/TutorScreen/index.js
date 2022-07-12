import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'

export default function TutorScreen( {route} ) {
    const tutor = route.params.tutor
    return (
        <>
        <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.tutorProfile} source={require('../../../assets/logo.png')}/>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.title}>
                    <Text style={styles.tutorName}>{tutor.fname} {tutor.lname}</Text>
                    <Text style={styles.tutorExperince}>Teaching since {}</Text>
                </View>
                <View style={styles.ratesContainer}>
                    <Text style={styles.zoomRate}>${tutor.rate_zoom} /H for Zoom</Text>
                    <Text style={styles.chatRate}>${tutor.rate_chat} /H for Chat</Text>
                </View>

            </View>
        </ScrollView>
        </View>
        </>
    )
}