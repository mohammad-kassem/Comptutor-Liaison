import { View, Text, ToastAndroid } from "react-native";
import React from "react";
import { getToken } from "../../utility/token";
import axios from "axios";
import { localHostV1 } from "../../contsants/constants";

export function groupSchedules(schedules) {
  let groupedSchedule = [];
  if (schedules.length !== 0) {
    groupedSchedule = schedules.reduce(function (r, a) {
      r[a.date] = r[a.date] || [];
      r[a.date].push(a);
      return r;
    }, Object.create(null));
  }
  return groupedSchedule;
}

export async function getAvailableTimes(tutorId, setSchedules) {
  const token = await getToken();
  axios({
    method: "get",
    url: `${localHostV1}/tutor/schedule/available/${tutorId}`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(function (response) {
      const json =
        typeof response.data === "object"
          ? response.data
          : JSON.parse(response.data + "}");
      setSchedules(json.available_times);
    })
    .catch(function (error) {
      let message = Object.values(error.response.data);
      ToastAndroid.show(message[0][0], ToastAndroid.SHORT);
    });
}

export function filterAvailableTimes(schedules) {
  return schedules.filter((schedule) => {
    let d = new Date();
    d = d.getTime() - d.getTimezoneOffset() * 60 * 1000;
    const scheduleTime = new Date(
      schedule.date + "T" + schedule.end_time
    ).getTime();
    return scheduleTime > d;
  });
}
