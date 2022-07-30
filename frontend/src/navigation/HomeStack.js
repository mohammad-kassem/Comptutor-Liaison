import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons";
import ScheduleScreen from "../screens/ScheduleScreen";
import TutorScreen from "../screens/TutorScreen";

export default function HomeStack() {
    const RootStackNav = createStackNavigator();
    return (
        <RootStackNav.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: '#4FC7E6',
            },
            title: 'Go Back',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
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