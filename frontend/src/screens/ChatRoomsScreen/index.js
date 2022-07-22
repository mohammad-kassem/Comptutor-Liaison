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
		</>
	)
}