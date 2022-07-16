import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

export default function AddScheduleScreen() {
    const [date, setDate] = useState(new Date().toDateString())
    const [time, setTime] = useState(new Date().toTimeString())


    return (
        <View style={styles.container}>
            <Text style={styles.sectionPrompt}>Add your available time</Text>
            <Text style={styles.title}>Duration</Text>
            <Text style={styles.field}>1 hour</Text>
            <Text style={styles.title}>Date</Text>
            <Text style={styles.field}>{date}</Text>
            <Text style={styles.title}>Start time</Text>
            <Text style={styles.field}>{time}</Text>
        </View>
    )
}