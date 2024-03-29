import { View, Text, ToastAndroid } from "react-native";
import React from "react";
import { getToken } from "../../utility/token";
import axios from "axios";
import { localHostV1 } from "../../contsants/constants";

export function toDateString(date) {
  return `${date.getFullYear()}-${
    date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
}

export function toTimeString(date) {
  return `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  }`;
}

export async function addSchedule(
  date,
  time,
  schedules,
  setSchedules,
  duration = 1
) {
  const token = await getToken();
  const end_time = new Date(time.getTime() + duration * 60 * 60 * 1000);
  const schedule = {
    date: toDateString(date),
    start_time: toTimeString(time),
    end_time: toTimeString(end_time),
  };
  if (scheduleIsClashing(schedule, schedules)) {
    ToastAndroid.show("Schedule intervals are clashing", ToastAndroid.SHORT);
    return;
  }
  let hours = { hours: [schedule] };
  axios({
    method: "post",
    url: `${localHostV1}/tutor/schedule/add`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify(hours),
  })
    .then(function (response) {
      setSchedules([...schedules, ...response.data.schedule]);
      ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
    })
    .catch(function (error) {
      let message = Object.values(error.response.data);
      ToastAndroid.show(message[0][0], ToastAndroid.SHORT);
    });
}

export function scheduleIsClashing(schedule, schedules) {
  for (let i = 0; i < schedules.length; i++) {
    const startTime = new Date(
      schedules[i].date + "T" + schedules[i].start_time
    );
    const endTime = new Date(schedules[i].date + "T" + schedules[i].end_time);

    const scheduleStartTime = new Date(
      schedule.date + "T" + schedule.start_time
    );
    const scheduleEndTime = new Date(schedule.date + "T" + schedule.end_time);

    if (
      scheduleStartTime.getTime() <= endTime.getTime() &&
      scheduleEndTime.getTime() >= startTime.getTime()
    )
      return true;
  }
}
