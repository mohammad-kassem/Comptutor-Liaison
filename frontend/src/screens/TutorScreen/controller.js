import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { getToken } from '../../components/utility/Token'
import axios from 'axios'

export function onHandlePress(tutor, navigation) {
    navigation.navigate("ScheduleScreen", {"tutor": tutor})
    console.log("hello")
}

export async function getTutor(id, setTutor){
    const token = await getToken();
        axios({
          method: "get",
          url:`http://192.168.1.105:8000/api/v1/tutor/get/${id}`,
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`}
        })
        .then(function(response){
            // console.log(response.data.tutors);
          setTutor(response.data.tutors);
        })
        .catch(function(error){
          let message = Object.values(error.response.data);
          alert(error);
          console.log("error", error)
        })
}

