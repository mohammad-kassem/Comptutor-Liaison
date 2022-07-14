import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'

export default function AddSubjectsScreen() {
  return (
    <View style={styles.container}>
      <OnBoardingTitle/>
      <OnBoardingPrompt message="Pick your subjects"/>
    </View>
  )
}