import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import axios from 'axios';
import { getToken } from '../utility/Token';

export async function addAppointment(scheduleId, schedules, setSchedules, tutorId) {
	let data = {"schedule_id": scheduleId, "tutor_id": tutorId}
	const token = await getToken()
	axios({
		method: "post",
		url: "http://192.168.1.105:8000/api/v1/appointment/add",
		headers: {
			"Content-type": "application/json",
			"Authorization": `Bearer ${token}`
		},
		data: data,
	})
	.then(async function(response){
		refreshAvailableTimes(scheduleId, schedules, setSchedules)
		ToastAndroid.show(response.data.message, ToastAndroid.SHORT)
	})
	.catch(function(error){
		let message = Object.values(error.response.data);
		ToastAndroid.show(message[0][0], ToastAndroid.SHORT);
	})
};

export function refreshAvailableTimes(scheduleId, schedules, setSchedules){
	setSchedules(schedules.filter((schedule)=>
	schedule.id !== scheduleId
	))
}