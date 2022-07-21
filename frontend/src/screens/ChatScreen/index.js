import { View, Text } from 'react-native'

import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import database from '@react-native-firebase/database';


export default function ChatScreen() {
	const [messages, setMessages] = useState([]);

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

	return (
		<>
		<GiftedChat
			messages={messages}
			onSend={messages => onSend(messages)}
			created = {new Date}
			user={{
			_id: 1,
			}}
		/>
		</>
	)

}