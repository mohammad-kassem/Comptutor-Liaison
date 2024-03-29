import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import styles from './styles'
import { addAppointment } from './controller';

export default function AppointmentModal({ modalIsVisable, setModalIsVisable, time, date, tutor, schedules, setSchedules }) {

	return (
		<View style={styles.container}>
			<Modal
			isVisible={modalIsVisable}
			animationType='slide'
			transparent={true}
			backdropOpacity={0.3}
			>
			<View style={styles.modal}>
			<Text style={styles.title}>Confirm appointment</Text>
			<Text style={styles.content}>Confirm appointment with {tutor.fname} {tutor.lname}</Text>
			<Text style={styles.content}>{date} {time && (time.start_time + "-" + time.end_time)}</Text>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity style={styles.leftButton} onPress={()=>{setModalIsVisable(false); addAppointment(time.id, schedules, setSchedules, tutor.id)}}>
				<Text style={styles.confirmButton}>Confirm</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.rightButton} onPress={()=>setModalIsVisable(false)}>
				<Text style={styles.cancelButton}>Cancel</Text>
				</TouchableOpacity>
			</View>
			</View>
			</Modal>
		</View>
	)
	}
