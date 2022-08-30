import { View, Text, ToastAndroid } from "react-native";
import React from "react";
import { getToken } from "../../utility/token";
import axios from "axios";
import { localHostV1 } from "../../contsants/constants";

export async function deleteDegree(id, degrees, setDegrees, user, setUser) {
  const token = await getToken();
  axios({
    method: "delete",
    url: `${localHostV1}/tutor/degree/delete/${id}`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(function (response) {
      const newDegrees = degrees.filter((degree) => degree.id !== id);
      setDegrees(newDegrees);
      user.degrees = newDegrees;
      setUser(user);
    })
    .catch(function (error) {
      let message = Object.values(error.response.data);
      ToastAndroid.show(message[0][0], ToastAndroid.SHORT);
    });
}

export async function deleteSubject(id, subjects, setSubjects, user, setUser) {
  const token = await getToken();
  axios({
    method: "delete",
    url: `${localHostV1}/subject/delete/${id}`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(function (response) {
      const newSubjects = subjects.filter((subject) => subject.id !== id);
      setSubjects(newSubjects);
      user.subjects = newSubjects;
      setUser(user);
    })
    .catch(function (error) {
      let message = Object.values(error.response.data);
      ToastAndroid.show(message[0][0], ToastAndroid.SHORT);
    });
}
