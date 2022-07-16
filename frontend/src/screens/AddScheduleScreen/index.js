import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function AddScheduleScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.sectionPrompt}>Add your available time</Text>
        <Text style={styles.title}>Duration</Text>
        <Text style={styles.field}>1 hour</Text>
        <Text style={styles.title}>Date</Text>
        <Text style={styles.field}>2022-07-18</Text>
        <Text style={styles.title}>Start time</Text>
        <Text style={styles.field}>13:00</Text>
    </View>
  )
}