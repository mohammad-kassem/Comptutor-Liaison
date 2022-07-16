import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import AddScheduleScreen from "../screens/AddScheduleScreen";

export default function HomeStackTutor() {
    const RootStackNav = createStackNavigator();

    return (
        // <NavigationContainer>
        <RootStackNav.Navigator>
            
            <RootStackNav.Screen
            name="AddScheduleScreen"
            component={AddScheduleScreen}
            />
        </RootStackNav.Navigator>
        // </NavigationContainer>
    )
}