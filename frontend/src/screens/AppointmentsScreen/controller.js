import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token';
import axios from 'axios';

export async function deleteAppointment(id, appointments,  setAppointments) {
    const token = await getToken();
    axios({
        method: "delete",
        url: `http://192.168.1.105:8000/api/v1/appointment/delete/${id}`,
        headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`}
    })
    .then(async function(response){
        // ToastAndroid.show(response.data.messsage, ToastAndroid.SHORT)
        console.log(id, appointments)
        setAppointments(appointments.filter((appointment)=>
        appointment.schedule_id !== id))
    })
    .catch(function(error){
        // console.log("error")
        // let message = Object.values(error.response.data);
        // ToastAndroid(message[0], ToastAndroid.SHORT) 
    })
};
