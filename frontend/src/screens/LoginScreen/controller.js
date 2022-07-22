import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { setToken } from '../../components/utility/Token';
import axios from 'axios';

export function login(cridentials, setUser){
    axios({
        method: "post",
        url: "http://192.168.1.105:8000/api/v1/auth/login",
        headers: {
            "Content-type": "application/json",
            },
        data: JSON.stringify(cridentials),
    })
    .then(async function(response){
        await setToken(response.data.access_token);
        setUser(response.data.user);
    })
    .catch(function(error){
        let message = Object.values(error.response.data);
        console.log(message);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    })
};
export function setFCM(user, FCM_token){
    axios({
        method: "put",
        url: "http://192.168.1.105:8000/api/v1/FCM/set",
        headers: {
            "Content-type": "application/json",
            },
        data: JSON.stringify({...user, "FCM_token": FCM_token}),
    })
    .then(function(response){
        console.log("success")
    })
    .catch(function(error){
        console.log("error", error)
        let message = Object.values(error.response.data);
        console.log(message);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    })

}