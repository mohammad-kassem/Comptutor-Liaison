import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Bubble, Send } from 'react-native-gifted-chat'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'


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