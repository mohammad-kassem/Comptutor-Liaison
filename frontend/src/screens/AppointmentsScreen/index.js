import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import RBSheet from "react-native-raw-bottom-sheet";
import { deleteAppointment, filterAppointments, getAppointments, groupAppointments, isAppointmentTime } from './controller';
import { useUser } from '../../Context/User';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import DropdownComponent from '../../components/Dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function AppointmentsScreen() {
    let [appointments,setAppointments] = useState([])
    const refRBSheet  = useRef();
    const [date, setDate] = useState("")
    const [id, setId] = useState() 
    const [buttonDisabled, setButtonDisabled] = useState(false)
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
            container:{
                borderTopStartRadius: 35,
                borderTopEndRadius: 35,
                justifyContent: "space-between"
            },
            draggableIcon: {
              backgroundColor: "#919090"
            }
          }}>
        <Text style={styles.sheetText}>Appointment Action</Text>
        
        <TouchableOpacity style={buttonDisabled ? styles.disabled : styles.go} disabled={buttonDisabled} onPress={()=>{navigation.navigate("AppointmentStack", { screen: "CallScreen", params: { appointmentId: id },}); refRBSheet.current.close();}}>
            <Text style={[styles.goText, buttonDisabled && styles.disabledText]}>Go to Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancel} onPress={()=>{deleteAppointment(id, appointments, setAppointments); refRBSheet.current.close();}}>
            <Text style={styles.cancelText}>Cancel Appointment</Text>
        </TouchableOpacity>
        </RBSheet>
                <Text style={styles.title}>Appointments</Text>
                
                <DropdownComponent date={date} setDate={setDate} groupedSchedules={groupedAppointments}/>
                <FlatList data={groupedAppointments[date]} renderItem={(dateData) =>{
                    return(
                        <>
                        <TouchableOpacity style={styles.appointmentCard} onPress={()=>{refRBSheet.current.open(); setId(dateData.item.schedule_id); setButtonDisabled(isAppointmentTime(dateData.item))}}>
                                <Text style={styles.date}>{dateData.item.schedule.start_time.slice(0, -3)} - {dateData.item.schedule.end_time.slice(0, -3)}</Text>
                                <View style={styles.appointmentWith}>
                                    <Icon name="account-multiple" size={20} color="#4FC7E6"/>
                                    <View style={styles.imageContainer}>
                                    {dateData.item[appointmentWith].profile_image ? 
                                    (<Image style={styles.profile} source={{uri: dateData.item[appointmentWith].profile_image}}/>
                                    ) : (
                                    <Image style={styles.profile} source={require('../../../assets/logo.png')}/>
                                    )}
                                    </View>
                                    <Text style={styles.details}>{dateData.item[appointmentWith].fname} {dateData.item[appointmentWith].lname}</Text>
                                </View>
                        </TouchableOpacity>
                        </>
                        
                    )}
                }
                />
        </>   
    )
}