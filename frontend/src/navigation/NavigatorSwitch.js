import React from 'react';
import { useUser } from '../Context/User';
import AppStack from './AppStack';
import BottomTabsStackTutor from './BottomTabsStackTutor';
import OnBoardingStack from './OnBoardingStack';

export default function NavigatorSwitcher() {
    const {user, setUser} = useUser()

    return (
        <>
            {Object.keys(user).length ? user.role_id === 1 ? <AppStack /> : <BottomTabsStackTutor/> : <OnBoardingStack />}
        </>
    )
}
