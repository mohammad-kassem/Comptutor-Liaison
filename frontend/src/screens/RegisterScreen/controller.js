import { View, Text } from 'react-native'
import React from 'react'
import { setToken } from '../../components/utility/Token';
import axios from 'axios';


export function register(cridentials, navigation){
    axios({
        method: "post",
        url: "http://192.168.1.105:8000/api/v1/auth/register",
        headers: {
            "Content-type": "application/json",
        },
        data: JSON.stringify(cridentials),
    })
    .then(async function(response){
        await setToken(response.data.access_token);
        navigation.navigate('AddSubjectsScreen', {user: response.data.user})
    })
    .catch(function(error){
        let message = Object.values(error.response.data);
        alert(message[0]);
    })
};

