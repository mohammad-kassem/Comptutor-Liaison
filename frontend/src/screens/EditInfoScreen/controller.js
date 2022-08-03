import axios from "axios";
import { ToastAndroid } from "react-native";
import { getToken } from "../../components/utility/Token";
import { localHostV1 } from "../../contsants/constants";
import database from '@react-native-firebase/database';


export async function addInfo(input, user, setUser, navigation, setFname, setLname, setRate, setYears, setAbout){
    const token = await getToken()
    const role = user.role_id === 1 ? "student" : "tutor"
    axios({
        method: "put",
        url: `${localHostV1}/${role}/update`,
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
            },
        data: JSON.stringify({"id": user.id, ...input}) 
    })
    .then(function(response){
        user = {...user, ...response.data[role]}
        setUser(user)
        navigation.goBack()
        updateRoom(user)
    })
    .catch(function(error){
        console.log(error)
        let message = Object.values(error.response.data);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    })
}

function updateRoom(user){
    if (user.role_id === 1){
        database()
        .ref(`rooms`)
        .orderByChild("studentId")
        .equalTo(user.id)
        .once("value").then(snapshot=>{
            snapshot._snapshot.childKeys.forEach(room => {
                database()
                .ref(`rooms/${room}`)
                .update({
                    studentName: `${user.fname} ${user.lname}` 
                })
            });
        })
    }
    else {
        database()
        .ref(`rooms`)
        .orderByChild("tutorId")
        .equalTo(user.id)
        .once("value").then(snapshot=>{
            snapshot._snapshot.childKeys.forEach(room => {
                database()
                .ref(`rooms/${room}`)
                .update({
                    tutorName: `${user.fname} ${user.lname}` 
                })
            });
        })
    }
}