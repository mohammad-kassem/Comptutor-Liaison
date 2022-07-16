import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { toDateString, toTimeString } from './controller'

export default function AddScheduleScreen() {
    let [date, setDate] = useState(new Date())
    let [time, setTime] = useState(new Date())

    date = toDateString(date)
    time = toTimeString(time)   

    return (
        <View style={styles.container}>
            <Text style={styles.sectionPrompt}>Add your available time</Text>
            <Text style={styles.title}>Duration</Text>
            <Text style={styles.field}>1 hour</Text>
            <Text style={styles.title}>Date</Text>
            <TouchableOpacity style={styles.field}>
                <Text>{date}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Start time</Text>
            <TouchableOpacity style={styles.field}>
                <Text>{time}</Text>
            </TouchableOpacity>
        </View>
    )
}