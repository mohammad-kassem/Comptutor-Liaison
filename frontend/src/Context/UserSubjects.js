import React, {useEffect, useState} from 'react'
import { useUser } from './User'

export const UserSubjectsContext = React.createContext()

export default function UserSubjectsProvider({children}) {
    const [userSubjects, setUserSubjects] = useState([])
    const {user} = useUser()

    useEffect(function(){
        setUserSubjects(user.subjects)
    },[])

    return (
        <UserSubjectsContext.Provider value={{userSubjects, setUserSubjects}}>
            {children}
        </UserSubjectsContext.Provider>
    )
}

export const useUserSubjects = () => {
    const {userSubjects, setUserSubjects} = React.useContext(UserSubjectsContext)

    return {userSubjects, setUserSubjects}
}