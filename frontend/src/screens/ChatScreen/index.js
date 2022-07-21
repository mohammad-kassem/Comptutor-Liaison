import { View, Text } from 'react-native'

import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import database from '@react-native-firebase/database';


export default function ChatScreen() {
	const [messages, setMessages] = useState([]);

	const WIDTH = 200 
	const HEIGHT = 2000


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