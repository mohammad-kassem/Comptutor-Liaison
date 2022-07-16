import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import AddDegreeScreen from "../screens/AddDegreeScreen";

export default function OnBoardingStackTutor() {
    const RootStackNav = createStackNavigator();

    return (
        <RootStackNav.Navigator>
            <RootStackNav.Screen 
            name="AddDegreeScreen"
            component={AddDegreeScreen}
            />
        </RootStackNav.Navigator>
    )
}
