import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { getToken } from '../components/utility/Token';
import { useUser } from './User';

export const AppointmentsContext = React.createContext()

export default function AppointmentsProvider({children, stackType}) {
    const [appointments,setAppointments] = useState({})

    useEffect(function(){
        getAppointments()
      }, []);

      async function getAppointments() {
        const token = await getToken();
        console.log("tutor")
    //     // console.log(token)
    //     //     try {
    //     //       const res = await fetch("http://192.168.1.105:8000/api/v1/appointment/student",{
    //     //         headers: {"Authorization" : `Bearer ${token}`,
    //     //         "Content-type": "application/json",
    //     //     "Accept": "application/json"}
    //     //       });
    //     //       const data = await res.json();
    //     //       console.log("hello")
    //     //       console.log(typeof data)
    //     //       setAppointments(data.appointments)
    //     //     } catch (err) {
    //     //       console.log(err);
    //     //     }
    //     //   };
        axios({
            method: "get",
            url: `http://192.168.1.105:8000/api/v1/appointment/${stackType}`,
            headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"}
        })
        .then(function(response){
            // console.log(response)
            console.log("jshjsh")
            let json = response.data;
            console.log(response.data)
            // json = JSON.parse(response.data)
            console.log(typeof response.data)
            setAppointments(json.appointments)
        })
        .catch(function(error){
            console.log(error)
            let message = Object.values(error.response.data);
            ToastAndroid(message[0], ToastAndroid.SHORT) 
        })
    };

    return (
        <AppointmentsContext.Provider value={{appointments, setAppointments}}>
            {children}
        </AppointmentsContext.Provider>
    )
};

export const useAppointments = () => {
    const {appointments, setAppointments} = React.useContext(AppointmentsContext)

    return {appointments, setAppointments}
}