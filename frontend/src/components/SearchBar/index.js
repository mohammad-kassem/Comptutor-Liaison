import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'


export default function SearchBar() {
  return (
    <View style={styles.searchBar}>
        <Icon name="search" style={styles.searchIcon}/>
        <TextInput style={styles.searchInput} placeholder="Search"/>
    </View>
  )
}