import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
            <Image style={styles.profile} source={require('../../../assets/logo.png')}/>
        </View>
    </View>
  )
}