import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import RBSheet from "react-native-raw-bottom-sheet";
import { deleteAppointment, filterAppointments, getAppointments, groupAppointments } from './controller';
import { useUser } from '../../Context/User';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import DropdownComponent from '../../components/Dropdown';


export default function AppointmentsScreen() {
    let [appointments,setAppointments] = useState([])
    const refRBSheet  = useRef();
    const [date, setDate] = useState("")
    const [id, setId] = useState() 
    const {user, setUser} = useUser()   
    const appointmentWith = user.role_id === 1 ? "tutor" : "student"
    const stackType = user.role_id === 1 ? "student" : "tutor"
    const navigation = useNavigation()

    useFocusEffect(
        React.useCallback(() => {
            getAppointments(setAppointments, stackType)
        },[])
    )

    appointments = filterAppointments(appointments)
    const groupedAppointments = groupAppointments(appointments);

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
        <TouchableOpacity style={styles.go} onPress={()=>{navigation.navigate("AppointmentStack", { screen: "CallScreen", params: { appointmentId: id },}); refRBSheet.current.close();}}><Text style={styles.buttonText}>Go to appointment</Text></TouchableOpacity>
        </RBSheet>
            <View style={styles.container}>
                <Text style={styles.title}>Appointments</Text>
                <DropdownComponent date={date} setDate={setDate} groupedSchedules={groupedAppointments}/>
                <FlatList data={groupedAppointments[date]} renderItem={(dateData) =>{
                    return(
                        <>
                        <TouchableOpacity style={styles.appointmentCard} onPress={()=>{refRBSheet.current.open(); setId(dateData.item.schedule_id);}}>
                            <View style={styles.cardContent}>
                                <Text style={styles.date}>{dateData.item.schedule.date} {dateData.item.schedule.start_time} - {dateData.item.schedule.end_time}</Text>
                                <Text style={styles.details}>Appointment with {dateData.item[appointmentWith].fname} {dateData.item[appointmentWith].lname}</Text>
                            </View>
                        </TouchableOpacity>
                        </>
                        
                    )}
                }
                />
            </View>
        </>   
    )
}