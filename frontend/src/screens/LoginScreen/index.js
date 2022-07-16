import { useState } from 'react'
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from 'axios';
import { useUser } from '../../Context/User';
import CridentialsFrom from '../../components/CridentialsForm';




export default function LoginScreen() {
	const {user, setUser} = useUser()
	
	function login(cridentials){
		axios({
			method: "post",
			url: "http://192.168.1.105:8000/api/v1/auth/login",
			headers: {
				"Content-type": "application/json",
			},
			data: JSON.stringify(cridentials),
			})
		.then(function(response){
		const storeData = async (response) => {
			try {
				await AsyncStorage.setItem('storage_Key', response.data.access_token);
			} catch (e) {
			alert("Error setting token")
			}
		}

		storeData(response);
		setUser(response.data.user);
		})
		.catch(function(error){
			let message = Object.values(error.response.data);
			alert(message[0]);
		})
	};
	
	return (
		<CridentialsFrom type="login" onPressHandler={login}/>
	)
}
