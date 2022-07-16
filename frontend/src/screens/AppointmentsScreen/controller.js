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
        console.log(id)
        setAppointments(appointments.filter((appointment)=>
        appointment.schedule_id !== id))
    })
    .catch(function(error){
        // console.log("error")
        // let message = Object.values(error.response.data);
        // ToastAndroid(message[0], ToastAndroid.SHORT) 
    })
};

export async function getAppointments(setAppointments, stackType) {
    const token = await getToken();
    console.log("tutor")
//     // console.log(token)
//     //     try {
//     //       const res = await fetch("http://192.168.1.105:8000/api/v1/appointment/student",{
//     //         headers: {"Authorization" : `Bearer ${token}`,
//     //         "Content-type": "application/json",
//     //     "Accept": "application/json"}
//     //       });
//     //       const data = await res.json();
//     //       console.log("hello")
//     //       console.log(typeof data)
//     //       setAppointments(data.appointments)
//     //     } catch (err) {
//     //       console.log(err);
//     //     }
//     //   };
    axios({
        method: "get",
        url: `http://192.168.1.105:8000/api/v1/appointment/${stackType}`,
        headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json"}
    })
    .then(function(response){
        // console.log(response)
        console.log("jshjsh")
        let json = response.data;
        console.log(response.data)
        // json = JSON.parse(response.data)
        console.log(typeof response.data)
        setAppointments(json.appointments)
    })
    .catch(function(error){
        console.log(error)
        let message = Object.values(error.response.data);
        ToastAndroid(message[0], ToastAndroid.SHORT) 
    })
};
