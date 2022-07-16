import { View, Text } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token';
import axios from 'axios';

export default async function getSchedules(setSchedules) {
	const token = await getToken()
	axios({
		method: "get",
		url: "http://192.168.1.105:8000/api/v1/tutor/schedule/get",
		headers: {
			"Content-type": "application/json",
			"Authorization": `Bearer ${token}`
			},
		})
	.then(function(response){
		setSchedules(response.data.schedules)
		})
	.catch(error=>console.log(error))
}