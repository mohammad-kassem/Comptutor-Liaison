import { View, Text } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token';
import axios from 'axios';

export async function getSubjects(setSubjects) {
    const token = await getToken()
    console.log(token);
    axios({
        method: "get",
        url: "http://192.168.1.105:8000/api/v1/subject",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      })
      .then(function(response){
        console.log("hello")
        setSubjects(response.data.subjects)
        // alert(await response.data.message);
      })
      .catch(error=>console.log(error))
}

export function selectedSubject(id, selectedSubjects, setSelectedSubjects) {
    const selectedSubject = {"id": id}
    setSelectedSubjects(...selectedSubjects, selectedSubject)
}

