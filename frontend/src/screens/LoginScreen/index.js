import React from 'react'
import styles from './styles';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export default function LoginScreen() {
  const navigation = useNavigation()

  return (
    <>
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageTitle}>Hello Again!</Text>
        <Text style={styles.messageContent}>Welcome back you've been missed!</Text>
      </View>
      
      <TextInput style={styles.input} placeholder="Email"/>
      
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}/>
      <TouchableOpacity containerStyle={styles.fullWidthButton}>
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
