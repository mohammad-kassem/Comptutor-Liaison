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
    </View>
    </>
  )
}