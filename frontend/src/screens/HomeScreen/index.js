import { View, Text ,Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
    const [tutors, setTutors] = useState([])

    return (
        <>
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Home</Text>
            </View>
            <View style={styles.searchBar}>
                <Icon name="search" style={styles.searchIcon}/>
                <TextInput style={styles.searchInput} placeholder="Search"/>
            </View>
            <FlatList data={tutors} renderItem={(tutorData) =>{
                return(
                    <TouchableOpacity style={styles.tutorCard}>
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
            />
        </View>
        </>
    )
}