import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token';
import axios from 'axios';

export async function getSubjects(setSubjects, user) {
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
        setSubjects(filterSubjects(response.data.subjects, user))
    })
    .catch(function(error){
        console.log(error)
        let message = Object.values(error.response.data);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    })
}

export function selectedSubject(id, subject, image, selectedSubjects, setSelectedSubjects) {
    const selectedSubject = {"id": id, "subject": subject, "image": image}
    setSelectedSubjects([...selectedSubjects, selectedSubject])
}

export function deselectedSubject(id, subject, selectedSubjects, setSelectedSubjects) {
    setSelectedSubjects(selectedSubjects.filter((selectedSubject)=>(
            selectedSubject.id !== id
        ))
    )
}

export function handleSelect(id, subject, image, selectedSubjects, setSelectedSubjects){
    selectedSubjects.some((selectedSubject) => selectedSubject.id === id) ? deselectedSubject(id, subject, selectedSubjects, setSelectedSubjects)
    : selectedSubject(id, subject, image, selectedSubjects, setSelectedSubjects)
}

export function isSelected(id, selectedSubjects){
    let found = false;
    selectedSubjects.forEach((selectedSubject) => {
        if (selectedSubject.id === id) found = true
    });
    return found
}

export async function addSelectedSubjects(setUserSubjects, selectedSubjects, navigation, user, setUser){
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
        const newSubjects = response.data.subjects
        user.subjects = newSubjects
        setUser(user)
        setUserSubjects(newSubjects)
        navigation.goBack()
    })
    .catch(function(error){
        console.log(error)
        try{
        let message = Object.values(error.response.data);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
        }
        catch(error){}
    })
}

export function filterSubjects(subjects, user) {
    return subjects.filter((subject)=>{
        for (userSubject of user.subjects){
            console.log(userSubject)
            if (subject.id === userSubject.id) return false
        }
        return true
    })
}