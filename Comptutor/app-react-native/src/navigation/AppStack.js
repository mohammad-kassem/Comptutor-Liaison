import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AppointmentStack from "./AppointmentStack";
import BottomTabsStack from "./BottomTabsStack";
import ChatStack from "./ChatStack";
import EditProfileStack from "./EditProfileStack";
import HomeStack from "./HomeStack";

export default function AppStack() {
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
        <RootStackNav.Screen name="BottomTabs" component={BottomTabsStack} />
        <RootStackNav.Screen name="HomeStack" component={HomeStack} />
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
