import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { getAvailableTimes } from './controller'

export default function ScheduleScreen({ route }) {
    const tutor = route.params.tutor
    const [schedules, setSchedules] = useState([])

    useEffect(function(){
        getAvailableTimes(tutor.id, setSchedules);
      }, []);

  return (
    <View>
      <Text>ScheduleScreen</Text>
    </View>
    )
}