import { View, Text } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token';
import axios from 'axios';

export async function getTutors(setTutors, setOriginal){
    const token = await getToken();
    axios({
      method: "get",
      url: "http://192.168.1.105:8000/api/v1/tutor/get",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`}
    })
    .then(function(response){
        setTutors(response.data.tutors);
        setOriginal(response.data.tutors);
    })
    .catch(function(error){
        let message = Object.values(error.response.data);
        alert(error);
    })
};