import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { isAppointmentTime, isCancelTime } from './controller';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useUser } from '../../Context/User';

export default function AppointmentCard({refRBSheet, setId, dateData, setGoButtonDisabled, setCancelButtonDisabled}) {
	const {user} = useUser()
	const appointmentWith = user.role_id === 1 ? "tutor" : "student"
	
	return (
		<>
		<TouchableOpacity style={styles.appointmentCard} onPress={()=>{refRBSheet.current.open(); setId(dateData.item.schedule_id); setGoButtonDisabled(isAppointmentTime(dateData.item)); setCancelButtonDisabled(!isCancelTime(dateData.item))}}>
			<Text style={styles.date}>{dateData.item.schedule.start_time.slice(0, -3)} - {dateData.item.schedule.end_time.slice(0, -3)}</Text>
			<View style={styles.appointmentWith}>
				<Icon name="account-multiple" size={20} color="#4FC7E6"/>
				<View style={styles.imageContainer}>
				{dateData.item[appointmentWith].profile_image ? 
				(<Image style={styles.profile} source={{uri: dateData.item[appointmentWith].profile_image}}/>
				) : (
				<Image style={styles.profile} source={require('../../../assets/logo.png')}/>
				)}
				</View>
				<Text style={styles.details}>{dateData.item[appointmentWith].fname} {dateData.item[appointmentWith].lname}</Text>
		</View>
		</TouchableOpacity>
		</>
	)
}