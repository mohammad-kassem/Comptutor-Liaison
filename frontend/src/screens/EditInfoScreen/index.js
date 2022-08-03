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
import InfoFields from '../../components/InfoFields'

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
            <InfoFields type="editinfo" setFname={setFname} setLname={setLname} setRate={setRate} setYears={setYears} setAbout={setAbout} user={user}/>
            <View style={[styles.buttonsContainer, user.role_id === 1 && styles.studentButton]}>
                <FullWidthButton text="Save Changes" onHandlePress={()=>addInfo({"fname": fname, "lname": lname, "years": parseInt(years), "rate": parseInt(rate),"about": about}, user, setUser, navigation)}/>
            </View>
            </Container>
        </ScrollView>
    </KeyboardAvoidingView>

  )
}