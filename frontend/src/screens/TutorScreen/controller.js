import { View, Text } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token'
import axios from 'axios'
import { localHostV1 } from "../../contsants/constants";


export function onHandlePress(tutor, navigation) {
    navigation.navigate("ScheduleScreen", {"tutor": tutor})
}

export async function getTutor(id, setTutor){
    const token = await getToken();
    axios({
        method: "get",
        url:`${localHostV1}/tutor/get/${id}`,
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
        }
    })
    .then(function(response){
        setTutor(response.data.tutors);
    })
    .catch(function(error){
        let message = Object.values(error.response.data);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    })
}

