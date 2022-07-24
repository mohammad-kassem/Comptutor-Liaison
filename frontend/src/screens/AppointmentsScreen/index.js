import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import RBSheet from "react-native-raw-bottom-sheet";
import { deleteAppointment, getAppointments } from './controller';
import { useUser } from '../../Context/User';
import { useFocusEffect, useNavigation } from '@react-navigation/native';


export default function AppointmentsScreen() {
    const [appointments,setAppointments] = useState([])
    const refRBSheet  = useRef();
    const [data, setData] = useState("")
    const [id, setId] = useState() 
    const {user, setUser} = useUser()   
    const appointmentWith = user.role_id === 1 ? "tutor" : "student"
    const stackType = user.role_id === 1 ? "student" : "tutor"
    navigation = useNavigation()

    useFocusEffect(
        React.useCallback(() => {
            getAppointments(setAppointments, stackType)
        },[])
    )


    return (
        <>  
        
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}>
            
        <Text style={styles.sheetText}>Appointment action</Text>
        <TouchableOpacity style={styles.cancel} onPress={()=>{deleteAppointment(id, appointments, setAppointments); refRBSheet.current.close();}}><Text style={styles.buttonText}>Cancel appointment</Text></TouchableOpacity>
        <TouchableOpacity style={styles.go} onPress={()=>navigation.navigate("AppointmentStack", { screen: "CallScreen", params: { appointmentId: id },})}><Text style={styles.buttonText}>Go to appointment</Text></TouchableOpacity>
        </RBSheet>
            <View style={styles.container}>
                <Text style={styles.title}>Appointments</Text>
                <FlatList data={appointments} renderItem={(appointmentData) =>{
                return(
                <TouchableOpacity style={styles.appointmentCard} onPress={()=>{refRBSheet.current.open(); console.log(appointmentData.item.schedule_id); setId(appointmentData.item.schedule_id);}}>
                    <View style={styles.cardContent}>
                        <Text style={styles.date}>{appointmentData.item.schedule.date} {appointmentData.item.schedule.start_time} - {appointmentData.item.schedule.end_time}</Text>
                        <Text style={styles.details}>Appointment with {appointmentData.item[appointmentWith].fname} {appointmentData.item[appointmentWith].lname}</Text>
                    </View>
                </TouchableOpacity>
                )
                }}
                />
            </View>
        </>   
    )
}