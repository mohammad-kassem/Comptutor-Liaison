import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'
import { TextInput } from 'react-native-gesture-handler'
import FullWidthButton from '../../components/FullWidthButton'
import { addDegree } from './controller'
import { useNavigation } from '@react-navigation/native'
import { useUser } from '../../Context/User'

export default function AddDegreeScreen( {route} ) {
    const user = route.params.user
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
    const navigation = useNavigation()
    const {setUser} = useUser()

  return (
    <View style={styles.container}>
        <OnBoardingTitle/>
        <OnBoardingPrompt message="Complete your info"/>
        <Text style={styles.sectionPrompt}>Add your degree to improve your opportunities</Text>
        <Text style={styles.inputTitle}>University</Text>
        <TextInput style={styles.input} placeholder="University or school" onChangeText={(enteredText)=>{setUniversity(enteredText)}}/>
        <Text style={styles.inputTitle}>Degree</Text>
        <TextInput style={styles.input} placeholder="Degree" onChangeText={(enteredText)=>{setDegree(enteredText)}}/>
        <View style={styles.buttonContainer}>
            <FullWidthButton text="Next" onHandlePress={()=>addDegree({university, degree}, user, setUser)}/> 
        </View>
    </View>
  )
}