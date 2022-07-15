import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import getSchedules from './controller'
import { groupSchedules } from '../ScheduleScreen/controller'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import RBSheet from 'react-native-raw-bottom-sheet'

export default function TutorSchedulesScreen() {
    const [schedules, setSchedules] = useState([])
    let groupedSchedules = groupSchedules(schedules);
    const refRBSheet  = useRef();


    useEffect(function(){
        getSchedules(setSchedules);
      }, []);

    return (
        <>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            draggableIcon: {
              backgroundColor: "#000"
            },
            container: {
                height: "50%" 
            }
          }}>
        <Text style={styles.sheetText}>Add available hours
        </Text>
        
        </RBSheet>
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Schedule</Text>
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
                        <TouchableOpacity style={styles.timeContainer}>
                            <Text style={styles.time}>{time.start_time}</Text>
                            <Text style={styles.time}>{time.end_time}</Text>
                        </TouchableOpacity>
                     </View>
                     :
                     <View style={styles.timeCardRight}>
                        <TouchableOpacity style={styles.timeContainer}>
                            <Text style={styles.time}>{time.start_time}</Text>
                            <Text style={styles.time}>{time.end_time}</Text>
                        </TouchableOpacity>
                     </View>)})}
                </View>
                </>
            )})}
        </View>
        </ScrollView>
        <TouchableOpacity style={styles.addButton} onPress={()=>{refRBSheet.current.open(); console.log("hello")}}><Icon name="plus" size={45} color={"white"}/></TouchableOpacity>
        </>
    )
}
