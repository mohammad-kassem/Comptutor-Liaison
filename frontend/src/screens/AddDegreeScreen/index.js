import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'
import { TextInput } from 'react-native-gesture-handler'

export default function AddDegreeScreen() {
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")

  return (
    <View style={styles.container}>
        <OnBoardingTitle/>
        <OnBoardingPrompt message="Complete your info"/>
        <Text style={styles.sectionPrompt}>Add your degree to improve your opportunities</Text>
        <Text style={styles.inputTitle}>University</Text>
        <TextInput style={styles.input} placeholder="University or school" onChangeText={(enteredText)=>{setUniversity(enteredText)}}/>
        <Text style={styles.inputTitle}>Degree</Text>
        <TextInput style={styles.input} placeholder="Degree" onChangeText={(enteredText)=>{setDegree(enteredText)}}/> 
    </View>
  )
}