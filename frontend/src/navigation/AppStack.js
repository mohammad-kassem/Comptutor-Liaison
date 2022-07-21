import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import BottomTabsStack from "./BottomTabsStack";
import ChatStack from "./ChatStack";
import HomeStack from "./HomeStack";

export default function AppStack() {
    const RootStackNav = createStackNavigator();

    return (
        <NavigationContainer>
        <RootStackNav.Navigator 
        screenOptions={{headerShown: false
        }}
        >  
            <RootStackNav.Screen
            name="BottomTabs"
            component={BottomTabsStack}
            />
            <RootStackNav.Screen
            name="HomeStack"
            component={HomeStack}
            />
            <RootStackNav.Screen
            name="ChatStack"
            component={ChatStack}
            />
        </RootStackNav.Navigator>
        </NavigationContainer>
        )
    }