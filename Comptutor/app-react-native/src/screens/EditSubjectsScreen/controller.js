import { View, Text, ToastAndroid } from "react-native";
import React from "react";
import { getToken } from "../../utility/token";
import axios from "axios";
import { localHostV1 } from "../../contsants/constants";

export async function getSubjects(setSubjects, user) {
  const token = await getToken();
  axios({
    method: "get",
    url: `${localHostV1}/subject`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(function (response) {
      setSubjects(filterSubjects(response.data.subjects, user));
    })
    .catch(function (error) {
      let message = Object.values(error.response.data);
      ToastAndroid.show(message[0][0], ToastAndroid.SHORT);
    });
}

export function selectedSubject(
  id,
  subject,
  image,
  selectedSubjects,
  setSelectedSubjects
) {
  const selectedSubject = { id: id, subject: subject, image: image };
  setSelectedSubjects([...selectedSubjects, selectedSubject]);
}

export function deselectedSubject(
  id,
  subject,
  selectedSubjects,
  setSelectedSubjects
) {
  setSelectedSubjects(
    selectedSubjects.filter((selectedSubject) => selectedSubject.id !== id)
  );
}

export function handleSelect(
  id,
  subject,
  image,
  selectedSubjects,
  setSelectedSubjects
) {
  selectedSubjects.some((selectedSubject) => selectedSubject.id === id)
    ? deselectedSubject(id, subject, selectedSubjects, setSelectedSubjects)
    : selectedSubject(
        id,
        subject,
        image,
        selectedSubjects,
        setSelectedSubjects
      );
}

export function isSelected(id, selectedSubjects) {
  let found = false;
  selectedSubjects.forEach((selectedSubject) => {
    if (selectedSubject.id === id) found = true;
  });
  return found;
}

export async function addSelectedSubjects(
  setUserSubjects,
  selectedSubjects,
  navigation,
  user,
  setUser
) {
  const token = await getToken();
  axios({
    method: "post",
    url: `${localHostV1}/subject/add`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify({ subjects: selectedSubjects }),
  })
    .then(function (response) {
      const newSubjects = response.data.subjects;
      user.subjects = newSubjects;
      setUser(user);
      setUserSubjects(newSubjects);
      navigation.goBack();
    })
    .catch(function (error) {
      let message = Object.values(error.response.data);
      ToastAndroid.show(message[0][0], ToastAndroid.SHORT);
    });
}

export function filterSubjects(subjects, user) {
  return subjects.filter((subject) => {
    for (userSubject of user.subjects) {
      if (subject.id === userSubject.id) return false;
    }
    return true;
  });
}
