import { View, Text } from "react-native";
import React from "react";

export function generateData(groupedSchedules) {
  let data;
  try {
    data = Object.keys(groupedSchedules).map((date) => ({
      label: date,
      value: date,
    }));
  } catch {
    data = Object.keys(groupedSchedules).map((appointment) => ({
      label: appointment.date,
      value: appointment.date,
    }));
  }
  return data;
}
