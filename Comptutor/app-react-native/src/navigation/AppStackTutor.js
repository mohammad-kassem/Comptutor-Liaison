import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AppointmentStack from "./AppointmentStack";
import BottomTabsStackTutor from "./BottomTabsStackTutor";
import ChatStack from "./ChatStack";
import EditProfileStack from "./EditProfileStack";
import HomeStackTutor from "./HomeStackTutor";

export default function AppStackTutor() {
  const RootStackNav = createStackNavigator();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#4FC7E6",
      background: "#f5f5f5",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <RootStackNav.Navigator screenOptions={{ headerShown: false }}>
        <RootStackNav.Screen
          name="BottomTabsStackTutor"
          component={BottomTabsStackTutor}
        />
        <RootStackNav.Screen name="HomeStackTutor" component={HomeStackTutor} />
        <RootStackNav.Screen name="ChatStack" component={ChatStack} />
        <RootStackNav.Screen
          name="AppointmentStack"
          component={AppointmentStack}
        />
        <RootStackNav.Screen
          name="EditProfileStack"
          component={EditProfileStack}
        />
      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}
