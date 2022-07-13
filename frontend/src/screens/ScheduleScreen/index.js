import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { getAvailableTimes, groupSchedules } from './controller'

export default function ScheduleScreen({ route }) {
    const tutor = route.params.tutor
    const [schedules, setSchedules] = useState([])
    let groupedSchedules = groupSchedules(schedules);
    console.log("hello2")


    useEffect(function(){
        getAvailableTimes(tutor.id, setSchedules);
      }, []);

    return (
        <>
    
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>{tutor.fname} {tutor.lname}'s Schedule</Text>
            {Object.keys(groupedSchedules).map((scheduleDate) => {
                return (
                <>
                <Text style={styles.date}>{scheduleDate}</Text>
                </View>
                </>
            )})}
        </View>
        </ScrollView>
        </>
    )
}