import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import axios from 'axios'
import { localHostV1 } from '../../contsants/constants'
import { getToken } from '../../components/utility/Token'

export async function updateImage(image, user) {
    const token = await getToken()
    axios({
        method: "put",
        url: `${localHostV1}/image`,
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        data: JSON.stringify({"image": image}),
    })
    .then(function(response){
        user = {...user, ...response.data.user}
    })
    .catch(function(error){
        console.log(error)
        let message = Object.values(error.response.data);
        ToastAndroid.show(message[0][0], ToastAndroid.SHORT)
    })
}