import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { useUser } from '../../Context/User'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ProfileScreen() {
   const { user, setUser } = useUser()
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
            <Image style={styles.profile} source={require('../../../assets/logo.png')}/>
        </View>
        <Text style={styles.name}>{user.fname} {user.lname}</Text>
        <View style={styles.balanceContainer}>
            <Text style={styles.balance}>Balance</Text>
            <Text style={styles.balance}>$50</Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.butonText}>Edit</Text>
                <Icon name="account-edit" size={24} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.butonText}>Logout</Text>
                <Icon name="logout" size={24} color="white"/>
            </TouchableOpacity>
        </View>
    </View>
  )
}