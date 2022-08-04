import { View, Text } from "react-native";
import React from "react";
import { getToken } from "../../components/utility/Token";
import axios from "axios";
import { localHostV1 } from "../../contsants/constants";

export async function getTutors(setTutors, setOriginal) {
  const token = await getToken();
  axios({
    method: "get",
    url: `${localHostV1}/tutor/get`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(function (response) {
      const json =
        typeof response.data === "object"
          ? response.data
          : JSON.parse(response.data + "}");
      setTutors(json.tutors);
      setOriginal(json.tutors);
    })
    .catch(function (error) {
      let message = Object.values(error.response.data);
      ToastAndroid.show(message[0][0], ToastAndroid.SHORT);
    });
}

export function filterTutors(tutors, user) {
  if (tutors) {
    return tutors.filter((tutor) => {
      for (var userSubjects of user.subjects) {
        let tutorSubjects = Object.values(tutor.subjects).map(
          (tutorSubject) => tutorSubject.subject
        );
        if (tutorSubjects.includes(userSubjects.subject)) return true;
      }
    });
  }
}
