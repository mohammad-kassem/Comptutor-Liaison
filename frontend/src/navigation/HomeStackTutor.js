import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import AddScheduleScreen from "../screens/AddScheduleScreen";
import { StyleSheet } from "react-native";


export default function HomeStackTutor() {
    const RootStackNav = createStackNavigator();

    return (
        <RootStackNav.Navigator
        screenOptions={{
          headerStyle: styles.header,
          title: "Go Back",
          headerTintColor: "white",
          headerTitleStyle: styles.headerTitle,
        }}>
            <RootStackNav.Screen
            name="AddScheduleScreen"
            component={AddScheduleScreen}
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