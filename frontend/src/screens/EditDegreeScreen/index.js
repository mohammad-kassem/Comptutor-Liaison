import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'
import { TextInput } from 'react-native-gesture-handler'
import FullWidthButton from '../../components/FullWidthButton'
import { addDegree } from './controller'
import { useNavigation } from '@react-navigation/native'
import Container from '../../components/Container'
import SaveCancelButtons from '../../components/SaveCancelButtons'
import styles from './styles'
import { useUser } from '../../Context/User'

export default function EditDegreeScreen( {route} ) {
	const {user, setUser} = useUser()
	const setDegrees = route.params.setDegrees
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
    const navigation = useNavigation()

	return (
		<KeyboardAvoidingView keyboardVerticalOffset={-250} behavior="padding">
			<ScrollView>
				<Container>
					<Text style={styles.title}>Add degree</Text>
					<Text style={styles.inputTitle}>University</Text>
					<TextInput style={styles.input} placeholder="University or school" onChangeText={(enteredText)=>{setUniversity(enteredText)}}/>
					<Text style={styles.inputTitle}>Degree</Text>
					<TextInput style={styles.input} placeholder="Degree" onChangeText={(enteredText)=>{setDegree(enteredText)}}/>
					<View style={styles.buttonsContainer}>
						<SaveCancelButtons onHandlePress={()=>addDegree({university, degree}, user, setUser, navigation, setDegrees)}/>
					</View>
				</Container>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}