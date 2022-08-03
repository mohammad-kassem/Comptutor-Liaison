import { View, Text } from 'react-native'
import React from 'react'

export function filter(searchText, original, setTutors){
    setTutors(original.filter((tutor)=> {
        if ((tutor.fname.toLowerCase() + " " + tutor.lname.toLowerCase()).includes(searchText)) return true;
        for (let tutorSubject of Object.values(tutor.subjects)){
            if (tutorSubject.subject.toLowerCase().includes(searchText)) return true
        }
    }))
}