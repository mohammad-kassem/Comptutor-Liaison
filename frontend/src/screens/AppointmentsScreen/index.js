import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { getAppointments } from './controller';

export default function AppointmentsScreen() {
    const [appointments, setAppointments] = useState([])
  return (
        <View style={styles.container}>
            <Text style={styles.title}>Appointments</Text>
            <View style={styles.appointmentCard}>
                <View style={styles.cardContent}>
                    <Text style={styles.date}>6/15/22 3:00 PM - 4:00 PM</Text>
                    <Text style={styles.details}>Appointment with Jane</Text>
                </View>
            </View>
        </View>   
  )
}