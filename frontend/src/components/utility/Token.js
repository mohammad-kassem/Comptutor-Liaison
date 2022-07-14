

import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getToken() {
        let value;
        try {
          value = await AsyncStorage.getItem('storage_Key');
          return value
          if(value !== null) {
          }
        } catch(e) {
            alert("Error getting token")
            console.log(e);
            return undefined
        }

}

export async function setToken(value) {
  try {
    await AsyncStorage.setItem('storage_Key', value)
  } catch (e) {
      alert("Error setting token")
  }
}
