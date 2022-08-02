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
import InfoFields from '../../components/InfoFields'
import { useUserOnBoarding } from '../../Context/UserOnBoarding'

export default function UpdateInfoScreen() {
    const [rate, setRate] = useState()
    const [years, setYears] = useState()
    const [about, setAbout] = useState()
    const {setUser} = useUser()
	const {userOnBoarding, setUserOnBoarding} = useUserOnBoarding()

	return (
		<KeyboardAvoidingView keyboardVerticalOffset={-250} behavior="padding">
			<ScrollView>
				<Container>
					<OnBoardingTitle/>
					<OnBoardingPrompt message="Complete your info"/>
					<Text style={styles.sectionPrompt}>Fill your profile</Text>
					<InfoFields setRate={setRate} setYears={setYears} setAbout={setAbout} user={userOnBoarding}/>
					<View style={styles.buttonsContainer}>
						<FullWidthButton text="Next" onHandlePress={()=>addInfo({"years": parseInt(years), "rate": parseInt(rate),"about": about}, userOnBoarding, setUserOnBoarding, setUser)}/>
					</View>
				</Container>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}