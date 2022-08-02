import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { setToken } from '../../components/utility/Token';
import axios from 'axios';
import { localHostV1 } from "../../contsants/constants";



export function register(cridentials, navigation, setUserOnBoarding){
    axios({
        method: "post",
        url: `${localHostV1}/auth/register`,
        headers: {
            "Content-type": "application/json",
        },
        data: JSON.stringify(cridentials),
    })
    .then(async function(response){
        await setToken(response.data.access_token);
        navigation.navigate('VerificationScreen')
        setUserOnBoarding(response.data.user)
    })
    .catch(function(error){
        let message = Object.values(error.response.data);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    })
};

