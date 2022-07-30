import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { filterAvailableTimes, getAvailableTimes, groupSchedules } from './controller'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import AppointmentModal from '../../components/AppointmentModal'
import { useFocusEffect } from '@react-navigation/native'
import Container from '../../components/Container'
import DropdownComponent from '../../components/Dropdown'



export default function ScheduleScreen({ route }) {
    const [modalIsVisable, setModalIsVisable] = useState(false);
    const tutor = route.params.tutor
    let [schedules, setSchedules] = useState([])
    let [modalData, setModalData] = useState([])
    const [date, setDate] = useState("");

    useFocusEffect(
        React.useCallback(()=>{
            getAvailableTimes(tutor.id, setSchedules);
        }, [])
    )
    
    schedules = filterAvailableTimes(schedules)
    const groupedSchedules = groupSchedules(schedules);

    return (
        <>
            <Text style={styles.title}>{tutor.fname} {tutor.lname}'s Schedule</Text>
            <DropdownComponent date={date} setDate={setDate} groupedSchedules={groupedSchedules}/>
            <FlatList numColumns={2} columnWrapperStyle={styles.timesContainer} data={groupedSchedules[date]} renderItem={(dateData) =>{
                dateData.item.start_time = dateData.item.start_time.split(":")[0] + ":" + dateData.item.start_time.split(":")[1]
                dateData.item.end_time = dateData.item.end_time.split(":")[0] + ":" + dateData.item.end_time.split(":")[1]
                return(
                    <>
                    <TouchableOpacity style={styles.timeContainer} onPress={()=>{setModalIsVisable(true); setModalData([dateData.item, date])}}>
                        <Text style={styles.time}>{dateData.item.start_time}</Text>
                        <Text style={styles.time}>{dateData.item.end_time}</Text>
                    </TouchableOpacity>
                    </>
                    
                )}
            }
            />
            
            <AppointmentModal modalIsVisable={modalIsVisable} setModalIsVisable={setModalIsVisable} time={modalData[0]} date={modalData[1]} tutor={tutor}
                schedules={schedules} setSchedules={setSchedules}/>
        </>
    )
}