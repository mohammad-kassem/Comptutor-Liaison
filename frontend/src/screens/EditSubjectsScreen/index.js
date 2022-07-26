import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'
import { addSelectedSubjects, getSubjects, handleSelect, isSelected } from './controller'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FullWidthButton from '../../components/FullWidthButton'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AbsolutePositionButtonContainer from '../../components/AbsolutePositionButtonContainer'
import { useUser } from '../../Context/User'
import Container from '../../components/Container'
import SaveCancelButtons from '../../components/SaveCancelButtons'

export default function EditSubjectsScreen( {route} ){
    const setUserSubjects = route.params.setUserSubjects
    const stack = route.params.stackType
    const [subjects, setSubjects] = useState([])
    const [selectedSubjects, setSelectedSubjects] = useState([])
    const {user, setUser} = useUser()
    const navigation = useNavigation()
    const numColumns = 2
    
    useFocusEffect(
        React.useCallback(()=>{
            getSubjects(setSubjects, user)
        }, [])
    )

    return (
        <Container>
			<Text style={styles.title}>Add subject</Text>
            <FlatList data={subjects} numColumns={numColumns} columnWrapperStyle={styles.subjectsContainer} renderItem={(subjectData) =>{
                return(
                    <TouchableOpacity style={styles.imageContainer} onPress={()=>handleSelect(subjectData.item.id, subjectData.item.subject, subjectData.item.image, selectedSubjects, setSelectedSubjects)}>
                        <Image style={styles.subjectImage} source={{uri:subjectData.item.image,}}/>
                        {isSelected(subjectData.item.id, selectedSubjects) &&
                        <View style={styles.icon}>
                            <Icon name="checkbox-marked-circle" size={24} color="#1877F2"/>
                        </View>}
                    </TouchableOpacity>
                )}
            }
            />
            <>
            <View style={styles.buttonsContainer}>
				<SaveCancelButtons onHandlePress={()=>addSelectedSubjects(setUserSubjects, selectedSubjects, navigation, user, setUser)}/>
            </View>	
            </>
        </Container>
    )
}