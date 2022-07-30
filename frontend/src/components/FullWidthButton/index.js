import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'
import      Icon from 'react-native-vector-icons/FontAwesome'

export default function FullWidthButton({ text, onHandlePress, icon, color }) {
    return (
        <TouchableOpacity containerStyle={color === "green" ? [styles.fullWidthButton, styles.green] : styles.fullWidthButton} onPress={onHandlePress}>
            <View style={styles.buttonContent}>
            {icon && <Icon name={icon} size={24} color="#1877F2"/>} 
            <Text style={color === "green" ? [styles.fullWidthButtonText, styles.white] : styles.fullWidthButtonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}