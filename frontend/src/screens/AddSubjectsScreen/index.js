import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'
import { getSubjects } from './controller'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
                    <Image style={styles.subjectImage} source={{uri:subjectData.item.image,}}/>
                    <View style={styles.icon}>
                        <Icon name="checkbox-marked-circle" size={24} color="#1877F2"/>
                    </View>
                </TouchableOpacity>
            )}
        }
        />
        </View>
    )
}