import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token';
import axios from 'axios';

export async function getSubjects(setSubjects, user) {
    const token = await getToken()
    axios({
        method: "get",
        url: "http://192.168.1.105:8000/api/v1/subject",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      })
    .then(function(response){
        setSubjects(filterSubjects(response.data.subjects, user))
    })
    .catch(function(error){
        console.log(error)
        let message = Object.values(error.response.data);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    })
}
