import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import FullWidthButton from "../../components/FullWidthButton";
import { addDegree, getUniversities } from "./controller";
import { useNavigation } from "@react-navigation/native";
import Container from "../../components/Container";
import styles from "./styles";
import { useUser } from "../../Context/User";
import DegreeFields from "../../components/DegreeFields";
import { useDegrees } from "../../Context/Degrees";

export default function EditDegreeScreen({ route }) {
  const { user, setUser } = useUser();
  const { setDegrees } = useDegrees();
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [universities, setUniversities] = useState([]);
  const navigation = useNavigation();

  useEffect(function () {
    getUniversities(setUniversities);
  }, []);

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={-250} behavior="padding">
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add a Degree</Text>
        </View>
        <Container>
          <DegreeFields
            setDegree={setDegree}
            setUniversity={setUniversity}
            university={university}
            universities={universities}
          />
          <View style={styles.buttonsContainer}>
            <FullWidthButton
              text="Save Changes"
              onHandlePress={() =>
                addDegree(
                  { university, degree },
                  user,
                  setUser,
                  navigation,
                  setDegrees
                )
              }
            />
          </View>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
