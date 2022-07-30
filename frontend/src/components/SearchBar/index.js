import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { TextInput } from 'react-native-gesture-handler'


export default function SearchBar({original, setTutors}) {
    function filter(searchText){
        setTutors(original.filter((tutor)=> {
            if ((tutor.fname.toLowerCase() + " " + tutor.lname.toLowerCase()).includes(searchText)) return true;
            for (let tutorSubject of Object.values(tutor.subjects)){
                if (tutorSubject.subject.toLowerCase().includes(searchText)) return true
            }
        }))
    }

    return (
        <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
            <Icon name="search" style={styles.searchIcon}/>
            <TextInput style={styles.searchInput} placeholder="Search" onChangeText={(searchText)=>filter(searchText.toLowerCase())}/>
        </View>
        </View>
    )
}