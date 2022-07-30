import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'
import { TextInput } from 'react-native-gesture-handler'
import { useUser } from '../../Context/User'
import FullWidthButton from '../../components/FullWidthButton'
import { addInfo } from './controller'
import Container from '../../components/Container'

export default function UpdateInfoScreen( {route} ) {
    const user = route.params.user
    const [rate, setRate] = useState()
    const [years, setYears] = useState()
    const [about, setAbout] = useState()
    const {setUser} = useUser()

	return (
		<KeyboardAvoidingView keyboardVerticalOffset={-250} behavior="padding">
			<ScrollView>
				<Container>
					<OnBoardingTitle/>
					<OnBoardingPrompt message="Complete your info"/>
					<Text style={styles.sectionPrompt}>Fill your profile</Text>
					<Text style={styles.fieldTitle}>Rate</Text>
					<TextInput style={styles.field} placeholder="Rate" keyboardType='decimal-pad' onChangeText={(enteredText)=>{setRate(enteredText)}}/>
					<Text style={styles.fieldTitle}>Teaching since</Text>
					<TextInput style={styles.field} placeholder="Teaching since" keyboardType='decimal-pad' onChangeText={(enteredText)=>{setYears(enteredText)}}/>
					<Text style={styles.fieldTitle} multiline={true}>About</Text>
					<TextInput style={styles.about} placeholder="About" multiline={true} onChangeText={(enteredText)=>{setAbout(enteredText)}}/>
					<View style={styles.buttonsContainer}>
						<FullWidthButton text="Next" onHandlePress={()=>addInfo({"years": parseInt(years), "rate": parseInt(rate),"about_me": about}, user, setUser)}/>
					</View>
				</Container>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}