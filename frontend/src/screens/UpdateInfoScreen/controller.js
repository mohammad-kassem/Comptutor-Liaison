import axios from "axios";
import { ToastAndroid } from "react-native";
import { getToken } from "../../components/utility/Token";
import messaging from '@react-native-firebase/messaging';


export async function addInfo(input, user, setUser){
    const token = await getToken()
    console.log(typeof input.rate)
    axios({
        method: "put",
        url: "http://192.168.1.105:8000/api/v1/tutor/update",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
            },
        data: JSON.stringify({"id": user.id, "fname": user.fname, "lname": user.lname, ...input}) 
    })
    .then(function(response){
        user = {...user, ...response.data.tutor}
        console.log(user)
        setUser(user)
        getFCM(user)
    })
    .catch(function(error){
        let message = Object.values(error.response.data);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    })
}

export function getFCM(user){
    messaging().registerDeviceForRemoteMessages().then(
        async function(){
            const FCM_token = await messaging().getToken();
            setFCM(user, FCM_token)
    })
}

export function setFCM(user, FCM_token){
    axios({
        method: "put",
        url: "http://192.168.1.17:8000/api/v1/FCM/set",
        headers: {
            "Content-type": "application/json",
            },
        data: JSON.stringify({...user, "FCM_token": FCM_token}),
    })
    .then(function(response){
        console.log("success")
    })
    .catch(function(error){
        console.log("error", error)
        let message = Object.values(error.response.data);
        console.log(message);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    })

}