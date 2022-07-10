import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'


export default function SearchBar({original, setTutors}) {
    function filter(searchText){
        setTutors(original.filter((tutor)=> tutor.fname.toLowerCase().includes(searchText) || tutor.lname.toLowerCase().includes(searchText)))
    }

    return (
        <View style={styles.searchBar}>
            <Icon name="search" style={styles.searchIcon}/>
            <TextInput style={styles.searchInput} placeholder="Search" onChangeText={(searchText)=>filter(searchText)}/>
        </View>
    )
}