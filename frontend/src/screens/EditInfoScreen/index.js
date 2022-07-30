import { View, Text, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UserContext, useUser } from '../../Context/User'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import SaveCancelButtons from '../../components/SaveCancelButtons'
import { addInfo } from './controller'
import Container from '../../components/Container'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FullWidthButton from '../../components/FullWidthButton'

export default function EditInfoScreen() {
    const {user, setUser} = useUser()
    const [fname, setFname] = useState(user.fname)
    const [lname, setLname] = useState(user.lname)
    let [rate, setRate] = useState(user.rate)
    let [years, setYears] = useState(user.since)
    const [about, setAbout] = useState(user.about)
    const navigation =  useNavigation()

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={-250} behavior='padding'>
        <ScrollView>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Edit Personal Info</Text>
            </View>
            <Container>
            <Text style={styles.fieldTitle}>First name</Text>
            <TextInput style={styles.field} defaultValue={fname} placeholder="First name" onChangeText={(enteredText)=>{setFname(enteredText)}}/>
            <Text style={styles.fieldTitle}>Last name</Text>
            <TextInput style={styles.field} defaultValue={lname} placeholder="Last name" onChangeText={(enteredText)=>{setLname(enteredText)}}/>
            {user.role_id === 2 && 
            <>
            <Text style={styles.fieldTitle}>Rate</Text>
            <TextInput style={styles.field} defaultValue={user.rate.toFixed()} placeholder="Rate" keyboardType='decimal-pad' onChangeText={(enteredText)=>{setRate(enteredText)}}/>
            <Text style={styles.fieldTitle}>Teaching since</Text>
            <TextInput style={styles.field} defaultValue={user.since.toFixed()} placeholder="Teaching since" keyboardType='decimal-pad' onChangeText={(enteredText)=>{setYears(enteredText)}}/>
            <Text style={styles.fieldTitle} multiline={true}>About</Text>
            <TextInput style={styles.about} defaultValue={about} placeholder="About" multiline={true} onChangeText={(enteredText)=>{setAbout(enteredText)}}/>
            </>}
            <View style={[styles.buttonsContainer, user.role_id === 1 && styles.studentButton]}>
                <FullWidthButton text="Save Changes" onHandlePress={()=>addInfo({"fname": fname, "lname": lname, "years": parseInt(years), "rate": parseInt(rate),"about_me": about}, user, setUser, navigation)}/>
            </View>
            </Container>
        </ScrollView>
    </KeyboardAvoidingView>

  )
}