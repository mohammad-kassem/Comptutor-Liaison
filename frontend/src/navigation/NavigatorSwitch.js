import React from 'react';
import { useUser } from '../Context/User';
import BottomTabsStack from './BottomTabsStack';
import OnBoardingStack from './OnBoardingStack';

export default function NavigatorSwitcher() {
    const {user, setUser} = useUser()

    return (
        <>
            {Object.keys(user).length ? <BottomTabsStack /> : <OnBoardingStack />}
        </>
    )
}
