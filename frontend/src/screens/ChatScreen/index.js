import { View, Text, ImageBackground } from 'react-native'

import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import database from '@react-native-firebase/database';
import { useUser } from '../../Context/User';
import { renderBubble, renderSend } from './controller';


export default function ChatScreen( {route} ) {
	const [messages, setMessages] = useState([]);
	const {user} = useUser()
	const roomId = user.role_id === 1 ? `${user.id}-${route.params.reciever.id}` : `${route.params.reciever.id}-${user.id}`
	const avatar = user.profile_image || '../../../assets/logo.png'

	useEffect(() => {
		var arr = []
		database()
		.ref(`rooms/${roomId}/messages`)
		.orderByChild('createdAt')
		.on('value', async snapshot => {
			if (snapshot.val()){
				arr = []
				snapshot.forEach((message) => {
					arr.push(message._snapshot.value)
				})
				setMessages([...(arr || [] )].reverse())		
	
			}
		})		
		}
	, [])

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
					tutorImage: route.params.reciever.profile_image || require('../../../assets/logo.png')
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
			{lastMessage: messages[0].text,
			lastSent: createdAt.toLocaleTimeString()
		}
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
			renderAvatar={null}
			alwaysShowSend={true}
			keyboardShouldPersistTaps="never"
			minComposerHeight={50}
			minInputToolbarHeight={55}
			renderBubble={renderBubble}
			renderSend={renderSend}
			timeFormat="HH:mm"
		/>
		</>
	)

}