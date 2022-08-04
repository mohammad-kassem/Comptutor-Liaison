import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CallScreen from "../screens/CallScreen";

export default function AppointmentStack() {
  const RootStackNav = createStackNavigator();

  return (
    <RootStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStackNav.Screen name="CallScreen" component={CallScreen} />
    </RootStackNav.Navigator>
  );
}
