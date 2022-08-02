import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'
import { addSelectedSubjects, getSubjects, handleSelect, isSelected } from './controller'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FullWidthButton from '../../components/FullWidthButton'
import { useNavigation } from '@react-navigation/native'
import AbsolutePositionButtonContainer from '../../components/AbsolutePositionButtonContainer'
import { useUser } from '../../Context/User'
import Container from '../../components/Container'
import Subjcets from '../../components/Subjects'

export default function AddSubjectsScreen( {route} ){
    let user = route.params.user
    const [subjects, setSubjects] = useState([])
    const [selectedSubjects, setSelectedSubjects] = useState([])
    const {setUser} = useUser()
    const navigation = useNavigation()
    console.log(selectedSubjects)

    useEffect(function(){
        getSubjects(setSubjects);
      }, []);

    return (
            <>
            <Container>
            <OnBoardingTitle/>
            <OnBoardingPrompt message="Pick your subjects"/>
            <Subjcets subjects={subjects} selectedSubjects={selectedSubjects} setSelectedSubjects={setSelectedSubjects}/>
            </Container>
            <>
            <AbsolutePositionButtonContainer>
                <FullWidthButton text="Next" onHandlePress={()=>addSelectedSubjects(selectedSubjects, navigation, user, setUser)}/>
            </AbsolutePositionButtonContainer>
            </>
            </>
    )
}