import axios from "axios";
import { ToastAndroid } from "react-native";
import { getToken } from "../../utility/token";
import { localHostV1 } from "../../contsants/constants";

export async function addDegree(
  inputDegree,
  userOnBoarding,
  setUserOnBoarding,
  navigation
) {
  const token = await getToken();
  axios({
    method: "post",
    url: `${localHostV1}/tutor/degree/add`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify(inputDegree),
  })
    .then(function (response) {
      const newDegrees = [response.data.degree];
      setUserOnBoarding({ ...userOnBoarding, degrees: newDegrees });

      navigation.navigate("UpdateInfoScreen");
    })
    .catch(function (error) {
      let message = Object.values(error.response.data);
      ToastAndroid.show(message[0][0], ToastAndroid.SHORT);
    });
}

export function getUniversities(setUniversities) {
  axios({
    method: "get",
    url: "http://universities.hipolabs.com/search?country=lebanon",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(function (response) {
      setUniversities(refactorUniversityData(response.data));
    })
    .catch(function (error) {
      ToastAndroid.show("Error getting university names", ToastAndroid.SHORT);
    });
}

function refactorUniversityData(universities) {
  let data;
  universities = filterUniversities(universities);
  data = universities.map((university) => ({
    label: university.name,
    value: university.domains[0].split(".")[0].toUpperCase(),
  }));
  return data;
}

function filterUniversities(universities) {
  return universities.filter((university, index) => {
    if (
      index ===
      universities.findIndex((uni) => university.domains[0] === uni.domains[0])
    )
      return true;
  });
}
