import { View, Text } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

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
    setSelectedSubjects([...selectedSubjects, selectedSubject])
}

export function deselectedSubject(id, selectedSubjects, setSelectedSubjects) {
    setSelectedSubjects(selectedSubjects.filter((selectedSubject)=>(
            selectedSubject.id !== id
        ))
    )
}

export function handleSelect(id, selectedSubjects, setSelectedSubjects){
    selectedSubjects.some((selectedSubject) => selectedSubject.id === id) ? deselectedSubject(id, selectedSubjects, setSelectedSubjects)
    : selectedSubject(id, selectedSubjects, setSelectedSubjects)
}

export function isSelected(id, selectedSubjects){
    let found = false;
    selectedSubjects.forEach((selectedSubject) => {
        if (selectedSubject.id === id) found = true
    });
    return found
}

export async function addSelectedSubjects(selectedSubjects, navigation, user){
    const token = await getToken()
    console.log(selectedSubjects);
    axios({
        method: "post",
        url: "http://192.168.1.105:8000/api/v1/subject/add",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        data: JSON.stringify({"subjects": selectedSubjects}) 
        })
        .then(function(response){
            navigation.navigate('AddDegreeScreen', {user: user})
        })
        .catch(function(error){
            console.log(error)
            let message = Object.values(error.response.data);
            alert(message[0]);
        })
    }