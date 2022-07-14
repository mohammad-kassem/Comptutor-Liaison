import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/core';
import { useUser } from '../../Context/User';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function CridentialsFrom({type, onPressHandler }) {
    const navigation = useNavigation()
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isTutor, setIsTutor] = useState(false)

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
      <TouchableOpacity containerStyle={styles.fullWidthButton} onPress={()=>login({email, password})}>
        <Text style={styles.fullWidthButtonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.registerMessage}>
        <Text>Not a member?</Text>
        <TouchableOpacity>
          <Text style={styles.registerLink} onPress={()=>navigation.navigate("RegisterScreen")}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
    )
}