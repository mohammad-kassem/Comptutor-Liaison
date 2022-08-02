import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import getSchedules, { filterAllTimes } from './controller'
import { groupSchedules } from '../ScheduleScreen/controller'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import DropdownComponent from '../../components/Dropdown'
import Schedules from '../../components/Schedules'


export default function TutorSchedulesScreen() {
    let [schedules, setSchedules] = useState([])
    const [date, setDate] = useState("");
    const navigation = useNavigation()

    useFocusEffect(
        React.useCallback(()=>{
        getSchedules(setSchedules);
      }, [])
    )

    schedules = filterAllTimes(schedules)
    const groupedSchedules = groupSchedules(schedules);

    return (
        <>
            <Text style={styles.title}>Schedule</Text>
            <DropdownComponent date={date} setDate={setDate} groupedSchedules={groupedSchedules}/>
            <Schedules groupedSchedules={groupedSchedules} date={date}/>
            <TouchableOpacity style={styles.addButton} onPress={()=>{navigation.navigate("HomeStackTutor", { screen: "AddScheduleScreen",  params: { schedules: schedules, setSchedules: setSchedules },}); console.log("hello")}}>
                <Icon name="plus" size={40} color="#1877F2"/>
            </TouchableOpacity>
        </>
    )
}
