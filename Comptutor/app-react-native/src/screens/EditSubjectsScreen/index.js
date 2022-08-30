import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import {
  addSelectedSubjects,
  getSubjects,
} from "./controller";
import FullWidthButton from "../../components/FullWidthButton";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AbsolutePositionButtonContainer from "../../components/AbsolutePositionButtonContainer";
import { useUser } from "../../Context/User";
import Container from "../../components/Container";
import Subjcets from "../../components/Subjects";
import { useUserSubjects } from "../../Context/UserSubjects";

export default function EditSubjectsScreen({ route }) {
  const { setUserSubjects } = useUserSubjects();
  const stack = route.params.stackType;
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const { user, setUser } = useUser();
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      getSubjects(setSubjects, user);
    }, [])
  );

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add your Subjects</Text>
      </View>
      <Container>
        <Subjcets
          subjects={subjects}
          selectedSubjects={selectedSubjects}
          setSelectedSubjects={setSelectedSubjects}
        />
      </Container>

      <>
        <AbsolutePositionButtonContainer>
          <FullWidthButton
            text="Save Changes"
            onHandlePress={() =>
              addSelectedSubjects(
                setUserSubjects,
                selectedSubjects,
                navigation,
                user,
                setUser
              )
            }
          />
        </AbsolutePositionButtonContainer>
      </>
    </>
  );
}
