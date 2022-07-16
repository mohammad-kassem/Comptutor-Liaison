import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import ScheduleScreen from "../screens/ScheduleScreen";
import TutorScreen from "../screens/TutorScreen";

export default function HomeStack() {
    const RootStackNav = createStackNavigator();

    return (
        <RootStackNav.Navigator initialRouteName="TutorScreen">
            
            <RootStackNav.Screen
            name="TutorScreen"
            component={TutorScreen}
            />
            <RootStackNav.Screen
            name="ScheduleScreen"
            component={ScheduleScreen}
            />
        </RootStackNav.Navigator>
    )
}