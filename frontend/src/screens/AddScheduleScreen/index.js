import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { toDateString, toTimeString } from './controller'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddScheduleScreen() {
    let [date, setDate] = useState(new Date())
    let [time, setTime] = useState(new Date())
   

    return (
        <View style={styles.container}>
            <DateTimePicker mode="date" value={date} minimumDate={new Date()} onChange={(e, d)=>setDate(d)}/>
            <DateTimePicker mode="time" value={time} is24Hour={true} onChange={(e, t)=>setTime(t)}/>
            <Text style={styles.sectionPrompt}>Add your available time</Text>
            <Text style={styles.title}>Duration</Text>
            <Text style={styles.field}>1 hour</Text>
            <Text style={styles.title}>Date</Text>
            <TouchableOpacity style={styles.field}>
                <Text style={styles.fieldText}>{toDateString(date)}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Start time</Text>
            <TouchableOpacity style={styles.field}>
                <Text style={styles.fieldText}>{toTimeString(time)}</Text>
            </TouchableOpacity>
        </View>
    )
}