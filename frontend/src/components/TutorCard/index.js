import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function TutorCard({ tutorData }) {
  const navigation = useNavigation();
  const flexDirection = [
    { marginRight: "5%" },
    { alignSelf: "center" },
    { marginLeft: "5%" },
  ];

  return (
    <>
      <TouchableOpacity
        key={tutorData.item.lname}
        style={styles.tutorCard}
        onPress={() => {
          navigation.navigate("HomeStack", {
            screen: "TutorScreen",
            params: { tutor: tutorData.item },
          });
        }}
      >
        <View style={styles.cardContent}>
          <View style={styles.imageContainer}>
            {tutorData.item.profile_image ? (
              <Image
                style={styles.tutorProfile}
                source={{ uri: tutorData.item.profile_image }}
              />
            ) : (
              <Image
                style={styles.tutorProfile}
                source={require("../../../assets/logo.png")}
              />
            )}
          </View>
          <View style={styles.tutorInfo}>
            <Text style={styles.tutorName}>
              {tutorData.item.fname} {tutorData.item.lname}
            </Text>
            <Text style={styles.tutorDetail}>
              Teaching since {tutorData.item.since}
            </Text>
          </View>
          <View style={styles.rateContainer}>
            <Text style={styles.rate}>{tutorData.item.rate}$ / H</Text>
          </View>
        </View>
        <View style={styles.subjectsContainer}>
          {tutorData.item.subjects.map((subject, index) => (
            <View style={[styles.subjectContainer, flexDirection[index % 3]]}>
              <Text style={styles.subjectName}>{subject.subject}</Text>
            </View>
          ))}
        </View>
      </TouchableOpacity>
    </>
  );
}
