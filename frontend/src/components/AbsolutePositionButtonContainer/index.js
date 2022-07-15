import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function AbsolutePositionButtonContainer({children}) {
  return (
    <View style={styles.buttonContainer}>
      {children}
    </View>
  )
}