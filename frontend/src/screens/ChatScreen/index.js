import { View, Text } from 'react-native'

import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import database from '@react-native-firebase/database';
import { useUser } from '../../Context/User';


export default function ChatScreen( {route} ) {
	const [messages, setMessages] = useState([]);
	const {user} = useUser()
	const isStudent = route.params.isStudent
	const roomId = isStudent ? `${user.id}-${route.params.reciever.id}` : `${route.params.reciever.id}-${user.id}`
	const avatar = user.profile_image || '../../../assets/logo.png'

	const WIDTH = 200 
	const HEIGHT = 2000

	useEffect(() => {
		console.log("error")
		var arr = []
		database()
		.ref('room1')
		.on('value', snapshot => {
			if (snapshot.val()){
				arr = []
				for (const item in (snapshot.val().messages)) {
				arr = [...arr, snapshot.val().messages[item]]
			}
		}
		setMessages(arr)
		});
	}, [])

	function onSend(messages = []) {
		const createdAt = messages[0].createdAt
		messages[0] = {...messages[0], createdAt: createdAt.toString(), }
		messages[0].user = {_id: user.id, name: `${user.fname} ${user.lname}`, avatar: avatar}
		if(route.params.reciever.fname) {
			database()
				.ref(`rooms/${roomId}`)
				.update(
					{studentName: `${user.fname} ${user.lname}`,
					tutorName: `${route.params.reciever.fname} ${route.params.reciever.lname}`,
					studentImage: avatar,
					tutorImage: route.params.reciever.profile_image || '../../../assets/logo.png'
				})
			}
		database()
			.ref(`rooms/${roomId}/messages/${createdAt.getTime()}`)
			.set(
			messages[0]
			)
		database()
		.ref(`rooms/${roomId}`)
		.update(
			{lastMessage: messages[0].text}
		)
	}
	
	return (
		<>
		<GiftedChat
			messages={messages}
			onSend={messages => onSend(messages)}
			user={{
			_id: user.id,

			}}
		/>
		</>
	)

}