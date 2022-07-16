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

export async function addSchedule(date, time, schedules, setSchedules, duration = 1){
    const token = await getToken()
    const end_time = new Date(time.getTime() + (duration * 60 * 60 * 1000))
    const schedule = {"date": toDateString(date), "start_time": toTimeString(time), "end_time": toTimeString(end_time)}
    if (scheduleIsClashing(schedule, schedules)) {alert("Schedule intervals are clashing"); return}
    let hours = {"hours": [schedule]}
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
            console.log(response.data.schedule)
            console.log(schedules)
            setSchedules([...schedules, ...response.data.schedule])
        })
        .catch(function(error){
            let message = Object.values(error.response.data);
            alert(message[0]);
    })
}

export function scheduleIsClashing(schedule, schedules){
    for (let i = 0; i < schedules.length; i++){
        const startTime = new Date(schedules[i].date + "T" + schedules[i].start_time)
        const endTime = new Date(schedules[i].date + "T" + schedules[i].end_time)
        
        const scheduleStartTime = new Date(schedule.date + "T" + schedule.start_time)
        const scheduleEndTime = new Date(schedule.date + "T" + schedule.end_time)

        if (scheduleStartTime.getTime() <= endTime.getTime() && scheduleEndTime.getTime() >= startTime.getTime()) return true 
    }
}