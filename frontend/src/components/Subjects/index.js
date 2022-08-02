import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { isSelected } from '../../screens/AddSubjectsScreen/controller'
import { handleSelect } from '../../screens/EditSubjectsScreen/controller'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

export default function Subjcets({subjects, selectedSubjects, setSelectedSubjects}) {
  return (
    <FlatList data={subjects} numColumns={2} columnWrapperStyle={styles.subjectsContainer} renderItem={(subjectData) =>{
        return(
            <TouchableOpacity style={styles.imageContainer} onPress={()=>handleSelect(subjectData.item.id, subjectData.item.subject, subjectData.item.image, selectedSubjects, setSelectedSubjects)}>
                <Image  style={styles.subjectImage} source={{uri:subjectData.item.image,}}/>
                {isSelected(subjectData.item.id, selectedSubjects) &&
                <View style={styles.icon}>
                    <Icon name="checkbox-marked-circle" size={24} color="#1877F2"/>
                </View>}
            </TouchableOpacity>
        )}
    }
    />
  )
}