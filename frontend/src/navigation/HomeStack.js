import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import HomeScreen from "../screens/HomeScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import TutorScreen from "../screens/TutorScreen";

export default function HomeStack() {
    const RootStackNav = createStackNavigator();

    return (
        // <NavigationContainer>
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
        // </NavigationContainer>
    )
}