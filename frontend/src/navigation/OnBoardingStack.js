import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

import React from 'react'
import AddSubjectsScreen from "../screens/AddSubjectsScreen";
import OnBoardingStackTutor from "./OnBoardingStackTutor";

export default function OnBoardingStack() {
    const RootStackNav = createStackNavigator();

    return (
    <NavigationContainer>
        <RootStackNav.Navigator>
            <RootStackNav.Screen
            name="LoginScreen"
            component={LoginScreen}
            />
            <RootStackNav.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            />
            <RootStackNav.Screen 
            name="AddSubjectsScreen"
            component={AddSubjectsScreen}
            />
            <RootStackNav.Screen
            options={{
            headerShown: false
            }}
            name="OnBoardingStackTutor"
            component={OnBoardingStackTutor}
            />
        </RootStackNav.Navigator>
    </NavigationContainer>
    )
}
