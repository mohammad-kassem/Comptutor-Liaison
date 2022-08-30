import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { useUser } from "../../Context/User";
import SearchBar from "../../components/SearchBar";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { filterTutors, getTutors } from "./controller";
import TutorCard from "../../components/TutorCard";

export default function HomeScreen({ navigation }) {
  let [tutors, setTutors] = useState([]);
  const [original, setOriginal] = useState([]);
  const { user, setUser } = useUser();

  useFocusEffect(
    React.useCallback(() => {
      getTutors(setTutors, setOriginal);
    }, [])
  );

  tutors = filterTutors(tutors, user);

  return (
    <>
      <Text style={styles.title}>Home</Text>
      <SearchBar original={original} setTutors={setTutors} />

      <FlatList
        data={tutors}
        renderItem={(tutorData) => {
          return <TutorCard tutorData={tutorData} />;
        }}
        // keyExtractor={(tutor) => tutor.id}
      />
    </>
  );
}
