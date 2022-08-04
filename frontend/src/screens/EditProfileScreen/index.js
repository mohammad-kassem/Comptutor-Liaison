import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { useUser } from "../../Context/User";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { deleteDegree, deleteSubject } from "./controller";
import Container from "../../components/Container";
import { useDegrees } from "../../Context/Degrees";
import { useUserSubjects } from "../../Context/UserSubjects";

export default function EditProfileScreen() {
  const { user, setUser } = useUser();
  const { degrees, setDegrees } = useDegrees();
  const { userSubjects, setUserSubjects } = useUserSubjects();
  const navigation = useNavigation();

  return (
    <>
      <ScrollView>
        <Text style={styles.title}>Edit Profile</Text>
        <Container>
          <View style={styles.infoContainer}>
            <Text style={styles.category}>Personal Info</Text>
            <TouchableOpacity
              style={styles.edit}
              onPress={() =>
                navigation.navigate("EditProfileStack", {
                  screen: "EditInfoScreen",
                })
              }
            >
              <Text style={styles.editText}>Edit</Text>
              <Icon name="pen" style={styles.penIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.fieldTitle}>First name</Text>
          <Text style={styles.field}>{user.fname}</Text>
          <Text style={styles.fieldTitle}>Last name</Text>
          <Text style={styles.field}>{user.lname}</Text>
          {user.role_id === 2 && (
            <>
              <Text style={styles.fieldTitle}>Rate</Text>
              <Text style={styles.field}>{user.rate}</Text>
              <Text style={styles.fieldTitle}>Teaching since</Text>
              <Text style={styles.field}>{user.since}</Text>
              <Text style={styles.fieldTitle}>About</Text>
              <Text style={styles.about} multiline={true}>
                {user.about ? user.about : "-"}
              </Text>
              <View style={styles.infoContainer}>
                <Text style={styles.category}>Degrees</Text>
                <TouchableOpacity
                  style={styles.edit}
                  onPress={() =>
                    navigation.navigate("EditDegreeScreen", {
                      stackType: "EditProfile",
                    })
                  }
                >
                  <Text style={styles.editText}>Edit</Text>
                  <Icon name="pen" style={styles.penIcon} />
                </TouchableOpacity>
              </View>
              {degrees.map((degree) => {
                return (
                  <View style={styles.infoContainer}>
                    <Text style={styles.degree}>
                      {degree.university} - {degree.degree}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        deleteDegree(
                          degree.id,
                          degrees,
                          setDegrees,
                          user,
                          setUser
                        )
                      }
                    >
                      <Icon
                        name="delete"
                        size={20}
                        color="#e0474c"
                        style={styles.deleteIcon}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </>
          )}

          <View style={styles.infoContainer}>
            <Text style={styles.category}>Subjects</Text>
            <TouchableOpacity
              style={styles.edit}
              onPress={() =>
                navigation.navigate("EditSubjectsScreen", {
                  stackType: "EditProfile",
                })
              }
            >
              <Text style={styles.editText}>Edit</Text>
              <Icon name="pen" style={styles.penIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.subjectsContainer}>
            {userSubjects.map((subject) => {
              return (
                <>
                  <View style={styles.subjectContainer}>
                    <View style={styles.imageContainer}>
                      <Image
                        style={styles.subjectImage}
                        source={{ uri: subject.image }}
                      />
                    </View>
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() =>
                        deleteSubject(
                          subject.id,
                          userSubjects,
                          setUserSubjects,
                          user,
                          setUser
                        )
                      }
                    >
                      <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </>
              );
            })}
          </View>
        </Container>
      </ScrollView>
    </>
  );
}
