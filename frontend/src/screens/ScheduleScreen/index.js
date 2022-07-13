import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { getAvailableTimes, groupSchedules } from './controller'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

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
                <View style={styles.timesContainer}>
                {groupedSchedules[scheduleDate].map((time, index)=>{
                     time.start_time = time.start_time.split(":")[0] + ":" + time.start_time.split(":")[1]
                     time.end_time = time.end_time.split(":")[0] + ":" + time.end_time.split(":")[1]
                     return(
                     index % 2 === 0 ? <View style={styles.timeCardLeft}>
                        <TouchableOpacity style={styles.timeContainer} onPress={()=>{setModalIsVisable(true); setModalData([time, scheduleDate])}}>
                            <Text style={styles.time}>{time.start_time}</Text>
                            <Text style={styles.time}>{time.end_time}</Text>
                        </TouchableOpacity>
                     </View>
                     :
                     <View style={styles.timeCardRight}>
                        <TouchableOpacity style={styles.timeContainer} onPress={()=>{setModalIsVisable(true); setModalData([time, scheduleDate])}}>
                            <Text style={styles.time}>{time.start_time}</Text>
                            <Text style={styles.time}>{time.end_time}</Text>
                        </TouchableOpacity>
                     </View>)})}
                </View>
                </>
            )})}
        </View>
        </ScrollView>
        </>
    )
}