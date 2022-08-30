import { View, Text, ToastAndroid } from "react-native";
import React from "react";
import { setToken } from "../../utility/token";
import axios from "axios";
import messaging from "@react-native-firebase/messaging";
import { localHostV1 } from "../../contsants/constants";

export function login(cridentials, setUser, navigation) {
  axios({
    method: "post",
    url: `${localHostV1}/auth/login`,
    headers: {
      "Content-type": "application/json",
    },
    data: JSON.stringify(cridentials),
  })
    .then(async function (response) {
      await setToken(response.data.access_token);
      const user = response.data.user;
      if (user.is_verified === 1) {
        setUser(user);
        getFCM(user);
      } else navigation.navigate("VerificationScreen", { user: response.data.user });
    })
    .catch(function (error) {
      let message = Object.values(error.response.data);
      ToastAndroid.show(message[0][0], ToastAndroid.SHORT);
    });
}

export function getFCM(user) {
  messaging()
    .registerDeviceForRemoteMessages()
    .then(async function () {
      const FCM_token = await messaging().getToken();
      setFCM(user, FCM_token);
    });
}

export function setFCM(user, FCM_token) {
  axios({
    method: "put",
    url: `${localHostV1}/FCM/set`,
    headers: {
      "Content-type": "application/json",
    },
    data: JSON.stringify({ ...user, FCM_token: FCM_token }),
  })
    .then(function (response) {})
    .catch(function (error) {
      let message = Object.values(error.response.data);
      ToastAndroid.show(message[0][0], ToastAndroid.SHORT);
    });
}
