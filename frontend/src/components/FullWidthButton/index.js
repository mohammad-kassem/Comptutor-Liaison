import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

export default function FullWidthButton({ onHandlePress }) {
  return (
    <TouchableOpacity containerStyle={styles.fullWidthButton} onPress={onHandlePress}>
      <Text style={styles.fullWidthButtonText}>Book an appoitment</Text>
    </TouchableOpacity>
  )
}