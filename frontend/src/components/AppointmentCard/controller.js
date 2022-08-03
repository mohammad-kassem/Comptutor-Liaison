export function isAppointmentTime(appointment){
    const appointmentStartTime = new Date(appointment.schedule.date + "T" + appointment.schedule.start_time).getTime()
    const appointmentEndTime = new Date(appointment.schedule.date + "T" + appointment.schedule.end_time).getTime()
	console.log(appointmentStartTime, new Date().toLocaleString(), appointmentEndTime, appointment.schedule.date, appointment.schedule.start_time, appointment.schedule.end_time, appointmentStartTime < new Date().getTime() && appointmentEndTime > new Date().getTime())
    let d = new Date()
    d = d.getTime() - d.getTimezoneOffset() * 60 * 1000
    return (appointmentStartTime > d || appointmentEndTime < d)
}

export function isCancelTime(appointment){
    const appointmentStartTime = new Date(appointment.schedule.date + "T" + appointment.schedule.start_time).getTime()
    let d = new Date()
    d = d.getTime() - d.getTimezoneOffset() * 60 * 1000
    console.log(appointmentStartTime - d)
    return (appointmentStartTime - d > 15 *60 * 1000)
}
