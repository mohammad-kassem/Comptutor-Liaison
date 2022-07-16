import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import AppointmentsProvider from "../Context/Appointments";
import BottomTabsStackTutor from "./BottomTabsStackTutor";
import HomeStackTutor from "./HomeStackTutor";


export default function AppStackTutor() {
    const RootStackNav = createStackNavigator();

    return (
        <AppointmentsProvider stackType="tutor">
        <NavigationContainer>
        <RootStackNav.Navigator 
        screenOptions={{headerShown: false
        }}
        >   
            {/* <RootStackNav.Screen
            name="HomeScreen"
            component={HomeScreen}
            /> */}
            <RootStackNav.Screen
            name="BottomTabsStackTutor"
            component={BottomTabsStackTutor}
            />
            <RootStackNav.Screen
            name="HomeStackTutor"
            component={HomeStackTutor}
            />
        </RootStackNav.Navigator>
        </NavigationContainer>
        </AppointmentsProvider>
        )
    }