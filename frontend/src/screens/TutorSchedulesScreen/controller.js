import { View, Text } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token';
import axios from 'axios';
import { localHostV1 } from "../../contsants/constants";


export default async function getSchedules(setSchedules) {
	const token = await getToken()
	axios({
		method: "get",
		url: `${localHostV1}/tutor/schedule/get`,
		headers: {
			"Content-type": "application/json",
			"Authorization": `Bearer ${token}`
			},
		})
	.then(function(response){
		const json = typeof response.data === "object" ? response.data : JSON.parse(response.data + "}")
		setSchedules(json.schedules)
	})
	.catch(function(error){
		let message = Object.values(error.response.data);
		ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
	})
}

export function filterAllTimes(schedules) {
	return (schedules.filter((schedule)=>{
		let d = new Date()
    	d = d.getTime() - d.getTimezoneOffset() * 60 * 1000
		const scheduleTime = new Date(schedule.date + "T" + schedule.end_time).getTime()
		return (scheduleTime > d)
	})
	)
}