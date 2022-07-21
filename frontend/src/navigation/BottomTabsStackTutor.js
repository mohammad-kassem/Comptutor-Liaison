import React from 'react'
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import TutorSchedulesScreen from '../screens/TutorSchedulesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';




export default function BottomTabsStackTutor() {
    const Tab = createBottomTabNavigator();
    return (
		<Tab.Navigator>
			<Tab.Screen options={{
			tabBarIcon: () => {
				return <Icon name="home" size={24} color={"#1877F2"}/>;
			},
			tabBarShowLabel: false,
			tabBarStyle: { height: 56 },
			headerShown: false
			}} name="Home" component={TutorSchedulesScreen} />
			<Tab.Screen options={{
			tabBarIcon: () => {
				return <Icon name="calendar" size={24} color={"#1877F2"}/>;
			},
			tabBarShowLabel: false,
			tabBarStyle: { height: 56 },
			headerShown: false
			}} name="Appointments" component={AppointmentsScreen} />
			<Tab.Screen options={{
			tabBarIcon: () => {
				return <Icon name="comments" size={24} color={"#1877F2"}/>;
			},
			tabBarShowLabel: false,
			tabBarStyle: { height: 56 },
			headerShown: false
			}} name="Chat" component={ChatRoomScreen} />
			<Tab.Screen options={{
			tabBarIcon: () => {
				return <Icon name="user" size={24} color={"#1877F2"}/>;
			},
			tabBarShowLabel: false,
			tabBarStyle: { height: 56 },
			headerShown: false
			}} name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
    );
}