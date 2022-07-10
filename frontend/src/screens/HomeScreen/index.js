import { View, Text ,Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export default function HomeScreen() {
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
        <TouchableOpacity style={styles.tutorCard}>
            <View style={styles.cardContent}>
                <View style={styles.imageContainer}>
                    <Image style={styles.tutorProfile} source={require('../../../assets/22024531._SY540_.jpg')}/>
                </View>
                <View style={styles.tutorInfo}>
                    <Text style={styles.tutorName}>Jane Doe</Text>
                    <View style={styles.tutorRates}>
                        <Text style={styles.tutorDetail}>Chatting: 10</Text>
                        <Text style={styles.tutorDetail}>Zoom: 20</Text>
                    </View>
                    <Text style={styles.tutorDetail}>Teaching since 2016</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
    </>
  )
}