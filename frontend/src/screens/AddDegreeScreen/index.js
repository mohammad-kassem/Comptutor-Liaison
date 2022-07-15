import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'

export default function AddDegreeScreen() {
  return (
    <View style={styles.container}>
        <OnBoardingTitle/>
        <OnBoardingPrompt message="Complete your info"/>
    </View>
  )
}