import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import axios from 'axios';
import { getToken } from '../../utility/token';
import { localHostV1 } from "../../contsants/constants";
import database from "@react-native-firebase/database";


export async function addAppointment(scheduleId, schedules, setSchedules, tutorId) {
	let data = {"schedule_id": scheduleId, "tutor_id": tutorId}
	const token = await getToken()
	axios({
		method: "post",
		url: `${localHostV1}/appointment/add`,
		headers: {
			"Content-type": "application/json",
			"Authorization": `Bearer ${token}`
		},
		data: data,
	})
	.then(async function(response){
    const x = Math.floor(Math.random() * 100)
		refreshAvailableTimes(scheduleId, schedules, setSchedules)
    database()
    .ref(`appointments/${tutorId}`)
    .update({
      appointment: true
    });
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