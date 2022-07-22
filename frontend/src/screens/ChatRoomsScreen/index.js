import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import database from '@react-native-firebase/database'
import { useUser } from '../../Context/User'


export default function ChatRoomsScreen() {
	const {user} = useUser()
	const [rooms, setRooms] = useState([])
	

	useEffect(function(){
		let arr = []
        database()
		.ref("rooms")
		.on('value', snapshot => {
			arr = [Object.values(snapshot.val())]
			console.log(arr[0][0])
			setRooms(arr[0])
		})
      }, []);

	return (
		<>
		<Text style={styles.title}>Chat Rooms</Text>
		<View style={styles.roomContainer}>
			<FlatList data={rooms} renderItem={(roomData) =>{
                return(
					<TouchableOpacity style={styles.room}>
						{user.role_id === 1 ? 
						<>
						<View style={styles.imageContainer}>
							{roomData.item.tutorImage === '../../../assets/logo.png' ?
							<Image style={styles.profile} source={require('../../../assets/logo.png')}/>
							:<Image style={styles.profile} source={{uri: roomData.item.tutorImage}}/>}
						</View>
						<View style={styles.content}>
							<Text style={styles.contact}>{roomData.item.tutorName}</Text>
							<Text style={styles.message}>Last message goes here</Text>
						</View>
						</>
						:
						<>
						<View style={styles.imageContainer}>
							{roomData.item.studentImage === '../../../assets/logo.png' ?
							<Image style={styles.profile} source={require('../../../assets/logo.png')}/>
							:<Image style={styles.profile} source={{uri: roomData.item.studentImage}}/>}
						</View>
						<View style={styles.content}>
							<Text style={styles.contact}>{roomData.item.studentName}</Text>
							<Text style={styles.message}>Last message goes here</Text>
						</View>
						</>
					}
				 	</TouchableOpacity>
				)
			}}/>
			</View>
		</>
	)
}