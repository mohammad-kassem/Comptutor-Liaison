

import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getToken(){
	let value;
	try {
		value = await AsyncStorage.getItem('storage_Key');
		return value
	} catch(e) {
		ToastAndroid.show("Error getting token", ToastAndroid.SHORT)
		return undefined
	}
}

export async function setToken(value){
	try {
		await AsyncStorage.setItem('storage_Key', value)
	} catch (e) {
		ToastAndroid.show("Error setting token", ToastAndroid.SHORT)
	}
}
