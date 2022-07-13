import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import axios from 'axios';
import { getToken } from '../utility/Token';

export async function addAppointment(scheduleId, schedules, setSchedules) {
    console.log(scheduleId);
    let data = {"schedule_id": scheduleId}
    // data = new FormData()
    // data.append("schedule_id", 28)
    const token = await getToken()
    console.log(token);
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
        console.log("hello")
        refreshAvailableTimes(scheduleId, schedules, setSchedules)
        ToastAndroid.show(response.data.message, ToastAndroid.SHORT)
      })
      .catch(function(error){
        // console.log("error")
        let message = Object.values(error.response.data);
        ToastAndroid.show(message[0], ToastAndroid.SHORT);
      })
};

export function refreshAvailableTimes(scheduleId, schedules, setSchedules){
  console.log(schedules)
  setSchedules(schedules.filter((schedule)=>
    schedule.id !== scheduleId
  ))
}