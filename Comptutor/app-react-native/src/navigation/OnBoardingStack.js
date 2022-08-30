import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import React from "react";
import AddSubjectsScreen from "../screens/AddSubjectsScreen";
import OnBoardingStackTutor from "./OnBoardingStackTutor";
import VerificationScreen from "../screens/VerificationScreen";
import UserOnBoardingProvider from "../Context/UserOnBoarding";

export default function OnBoardingStack() {
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
      <UserOnBoardingProvider>
        <RootStackNav.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStackNav.Screen name="LoginScreen" component={LoginScreen} />
          <RootStackNav.Screen
            name="RegisterScreen"
            component={RegisterScreen}
          />
          <RootStackNav.Screen
            name="VerificationScreen"
            component={VerificationScreen}
          />
          <RootStackNav.Screen
            name="AddSubjectsScreen"
            component={AddSubjectsScreen}
          />
          <RootStackNav.Screen
            options={{
              headerShown: false,
            }}
            name="OnBoardingStackTutor"
            component={OnBoardingStackTutor}
          />
        </RootStackNav.Navigator>
      </UserOnBoardingProvider>
    </NavigationContainer>
  );
}
