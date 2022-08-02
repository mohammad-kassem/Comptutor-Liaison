import React, {useEffect, useState} from 'react'
import { useUser } from './User'

export const DegreesContext = React.createContext()

export default function DegreesProvider({children}) {
    const [degrees, setDegrees] = useState([])
    const {user} = useUser()

    useEffect(function(){
        setDegrees(user.degrees)
    },[])

    return (
        <DegreesContext.Provider value={{degrees, setDegrees}}>
            {children}
        </DegreesContext.Provider>
    )
}

export const useDegrees = () => {
    const {degrees, setDegrees} = React.useContext(DegreesContext)

    return {degrees, setDegrees}
}