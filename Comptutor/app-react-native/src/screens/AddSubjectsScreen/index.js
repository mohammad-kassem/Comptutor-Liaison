import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import OnBoardingTitle from "../../components/OnBoardingTitle";
import OnBoardingPrompt from "../../components/OnBoardingPrompt";
import {
  addSelectedSubjects,
  getSubjects
} from "./controller";
import FullWidthButton from "../../components/FullWidthButton";
import { useNavigation } from "@react-navigation/native";
import AbsolutePositionButtonContainer from "../../components/AbsolutePositionButtonContainer";
import { useUser } from "../../Context/User";
import Container from "../../components/Container";
import Subjcets from "../../components/Subjects";
import { useUserOnBoarding } from "../../Context/UserOnBoarding";

export default function AddSubjectsScreen() {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const { setUser } = useUser();
  const navigation = useNavigation();
  const { userOnBoarding, setUserOnBoarding } = useUserOnBoarding();

  useEffect(function () {
    getSubjects(setSubjects);
  }, []);

  return (
    <>
      <Container>
        <OnBoardingTitle />
        <OnBoardingPrompt message="Pick your subjects" />
        <Subjcets
          subjects={subjects}
          selectedSubjects={selectedSubjects}
          setSelectedSubjects={setSelectedSubjects}
        />
      </Container>
      <>
        <AbsolutePositionButtonContainer>
          <FullWidthButton
            text="Next"
            onHandlePress={() =>
              addSelectedSubjects(
                selectedSubjects,
                navigation,
                userOnBoarding,
                setUserOnBoarding,
                setUser
              )
            }
          />
        </AbsolutePositionButtonContainer>
      </>
    </>
  );
}
