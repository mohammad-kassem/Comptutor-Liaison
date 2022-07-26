import axios from "axios";
import { ToastAndroid } from "react-native";
import { getToken } from "../../components/utility/Token";

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
    })
    .catch(function(error){
        let message = Object.values(error.response.data);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    })
}