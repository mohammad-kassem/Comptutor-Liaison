import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'

export default function ScheduleScreen({ route }) {
    const tutor = route.params.tutor

  return (
    <View>
      <Text>ScheduleScreen</Text>
    </View>
    )
}