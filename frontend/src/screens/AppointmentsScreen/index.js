import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { getAppointments } from './controller';
import { FlatList } from 'react-native-gesture-handler';

export default function AppointmentsScreen() {
    const [appointments, setAppointments] = useState([])

    useEffect(function(){
        getAppointments(setAppointments);
      }, []);

    return (
            <View style={styles.container}>
                <Text style={styles.title}>Appointments</Text>
                <FlatList data={appointments} renderItem={(appointmentData) =>{
                return(
                <View style={styles.appointmentCard}>
                    <View style={styles.cardContent}>
                        <Text style={styles.date}>{appointmentData.item.date} {appointmentData.item.start_time} - {appointmentData.item.end_time}</Text>
                        <Text style={styles.details}>Appointment with Jane</Text>
                    </View>
                </View>
                )
                }}
                />
            </View>   
    )
}