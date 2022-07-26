import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token';
import axios from 'axios';
import { localHostV1 } from "../../contsants/constants";


export async function deleteAppointment(id, appointments,  setAppointments) {
    const token = await getToken();
    axios({
        method: "delete",
        url: `${localHostV1}/appointment/delete/${id}`,
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
        url: `${localHostV1}/appointment/${stackType}`,
        headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json"}
    })
    .then(function(response){
        const json = typeof response.data === "object" ? response.data : JSON.parse(response.data + "}")
        setAppointments(json.appointments)
        console.log(json.appointments)
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

export function filterAppointments(appointments) {
	return (appointments.filter((appointment)=>{
        let d = new Date()
        d = d.getTime() - d.getTimezoneOffset() * 60 * 1000
		const appointmentTime = new Date(appointment.schedule.date + "T" + appointment.schedule.end_time).getTime()
		return (appointmentTime > d)
	})
	)
}

export function isAppointmentTime(appointment){
    const appointmentStartTime = new Date(appointment.schedule.date + "T" + appointment.schedule.start_time).getTime()
    const appointmentEndTime = new Date(appointment.schedule.date + "T" + appointment.schedule.end_time).getTime()
	console.log(appointmentStartTime, new Date().toLocaleString(), appointmentEndTime, appointment.schedule.date, appointment.schedule.start_time, appointment.schedule.end_time, appointmentStartTime < new Date().getTime() && appointmentEndTime > new Date().getTime())
    let d = new Date()
    d = d.getTime() - d.getTimezoneOffset() * 60 * 1000
    return (appointmentStartTime > d || appointmentEndTime < d)
}
