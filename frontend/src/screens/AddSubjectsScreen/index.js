import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'
import { getSubjects } from './controller'

export default function AddSubjectsScreen() {
    const [subjects, setSubjects] = useState([])
    const [selectedSubjects, setSelectedSubjects] = useState([])
    const numColumns = 2
    useEffect(function(){
        getSubjects(setSubjects);
      }, []);

    return (
        <View style={styles.container}>
        <OnBoardingTitle/>
        <OnBoardingPrompt message="Pick your subjects"/>
        <FlatList data={subjects} numColumns={numColumns} columnWrapperStyle={styles.subjectsContainer} renderItem={(subjectData) =>{
               return(
                <TouchableOpacity style={styles.imageContainer}>
                    <Image style={styles.tutorProfile} source={{uri:subjectData.item.image,}}/>
                </TouchableOpacity>
            )}
        }
        />
        </View>
    )
}