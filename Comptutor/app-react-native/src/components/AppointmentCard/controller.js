import { View, Text } from 'react-native'
import React from 'react'

export function isAppointmentTime(appointment){
	const appointmentStartTime = new Date(appointment.schedule.date + "T" + appointment.schedule.start_time).getTime()
	const appointmentEndTime = new Date(appointment.schedule.date + "T" + appointment.schedule.end_time).getTime()
	let d = new Date()
	d = d.getTime() - d.getTimezoneOffset() * 60 * 1000
	return (appointmentStartTime > d || appointmentEndTime < d)
}

export function isCancelTime(appointment){
	const appointmentStartTime = new Date(appointment.schedule.date + "T" + appointment.schedule.start_time).getTime()
	let d = new Date()
	d = d.getTime() - d.getTimezoneOffset() * 60 * 1000
	return (appointmentStartTime - d > 15 *60 * 1000)
}
