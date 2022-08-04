import { View, Text, ToastAndroid } from "react-native";
import React from "react";
import { getToken } from "../../components/utility/Token";
import axios from "axios";
import { localHostV1 } from "../../contsants/constants";

export async function verifyEmail(code, setUserOnBoarding, navigation) {
  if (code.length !== 4) return;
  const token = await getToken();
  axios({
    method: "put",
    url: `${localHostV1}/email/verify`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify({ code }),
  })
    .then(function (response) {
      setUserOnBoarding(response.data.user);
      navigation.navigate("AddSubjectsScreen");
    })
    .catch(function (error) {
      let message = Object.values(error.response.data);
      ToastAndroid.show(message[0][0], ToastAndroid.SHORT);
    });
}

export async function sendEmail() {
  const token = await getToken();
  axios({
    method: "put",
    url: `${localHostV1}/email/send`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(function (response) {
      user = response.data.user;
    })
    .catch(function (error) {
      let message = Object.values(error.response.data);
      ToastAndroid.show(message[0][0], ToastAndroid.SHORT);
    });
}
