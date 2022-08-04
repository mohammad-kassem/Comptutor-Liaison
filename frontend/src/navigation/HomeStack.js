import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ScheduleScreen from "../screens/ScheduleScreen";
import TutorScreen from "../screens/TutorScreen";
import { StyleSheet } from "react-native";

export default function HomeStack() {
  const RootStackNav = createStackNavigator();
  return (
    <RootStackNav.Navigator
      screenOptions={{
        headerStyle: styles.header,
        title: "Go Back",
        headerTintColor: "white",
        headerTitleStyle: styles.headerTitle,
      }}
    >
      <RootStackNav.Screen name="TutorScreen" component={TutorScreen} />
      <RootStackNav.Screen name="ScheduleScreen" component={ScheduleScreen} />
    </RootStackNav.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4FC7E6",
  },

  headerTitle: {
    fontWeight: "bold",
  },
});
