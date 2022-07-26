import { View, Text } from 'react-native'
import React from 'react'
import api from '../../components/utility/api';
import axios from 'axios';
import { getToken } from '../../components/utility/Token';
import { localHostV1 } from "../../contsants/constants";



export default function createRoom( setAppState, AppState, setRoomUrl, appointmentId ) {
    setAppState(AppState.Creating);
    api
      .createRoom()
      .then((room) => {
        setRoomUrl(room.url);
        setAppState(AppState.Idle);
        setUrlInDB(appointmentId, room.url)
      })
}

export async function setUrlInDB(appointmentId, roomUrl){
  const token = await getToken();
    axios({
        method: "put",
        url:`${localHostV1}/session`,
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
        },
        data: ({id :appointmentId, url: roomUrl})
    })
    .then(function(response){
      console.log("changed url", response.data)
    })
    .catch(function(error){
        console.log(error)
        let message = Object.values(error.response.data);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    })
}

export async function getUrlFromDB(appointmentId, setRoomUrl){
  const token = await getToken();
    try{ const response = await axios({
        method: "get",
        url:`${localHostV1}/session/${appointmentId}`,
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
        }
    })
    console.log(response.data)
    setRoomUrl(response.data.url)
    return response.data.url}
        
    catch(error){
        console.log(error)
        let message = Object.values(error.response.data);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    }
}