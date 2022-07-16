import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useUser } from '../../Context/User'
import FullWidthButton from '../../components/FullWidthButton'
import { addInfo } from './controller'

export default function UpdateInfoScreen( {route} ) {
    const user = route.params.user
    const [zoomRate, setZoomRate] = useState()
    const [chatRate, setChatRate] = useState()
    const [about, setAbout] = useState("")
    const navigation = useNavigation()
    const {setUser} = useUser()

  return (
    <View style={styles.container}>
        <OnBoardingTitle/>
        <OnBoardingPrompt message="Complete your info"/>
        <Text style={styles.sectionPrompt}>Fill your profile</Text>
        <Text style={styles.inputTitle}>Zoom rate</Text>
        <TextInput style={styles.input} placeholder="Zoom rate" keyboardType='decimal-pad' onChangeText={(enteredText)=>{setZoomRate(enteredText)}}/>
        <Text style={styles.inputTitle}>Chat rate</Text>
        <TextInput style={styles.input} placeholder="Chat rate" keyboardType='decimal-pad' onChangeText={(enteredText)=>{setChatRate(enteredText)}}/>
        <Text style={styles.inputTitle}>About me</Text>
        <TextInput style={styles.aboutInput} placeholder="About me" multiline={true} onChangeText={(enteredText)=>{setAbout(enteredText)}}/>
        <View style={styles.buttonContainer}>
            <FullWidthButton text="Next" onHandlePress={()=>addInfo({"rate_zoom": zoomRate, "rate_chat": chatRate, "about_me": about}, user, setUser)}/>
        </View>
    </View>
  )
}