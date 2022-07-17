import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token';
import axios from 'axios';

export function groupSchedules(schedules) {
	let groupedSchedule = []
	if (schedules.length !== 0){
		groupedSchedule = schedules.reduce(function (r, a) {
			r[a.date] = r[a.date] || [];
			r[a.date].push(a);
			return r;
		}, Object.create(null));
	}
	return groupedSchedule
}

export async function getAvailableTimes(tutorId, setSchedules) {
    const token = await getToken()
	axios({
		method: "get",
		url: `http://192.168.1.105:8000/api/v1/tutor/schedule/available/${tutorId}`,
		headers: {
		"Content-type": "application/json",
		"Authorization": `Bearer ${token}`
		},
	})
	.then(function(response){
		const json = typeof response.data === "object" ? response.data : JSON.parse(response.data + "}")
		setSchedules(json.available_times)
	})
	.catch(function(error){
		let message = Object.values(error.response.data);
		ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
	})
};
