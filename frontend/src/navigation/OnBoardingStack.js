import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

import React from 'react'
import AddSubjectsScreen from "../screens/AddSubjectsScreen";
import OnBoardingStackTutor from "./OnBoardingStackTutor";
import EditProfileScreen from "../screens/EditProfileScreen";
import EditProfileStack from "./EditProfileStack";

export default function OnBoardingStack() {
    const RootStackNav = createStackNavigator();

    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: '#4FC7E6',
          background:'#f5f5f5'
        },
      };

    return (
    <NavigationContainer theme={MyTheme}>
        <RootStackNav.Navigator
        screenOptions={{
            headerShown: false
          }}>
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
