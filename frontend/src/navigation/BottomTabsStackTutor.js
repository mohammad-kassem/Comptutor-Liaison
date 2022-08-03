import React from 'react'
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TutorSchedulesScreen from '../screens/TutorSchedulesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import ChatRoomsScreen from '../screens/ChatRoomsScreen';
import { useRooms } from '../Context/Rooms';
import { StyleSheet } from "react-native";





export default function BottomTabsStackTutor() {
	const {unreadRooms} = useRooms()
    const Tab = createBottomTabNavigator();
    return (
		<Tab.Navigator
		screenOptions={{
			tabBarActiveTintColor: '#4FC7E6',
			tabBarShowLabel: false,
			tabBarStyle: styles.tabBar,
			headerShown: false
		  }}>
			<Tab.Screen options={{
			tabBarIcon: ({ color }) => {
				return <Icon name="home" size={24} color={color}/>;
			},
			}} name="Home" component={TutorSchedulesScreen} />
			<Tab.Screen options={{
			tabBarIcon: ({ color }) => {
				return <Icon name="calendar" size={24} color={color}/>;
			},
			}} name="Appointments" component={AppointmentsScreen} />
			<Tab.Screen options={{
			tabBarIcon: ({ color }) => {
				return <Icon name="chat" size={24} color={color}/>;
			},
			tabBarBadge: unreadRooms ? unreadRooms : undefined,
			tabBarBadgeStyle: styles.tabBarBadge,
			}} name="Chat" component={ChatRoomsScreen} />
			<Tab.Screen options={{
			tabBarIcon: ({ color }) => {
				return <Icon name="account" size={24} color={color}/>;
			},
			}} name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
    );
}

const styles = StyleSheet.create({
	tabBar: {
		height: 56
	},

	tabBarBadge: {
		minWidth: 14,
		maxHeight: 14,
		borderRadius: 7,
		fontSize: 10,
		lineHeight: 13,
		alignSelf: undefined,
	}
})