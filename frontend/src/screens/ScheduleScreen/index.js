import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { filterAvailableTimes, getAvailableTimes, groupSchedules } from './controller'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import AppointmentModal from '../../components/AppointmentModal'
import { useFocusEffect } from '@react-navigation/native'
import Container from '../../components/Container'
import DropdownComponent from '../../components/Dropdown'
import Schedules from '../../components/Schedules'



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
            <Schedules groupedSchedules={groupedSchedules} date={date} setModalIsVisable={setModalIsVisable} setModalData={setModalData}/>
            <AppointmentModal modalIsVisable={modalIsVisable} setModalIsVisable={setModalIsVisable} time={modalData[0]} date={modalData[1]} tutor={tutor}
                schedules={schedules} setSchedules={setSchedules}/>
        </>
    )
}