import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import AddDegreeScreen from "../screens/AddDegreeScreen";
import UpdateInfoScreen from "../screens/UpdateInfoScreen";

export default function OnBoardingStackTutor() {
    const RootStackNav = createStackNavigator();

    return (
        <RootStackNav.Navigator
        screenOptions={{
            headerShown: false
          }}>
            <RootStackNav.Screen 
            name="AddDegreeScreen"
            component={AddDegreeScreen}
            />
            <RootStackNav.Screen
            name="UpdateInfoScreen"
            component={UpdateInfoScreen}
            />
        </RootStackNav.Navigator>
    )
}
