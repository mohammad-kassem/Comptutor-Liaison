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
					<InfoFields setRate={setRate} setYears={setYears} setAbout={setAbout} user={user}/>
					<View style={styles.buttonsContainer}>
						<FullWidthButton text="Next" onHandlePress={()=>addInfo({"years": parseInt(years), "rate": parseInt(rate),"about_me": about}, user, setUser)}/>
					</View>
				</Container>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}