import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import database from '@react-native-firebase/database'
import { useUser } from '../../Context/User'
import { filterRooms } from './controller'
import { useRooms } from '../../Context/Rooms'
import ChatRoom from '../../components/ChatRoom'


export default function ChatRoomsScreen() {
	const navigation = useNavigation()
	const {user} = useUser()
	let {rooms, setRooms} = useRooms()
	
	rooms = filterRooms(rooms, user)

	return (
		<>
		<Text style={styles.title}>Chat Rooms</Text>
		<View style={styles.roomContainer}>
			<FlatList data={rooms} renderItem={(roomData) =>{
                return(
					<ChatRoom roomData={roomData}/>
				)
			}}/>
			</View>
		</>
	)
}