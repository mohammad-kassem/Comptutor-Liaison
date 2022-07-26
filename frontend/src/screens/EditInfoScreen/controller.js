import axios from "axios";
import { ToastAndroid } from "react-native";
import { getToken } from "../../components/utility/Token";

export async function addInfo(input, user, setUser, navigation, setFname, setLname, setRate, setYears, setAbout){
    const token = await getToken()
    const role = user.role_id === 1 ? "student" : "tutor"
    axios({
        method: "put",
        url: `http://192.168.1.105:8000/api/v1/${role}/update`,
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
    })
    .catch(function(error){
        console.log(error)
        let message = Object.values(error.response.data);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    })
}