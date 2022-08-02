import React, {useState} from 'react'

export const UserOnBoardingContext = React.createContext()

export default function UserOnBoardingProvider({children}) {
    const [userOnBoarding,setUserOnBoarding] = useState({})

    return (
        <UserOnBoardingContext.Provider value={{userOnBoarding, setUserOnBoarding}}>
            {children}
        </UserOnBoardingContext.Provider>
    )
}

export const useUserOnBoarding = () => {
    const {userOnBoarding, setUserOnBoarding} = React.useContext(UserOnBoardingContext)

    return {userOnBoarding, setUserOnBoarding}
}