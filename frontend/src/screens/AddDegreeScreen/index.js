import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'
import { TextInput } from 'react-native-gesture-handler'
import FullWidthButton from '../../components/FullWidthButton'
import { addDegree, getUniversities } from './controller'
import { useNavigation } from '@react-navigation/native'
import Container from '../../components/Container'
import { Dropdown } from 'react-native-element-dropdown'
import DegreeFields from '../../components/DegreeFields'

export default function AddDegreeScreen( {route} ) {
    const user = route.params.user
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
	const [universities, setUniversities] = useState([])
    const navigation = useNavigation()

	useEffect(function(){
        getUniversities(setUniversities);
      }, []);

	console.log(universities)

	return (
		<KeyboardAvoidingView keyboardVerticalOffset={-250} behavior="padding">
			<ScrollView>
				<Container>
					<OnBoardingTitle/>
					<OnBoardingPrompt message="Complete your info"/>
					<Text style={styles.sectionPrompt}>Add your degree to improve your opportunities</Text>
					<DegreeFields setDegree={setDegree} setUniversity={setUniversity} university={university} universities={universities}/>
					<View style={styles.buttonsContainer}>
						<FullWidthButton text="Next" onHandlePress={()=>addDegree({university, degree}, user, navigation)}/> 
					</View>
				</Container>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}