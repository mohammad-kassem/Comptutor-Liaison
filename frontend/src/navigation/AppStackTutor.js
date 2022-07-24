import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import AppointmentStack from "./AppointmentStack";
import BottomTabsStackTutor from "./BottomTabsStackTutor";
import ChatStack from "./ChatStack";
import HomeStackTutor from "./HomeStackTutor";


export default function AppStackTutor() {
    const RootStackNav = createStackNavigator();

    return (
        <NavigationContainer>
        <RootStackNav.Navigator 
        screenOptions={{headerShown: false
        }}
        >  
            <RootStackNav.Screen
            name="BottomTabsStackTutor"
            component={BottomTabsStackTutor}
            />
            <RootStackNav.Screen
            name="HomeStackTutor"
            component={HomeStackTutor}
            />
            <RootStackNav.Screen
            name="ChatStack"
            component={ChatStack}
            />
            <RootStackNav.Screen
            name="AppointmentStack"
            component={AppointmentStack}
            />
        </RootStackNav.Navigator>
        </NavigationContainer>
        )
    }