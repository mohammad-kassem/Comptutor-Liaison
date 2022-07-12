import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export function onHandlePress(tutor, navigation) {
    navigation.navigate("ScheduleScreen", {"tutor": tutor})
    console.log("hello")
}

