import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import RBSheet from "react-native-raw-bottom-sheet";
import { useAppointments } from '../../Context/Appointments';

export default function AppointmentsScreen() {
    const {appointments, setAppointments} = useAppointments()
    const refRBSheet  = useRef();

    const [id, setId] = useState()    

    return (
        <>  
        
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}
        ><Text style={styles.sheetText}>Appointment action</Text>
        <TouchableOpacity style={styles.cancel} onPress={()=>{deleteAppointment(id,appointments, setAppointments); refRBSheet.current.close();}}><Text style={styles.buttonText}>Cancel appointment</Text></TouchableOpacity>
        <TouchableOpacity style={styles.go}><Text style={styles.buttonText}>Go to appointment</Text></TouchableOpacity>
        </RBSheet>
            <View style={styles.container}>
                <Text style={styles.title}>Appointments</Text>
                <FlatList data={appointments} renderItem={(appointmentData) =>{
                return(
                <View style={styles.appointmentCard}>
                    <View style={styles.cardContent}>
                        <Text style={styles.date}>{appointmentData.item.schedule.date} {appointmentData.item.schedule.start_time} - {appointmentData.item.schedule.end_time}</Text>
                        <Text style={styles.details}>Appointment with {appointmentData.item.tutor.fname} {appointmentData.item.tutor.fname}</Text>
                    </View>
                </View>
                )
                }}
                />
            </View>   
    )
}