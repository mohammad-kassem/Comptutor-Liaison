import { View, Text } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token'
import axios from 'axios'

export function toDateString(date) {
    return `${date.getFullYear()}-${date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`
}

export function toTimeString(date) {
    return `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`
}

export async function addSchedule(date, time, duration = 1){
    const token = await getToken()
    let end_time = time;
    end_time = new Date(time.getTime() + (duration * 60 * 60 * 1000))
    console.log(toTimeString(time), toTimeString(end_time), toDateString(date))
    const schedule = [{"date": toDateString(date), "start_time": toTimeString(time), "end_time": toTimeString(end_time)}]
    let hours = {"hours": schedule}
    axios({
        method: "post",
        url: "http://192.168.1.105:8000/api/v1/tutor/schedule/add",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        data: JSON.stringify(hours) 
        })
        .then(function(response){
            console.log(response.data.message)
        })
        .catch(function(error){
            console.log(error)
            let message = Object.values(error.response.data);
            alert(message[0]);
    })
}