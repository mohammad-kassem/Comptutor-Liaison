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
    // data = new FormData()
    // data.append("schedule_id", 28)
    const token = await getToken()
    console.log(token);
    axios({
        method: "get",
        url: `http://192.168.1.105:8000/api/v1/tutor/schedule/available/${tutorId}`,
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      })
      .then(function(response){
        console.log("hello")
        setSchedules(response.data.available_times)
        // alert(await response.data.message);
      })
      .catch(error=>console.log(error))
        // console.log("error")
        // let message = Object.values( await error.response.data);
        // alert(message[0]);
      
};
