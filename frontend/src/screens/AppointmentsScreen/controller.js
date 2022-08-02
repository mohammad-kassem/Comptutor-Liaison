import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token';
import axios from 'axios';
import { localHostV1 } from "../../contsants/constants";


export async function deleteAppointment(id, type, approvedAppointments, pendingAppointments, setApprovedAppointments, setPendingAppointments) {
    const token = await getToken();
    axios({
        method: "delete",
        url: `${localHostV1}/appointment/delete/${id}`,
        headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`}
    })
    .then(async function(response){
        if (type === "approved")
            setApprovedAppointments(approvedAppointments.filter((appointment)=>
            appointment.schedule_id !== id))
        else 
            setPendingAppointments(pendingAppointments.filter((appointment)=>
            appointment.schedule_id !== id))
    })
    .catch(function(error){
        let message = Object.values(error.response.data);
        ToastAndroid(message[0][0], ToastAndroid.SHORT) 
    })
};

export async function approveAppointment(id, approvedAppointments, pendingAppointments, setApprovedAppointments, setPendingAppointments) {
    const token = await getToken();
    axios({
        method: "put",
        url: `${localHostV1}/appointment/approve`,
        headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
        },
        data: {"schedule_id": id}
    })
    .then(function(response){
        setApprovedAppointments([...approvedAppointments, response.data.appointment])
        setPendingAppointments(pendingAppointments.filter((appointment)=>
        appointment.schedule_id !== response.data.appointment.schedule_id))
    })
    .catch(function(error){
        let message = Object.values(error.response.data);
        ToastAndroid(message[0][0], ToastAndroid.SHORT) 
    })
};

export async function getAppointments(setApprovedAppointments, setPendingAppointments, stackType) {
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
        let approved = []
        let pending = []
        for (const appointment of json.appointments){
            appointment.status === 1 ? approved.push(appointment) : pending.push(appointment)
        }
        setApprovedAppointments(approved)
        setPendingAppointments(pending)
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

export function isCancelTime(appointment){
    const appointmentStartTime = new Date(appointment.schedule.date + "T" + appointment.schedule.start_time).getTime()
    let d = new Date()
    d = d.getTime() - d.getTimezoneOffset() * 60 * 1000
    console.log(appointmentStartTime - d)
    return (appointmentStartTime - d > 15 *60 * 1000)
}
