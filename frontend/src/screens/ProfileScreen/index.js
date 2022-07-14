import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { useUser } from '../../Context/User'

export default function ProfileScreen() {
   const { user, setUser } = useUser()
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
            <Image style={styles.profile} source={require('../../../assets/logo.png')}/>
        </View>
        <Text style={styles.name}>{user.fname} {user.lname}</Text>
    </View>
  )
}