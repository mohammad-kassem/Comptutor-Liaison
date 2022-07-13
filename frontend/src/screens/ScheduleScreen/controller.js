import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'

export function groupSchedules(schedules) {
  let result = []
  if (schedules.length !== 0){
    groupedSchedule = schedules.reduce(function (r, a) {
        r[a.date] = r[a.date] || [];
        r[a.date].push(a);
        return r;
    }, Object.create(null));
  }
    return groupedSchedule
}
