import axios from "axios";
import { getToken } from "../../components/utility/Token";

export async function addDegree(inputDegree){
    const token = await getToken()
    axios({
        method: "post",
        url: "http://192.168.1.105:8000/api/v1/tutor/degree/add",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        data: JSON.stringify(inputDegree) 
        })
        .then(function(response){
            
        })
        .catch(function(error){
            console.log(error)
            let message = Object.values(error.response.data);
            alert(message[0]);
        })
    }