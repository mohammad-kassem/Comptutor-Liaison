import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { useAppointments } from '../../Context/Appointments';

export default function AppointmentsScreen() {
    const {appointments, setAppointments} = useAppointments()



    return (
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