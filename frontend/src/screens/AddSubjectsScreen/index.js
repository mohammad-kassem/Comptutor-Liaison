import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'
import { getSubjects } from './controller'

export default function AddSubjectsScreen() {
    const [subjects, setSubjects] = useState([])

    useEffect(function(){
        getSubjects(setSubjects);
      }, []);

    return (
        <View style={styles.container}>
        <OnBoardingTitle/>
        <OnBoardingPrompt message="Pick your subjects"/>
        <FlatList data={subjects} renderItem={(subjectData) =>{
               return(<Text>{subjectData.item.subject}</Text>
            )}
        }
        />
        </View>
    )
}