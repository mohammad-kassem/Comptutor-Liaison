import { View, Text, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UserContext, useUser } from '../../Context/User'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import SaveCancelButtons from '../../components/SaveCancelButtons'
import { addInfo } from './controller'

export default function EditInfoScreen() {
    const {user, setUser} = useUser()
    console.log(user)
    const [fname, setFname] = useState(user.fname)
    const [lname, setLname] = useState(user.lname)
    let [rate, setRate] = useState(user.rate)
    let [years, setYears] = useState(user.since)
    const [about, setAbout] = useState(user.about)
    const navigation =  useNavigation()

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={-250} behavior='padding'>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Info update</Text>
                <Text style={styles.inputTitle}>First name</Text>
                <TextInput style={styles.input} defaultValue={fname} placeholder="First name" onChangeText={(enteredText)=>{setFname(enteredText)}}/>
                <Text style={styles.inputTitle}>Last name</Text>
                <TextInput style={styles.input} defaultValue={lname} placeholder="Last name" onChangeText={(enteredText)=>{setLname(enteredText)}}/>
                {user.role_id === 2 && 
                <>
                <Text style={styles.inputTitle}>Rate</Text>
                <TextInput style={styles.input} defaultValue={user.rate.toFixed()} placeholder="Rate" keyboardType='decimal-pad' onChangeText={(enteredText)=>{setRate(enteredText)}}/>
                <Text style={styles.inputTitle}>Teaching since</Text>
                <TextInput style={styles.input} defaultValue={user.since.toFixed()} placeholder="Teaching since" keyboardType='decimal-pad' onChangeText={(enteredText)=>{setYears(enteredText)}}/>
                <Text style={styles.inputTitle} multiline={true}>About</Text>
                <TextInput style={styles.aboutInput} defaultValue={about} placeholder="About" multiline={true} onChangeText={(enteredText)=>{setAbout(enteredText)}}/>
                </>}
                <View style={styles.buttonsContainer}>
                    <SaveCancelButtons onHandlePress={()=>addInfo({"fname": fname, "lname": lname, "years": parseInt(years), "rate": parseInt(rate),"about_me": about}, user, setUser, navigation)}/>
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>

  )
}