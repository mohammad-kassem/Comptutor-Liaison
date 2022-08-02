import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import DegreesProvider from "../Context/Degrees";
import UserSubjectsProvider from "../Context/UserSubjects";
import EditDegreeScreen from "../screens/EditDegreeScreen";
import EditInfoScreen from "../screens/EditInfoScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import EditSubjectsScreen from "../screens/EditSubjectsScreen";

export default function EditProfileStack() {
    const RootStackNav = createStackNavigator();

    return (
      <UserSubjectsProvider>
        <DegreesProvider>
        <RootStackNav.Navigator
        screenOptions={{
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
            name="EditProfileScreen"
            component={EditProfileScreen}
            options={{
                headerShown: true
              }}/>
            <RootStackNav.Screen
            name="EditInfoScreen"
            component={EditInfoScreen}
            />
            <RootStackNav.Screen 
            name="EditDegreeScreen"
            component={EditDegreeScreen}
            />
            <RootStackNav.Screen 
            name="EditSubjectsScreen"
            component={EditSubjectsScreen}
            />
        </RootStackNav.Navigator>
        </DegreesProvider>
      </UserSubjectsProvider>
    )
}