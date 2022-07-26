import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import getSchedules, { filterAllTimes } from './controller'
import { groupSchedules } from '../ScheduleScreen/controller'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import DropdownComponent from '../../components/Dropdown'


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
        <View style={styles.container}>
            <Text style={styles.title}>Schedule</Text>
            <DropdownComponent date={date} setDate={setDate} groupedSchedules={groupedSchedules}/>
            <FlatList numColumns={2} columnWrapperStyle={styles.timesContainer} data={groupedSchedules[date]} renderItem={(dateData) =>{
                dateData.item.start_time = dateData.item.start_time.split(":")[0] + ":" + dateData.item.start_time.split(":")[1]
                dateData.item.end_time = dateData.item.end_time.split(":")[0] + ":" + dateData.item.end_time.split(":")[1]
                return(
                    <>
                    <TouchableOpacity style={styles.timeContainer}>
                        <Text style={styles.time}>{dateData.item.start_time}</Text>
                        <Text style={styles.time}>{dateData.item.end_time}</Text>
                    </TouchableOpacity>
                    </>
                    
                )}
            }
            />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={()=>{navigation.navigate("HomeStackTutor", { screen: "AddScheduleScreen",  params: { schedules: schedules, setSchedules: setSchedules },}); console.log("hello")}}><Icon name="plus" size={45} color={"white"}/></TouchableOpacity>
        </>
    )
}
