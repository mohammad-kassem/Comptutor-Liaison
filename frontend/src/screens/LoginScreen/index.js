import { useState } from 'react'
import styles from './styles';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';



export default function LoginScreen() {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  function login(cridentials){
    axios({
      method: "post",
      url: "http://192.168.1.11:8000/api/v1/auth/login",
      headers: {
        "Content-type": "application/json",
      },
      data: JSON.stringify(cridentials),
    })
    .then(function(response){
      console.log("success");
    })
    .catch(function(error){
      let message = Object.values(error.response.data);
      alert(message[0]);
    })
  };
  
  return (
    <>
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageTitle}>Hello Again!</Text>
        <Text style={styles.messageContent}>Welcome back you've been missed!</Text>
      </View>
      
      <TextInput style={styles.input} placeholder="Email" onChangeText={(enteredText)=>{setEmail(enteredText)}}/>
      
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(enteredText)=>{setPassword(enteredText)}}/>
      <TouchableOpacity containerStyle={styles.fullWidthButton} onPress={()=>login({email, password})}>
        <Text style={styles.fullWidthButtonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.registerMessage}>
        <Text>Not a member?</Text>
        <TouchableOpacity>
          <Text style={styles.registerLink} onPress={()=>navigation.navigate("RegisterScreen")}> Register</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  )

}
