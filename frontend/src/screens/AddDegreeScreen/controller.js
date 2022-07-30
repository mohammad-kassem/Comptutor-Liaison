import axios from "axios";
import { ToastAndroid } from "react-native";
import { getToken } from "../../components/utility/Token";
import { localHostV1 } from "../../contsants/constants";

export async function addDegree(inputDegree, user, navigation){
    const token = await getToken()
    axios({
        method: "post",
        url: `${localHostV1}/tutor/degree/add`,
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        data: JSON.stringify(inputDegree) 
        })
    .then(function(response){
        const newDegrees = [response.data.degree]
        user = {...user, "degrees": newDegrees}

        navigation.navigate("UpdateInfoScreen", {user: user})
    })
    .catch(function(error){
        let message = Object.values(error.response.data);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    })
}