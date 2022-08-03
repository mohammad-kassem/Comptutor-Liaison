import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import ChatScreen from "../screens/ChatScreen";
import { StyleSheet } from "react-native";


export default function ChatStack() {
    const RootStackNav = createStackNavigator();

    return (
        <RootStackNav.Navigator screenOptions={{
            headerStyle: styles.header,
            title: "Go Back",
            headerTintColor: "white",
            headerTitleStyle: styles.headerTitle,
          }}>
            <RootStackNav.Screen
            name="ChatScreen"
            component={ChatScreen}
            />
        </RootStackNav.Navigator>
    )
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#4FC7E6",
	},

	headerTitle: {
    fontWeight: "bold",
	}
})