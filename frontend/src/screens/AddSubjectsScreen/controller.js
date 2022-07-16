import { View, Text } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token';
import axios from 'axios';

export async function getSubjects(setSubjects) {
    const token = await getToken()
    axios({
        method: "get",
        url: "http://192.168.1.105:8000/api/v1/subject",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      })
      .then(function(response){
        setSubjects(response.data.subjects)
      })
      .catch(error=>console.log(error))
}

export function selectedSubject(id, subject, selectedSubjects, setSelectedSubjects) {
    const selectedSubject = {"id": id, "subject": subject}
    setSelectedSubjects([...selectedSubjects, selectedSubject])
}

export function deselectedSubject(id, subject, selectedSubjects, setSelectedSubjects) {
    setSelectedSubjects(selectedSubjects.filter((selectedSubject)=>(
            selectedSubject.id !== id
        ))
    )
}

export function handleSelect(id, subject, selectedSubjects, setSelectedSubjects){
    selectedSubjects.some((selectedSubject) => selectedSubject.id === id) ? deselectedSubject(id, subject, selectedSubjects, setSelectedSubjects)
    : selectedSubject(id, subject, selectedSubjects, setSelectedSubjects)
}

export function isSelected(id, selectedSubjects){
    let found = false;
    selectedSubjects.forEach((selectedSubject) => {
        if (selectedSubject.id === id) found = true
    });
    return found
}

export async function addSelectedSubjects(selectedSubjects, navigation, user, setUser){
    const token = await getToken()
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
            user = {...user, "subjects": selectedSubjects}
            user.role_id === 1 ? setUser(user) : navigation.navigate("OnBoardingStackTutor", { screen: "AddDegreeScreen",  params: { user: user },})
        })
        .catch(function(error){
            let message = Object.values(error.response.data);
            alert(message[0]);
        })
    }