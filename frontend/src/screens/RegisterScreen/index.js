import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import CridentialsFrom from '../../components/CridentialsForm';
import axios from 'axios';
import { setToken } from '../../components/utility/Token';


export default function RegisterScreen() {
  const navigation = useNavigation()
  function register(cridentials){
    console.log(cridentials);
    axios({
      method: "post",
      url: "http://192.168.1.105:8000/api/v1/auth/register",
      headers: {
        "Content-type": "application/json",
      },
      data: JSON.stringify(cridentials),
    })
    .then(function(response){
      setToken(response.data.access_token);
    })
    .catch(function(error){
      console.log(error)
      let message = Object.values(error.response.data);
      alert(message[0]);
    })
  };


  return (
    <CridentialsFrom type="register" onPressHandler={register}/>
  )
}