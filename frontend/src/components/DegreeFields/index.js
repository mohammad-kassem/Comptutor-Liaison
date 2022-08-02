import { View, Text } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

export default function DegreeFields({setDegree, setUniversity, university, universities}) {
    console.log(universities)
    return (
        <>
        <Text style={styles.fieldTitle}>University</Text>
        <Dropdown
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        data={universities}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select a university"
        value={university}
        onChange={item => {
            setUniversity(item.value);
        }}
        />					
        <Text style={styles.fieldTitle}>Degree</Text>
        <TextInput style={styles.field} placeholder="Degree" onChangeText={(enteredText)=>{setDegree(enteredText)}}/>
        </>
    )
}