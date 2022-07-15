import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'
import { addSelectedSubjects, getSubjects, handleSelect, isSelected } from './controller'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FullWidthButton from '../../components/FullWidthButton'
import { useNavigation } from '@react-navigation/native'

export default function AddSubjectsScreen() {
    const [subjects, setSubjects] = useState([])
    const [selectedSubjects, setSelectedSubjects] = useState([])
    const navigation = useNavigation()
    const numColumns = 2
    console.log(selectedSubjects)

    useEffect(function(){
        getSubjects(setSubjects);
      }, []);

    return (
        <View style={styles.container}>
        <OnBoardingTitle/>
        <OnBoardingPrompt message="Pick your subjects"/>
        <FlatList data={subjects} numColumns={numColumns} columnWrapperStyle={styles.subjectsContainer} renderItem={(subjectData) =>{
               return(
                <TouchableOpacity style={styles.imageContainer} onPress={()=>handleSelect(subjectData.item.id, selectedSubjects, setSelectedSubjects)}>
                    <Image style={styles.subjectImage} source={{uri:subjectData.item.image,}}/>
                    {isSelected(subjectData.item.id, selectedSubjects) &&
                    <View style={styles.icon}>
                        <Icon name="checkbox-marked-circle" size={24} color="#1877F2"/>
                    </View>}
                </TouchableOpacity>
            )}
        }
        />
        <FullWidthButton text="Next" onHandlePress={()=>addSelectedSubjects(selectedSubjects, navigation)}/>
        </View>
    )
}