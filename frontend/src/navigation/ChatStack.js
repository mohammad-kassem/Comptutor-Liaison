import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import ChatScreen from "../screens/ChatScreen";

export default function ChatStack() {
    const RootStackNav = createStackNavigator();

    return (
        <RootStackNav.Navigator>
            <RootStackNav.Screen
            name="ChatScreen"
            component={ChatScreen}
            />
        </RootStackNav.Navigator>
    )
}