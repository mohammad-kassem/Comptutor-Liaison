import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Bubble, Send } from 'react-native-gifted-chat'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import database from '@react-native-firebase/database';


export function renderBubble(props) {
  return (
    <Bubble
    {...props}
    wrapperStyle={{
        right: {
            backgroundColor: "#1877F2"
        },
        left: {
            backgroundColor: "white"
        }
    }}/>
  )
}

export function renderSend(props) {
    return (
      <Send {...props}>
        <Icon name="send" size={24} color="#1877F2" style={styles.icon}/>
      </Send>
    )
  }

  export function onSend(messages = [], user, route, avatar, roomId) {
		const createdAt = messages[0].createdAt
		messages[0] = {...messages[0], createdAt: createdAt.toString(), }
		messages[0].user = {_id: user.id, name: `${user.fname} ${user.lname}`, avatar: avatar}
		if(route.params.reciever.fname) {
			database()
			.ref(`rooms/${roomId}`)
			.update({
				studentName: `${user.fname} ${user.lname}`,
				tutorName: `${route.params.reciever.fname} ${route.params.reciever.lname}`,
				studentId: user.id,
				tutorId: route.params.reciever.id,
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
		.update({
			lastMessage: messages[0].text,
			lastSent: createdAt.getTime(),
			studentUnread: user.role_id === 1 ? false : true,
			tutorUnread: user.role_id === 2 ? false : true
		}
		)
	}