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
        setAppointments(appointments.filter((appointment)=>
        appointment.schedule_id !== id))
    })
    .catch(function(error){
        let message = Object.values(error.response.data);
        ToastAndroid(message[0][0], ToastAndroid.SHORT) 
    })
};

export async function getAppointments(setAppointments, stackType) {
    const token = await getToken();
    axios({
        method: "get",
        url: `http://192.168.1.105:8000/api/v1/appointment/${stackType}`,
        headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json"}
    })
    .then(function(response){
        const json = typeof response.data === "object" ? response.data : JSON.parse(response.data + "}")
        setAppointments(json.appointments)
    })
    .catch(function(error){
        let message = Object.values(error.response.data);
        ToastAndroid(message[0][0], ToastAndroid.SHORT) 
    })
};

export function groupAppointments(appointments) {
	let groupedAppointments = []
	if (appointments.length !== 0){
		groupedAppointments = appointments.reduce(function (r, a) {
			r[a.schedule.date] = r[a.schedule.date] || [];
			r[a.schedule.date].push(a);
			return r;
		}, Object.create(null));
	}
    console.log("output", groupedAppointments)
	return groupedAppointments
}
