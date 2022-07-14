import React, {useEffect, useState} from 'react';
import { getToken } from '../components/utility/Token';
import { useUser } from './User';

export const AppointmentsContext = React.createContext()

export default function AppointmentsProvider({children}) {
    const [appointments,setAppointments] = useState({})


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