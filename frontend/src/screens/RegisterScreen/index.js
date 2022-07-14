import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';


export default function RegisterScreen() {
  const navigation = useNavigation()

  return (
    <>
    <View></View>
    <Text>index</Text>
    <TouchableOpacity>
      <Text onPress={()=> navigation.navigate("LoginScreen")}>Login</Text>
    </TouchableOpacity>
    </>
  )
}