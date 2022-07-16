import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'
import { TextInput } from 'react-native-gesture-handler'

export default function UpdateInfoScreen() {
  return (
    <View style={styles.container}>
        <OnBoardingTitle/>
        <OnBoardingPrompt message="Complete your info"/>
        <Text style={styles.sectionPrompt}>Fill your profile</Text>
    </View>
  )
}