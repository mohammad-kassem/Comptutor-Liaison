import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Checkbox from 'expo-checkbox';
import { useUser } from '../../Context/User';


export default function CridentialsFrom({type, onPressHandler }) {
    const navigation = useNavigation()
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isTutor, setIsTutor] = useState(false)
    const {user, setUser} = useUser()

    return (
    <>
        <View style={styles.container}>
        <View style={styles.messageContainer}>
            <Text style={styles.messageTitle}>{type === "login" ? "Hello Again!" : "Hello friend!"}</Text>
            <Text style={styles.messageContent}>{type === "login" ? "Welcome back you've been missed!" : "Welcome to Comptutor"}</Text>
        </View>
        {type === "register" && 
        <>
        <TextInput style={styles.input} placeholder="First name" onChangeText={(enteredText)=>{setFname(enteredText)}}/>
        <TextInput style={styles.input} placeholder="Last name" onChangeText={(enteredText)=>{setLname(enteredText)}}/>
        </>
        }
        <TextInput style={styles.input} placeholder="Email" onChangeText={(enteredText)=>{setEmail(enteredText)}}/>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(enteredText)=>{setPassword(enteredText)}}/>

        {type === "login" ?
        (<>
        <TouchableOpacity containerStyle={styles.fullWidthButton} onPress={()=>onPressHandler({email, password}, setUser)}>
            <Text style={styles.fullWidthButtonText}>Log in</Text>
        </TouchableOpacity> 
        <View style={styles.navigationMessage}>
            <Text>Not a member?</Text>
            <TouchableOpacity>
            <Text style={styles.navigationLink} onPress={()=>navigation.navigate("RegisterScreen")}> Register</Text>
            </TouchableOpacity> 
            </View></>) : (
            <>
            <View style={styles.checkboxContainer}>
            <Checkbox
                disabled={false}
                value={isTutor}
                color={"#1877F2"}
                onValueChange={(newValue) => setIsTutor(newValue)}
            />
            <Text style={styles.isTutorMessage}>Register as tutor</Text>
            </View>
            <TouchableOpacity containerStyle={styles.fullWidthButton} onPress={()=>onPressHandler({fname, lname, email, password, is_tutor: isTutor}, navigation)}>
            <Text style={styles.fullWidthButtonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.navigationMessage}>
            <Text>Already a member?</Text>
            <TouchableOpacity>
            <Text style={styles.navigationLink} onPress={()=>navigation.navigate("LoginScreen")}> Login</Text>
            </TouchableOpacity>
            </View></>)}
        </View>
    </>
    )
}