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

export default function AddSubjectsScreen( {route} ){
    let user = route.params.user
    const [subjects, setSubjects] = useState([])
    const [selectedSubjects, setSelectedSubjects] = useState([])
    const {setUser} = useUser()
    const navigation = useNavigation()
    const numColumns = 2
    console.log(selectedSubjects)

    useEffect(function(){
        getSubjects(setSubjects);
      }, []);

    return (
        <Container>
            <OnBoardingTitle/>
            <OnBoardingPrompt message="Pick your subjects"/>
            <FlatList data={subjects} numColumns={numColumns} columnWrapperStyle={styles.subjectsContainer} renderItem={(subjectData) =>{
                return(
                    <TouchableOpacity style={styles.imageContainer} onPress={()=>handleSelect(subjectData.item.id, subjectData.item.subject, selectedSubjects, setSelectedSubjects)}>
                        <Image style={styles.subjectImage} source={{uri:subjectData.item.image,}}/>
                        {isSelected(subjectData.item.id, selectedSubjects) &&
                        <View style={styles.icon}>
                            <Icon name="checkbox-marked-circle" size={24} color="#1877F2"/>
                        </View>}
                    </TouchableOpacity>
                )}
            }
            />
            <AbsolutePositionButtonContainer>
                <FullWidthButton text="Next" onHandlePress={()=>addSelectedSubjects(selectedSubjects, navigation, user, setUser)}/>
            </AbsolutePositionButtonContainer>
        </Container>
    )
}