import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import ChatScreen from "../screens/ChatScreen";

export default function ChatStack() {
    const RootStackNav = createStackNavigator();

    return (
        <RootStackNav.Navigator screenOptions={{
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
            name="ChatScreen"
            component={ChatScreen}
            />
        </RootStackNav.Navigator>
    )
}