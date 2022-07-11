import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import HomeScreen from "../screens/HomeScreen";
import TutorScreen from "../screens/TutorScreen";

export default function HomeStack() {
    const RootStackNav = createStackNavigator();

    return (
        <RootStackNav.Navigator >
            <RootStackNav.Screen
            name="HomeScreen"
            component={HomeScreen}
            />
            <RootStackNav.Screen
            name="TutorScreen"
            component={TutorScreen}
            />
        </RootStackNav.Navigator>
    )
}