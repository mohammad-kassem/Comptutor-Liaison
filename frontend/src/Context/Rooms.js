import React, {useEffect, useState} from 'react'
import { useUser } from './User';
import database from '@react-native-firebase/database'


export const RoomsContext = React.createContext()

export default function RoomsProvider({children}) {
    const {user, setUser} = useUser()
    const [rooms, setRooms] = useState([])

    useEffect(function(){
		let arr = []
        database()
		.ref("rooms")
		.orderByChild("lastSent")
		.on('value', snapshot => {
			arr = []
				snapshot.forEach((room) => {
					arr.push([room._snapshot.key, room._snapshot.value])
				})
			setRooms([...(arr || [] )].reverse())	
		})
      }, []);


    return (
        <RoomsContext.Provider value={{rooms, setRooms}}>
            {children}
        </RoomsContext.Provider>
    )
}

export const useRooms = () => {
    const {rooms, setRooms} = React.useContext(RoomsContext)

    return {rooms, setRooms}
}