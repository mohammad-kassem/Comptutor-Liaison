import axios from "axios";
import { getToken } from "../../components/utility/Token";

export async function addInfo(input, user, setUser){
    const token = await getToken()
    axios({
        method: "put",
        url: "http://192.168.1.105:8000/api/v1/tutor/update",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
            },
        data: JSON.stringify(input) 
    })
    .then(function(response){
        setUser(user)
    })
    .catch(function(error){
        let message = Object.values(error.response.data);
        alert(message[0]);
    })
}