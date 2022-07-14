import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/core';
import { useUser } from '../../Context/User';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function CridentialsFrom({login }) {
    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {user, setUser} = useUser()

    return (
      <>
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageTitle}>{type === "login" ? "Hello Again!" : "Hello friend!"}</Text>
        <Text style={styles.messageContent}>{type === "login" ? "Welcome back you've been missed!" : "Welcome to Comptutor"}</Text>
      </View>
      
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