import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token';
import axios from 'axios';

export async function getAppointments(setAppointments) {
    const token = await getToken();
    axios({
        method: "get",
        url: "http://192.168.1.105:8000/api/v1/appointment/student",
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`}
    })
    .then(function(response){
        setAppointments(response.data.appointments);
    })
    .catch(function(error){
        let message = Object.values(error.response.data);
        ToastAndroid(message[0], ToastAndroid.SHORT) 
    })
};
