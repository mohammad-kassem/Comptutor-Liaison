import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import HomeScreen from "../screens/HomeScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import TutorScreen from "../screens/TutorScreen";
import BottomTabsStack from "./BottomTabsStack";
import HomeStack from "./HomeStack";

export default function AppStack() {
    const RootStackNav = createStackNavigator();

    return (
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
            name="BottomTabs"
            component={BottomTabsStack}
            />
            <RootStackNav.Screen
            name="HomeStack"
            component={HomeStack}
            />
        </RootStackNav.Navigator>
        </NavigationContainer>
        )
    }