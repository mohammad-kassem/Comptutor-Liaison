import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { handleSelect, isSelected } from "./controller";

export default function Subjcets({
  subjects,
  selectedSubjects,
  setSelectedSubjects,
}) {
  return (
    <FlatList
      data={subjects}
      numColumns={2}
      columnWrapperStyle={styles.subjectsContainer}
      renderItem={(subjectData) => {
        return (
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() =>
              handleSelect(
                subjectData.item.id,
                subjectData.item.subject,
                subjectData.item.image,
                selectedSubjects,
                setSelectedSubjects
              )
            }
          >
            <Image
              style={styles.subjectImage}
              source={{ uri: subjectData.item.image }}
            />
            {isSelected(subjectData.item.id, selectedSubjects) && (
              <View style={styles.iconContainer}>
                <Icon name="checkbox-marked-circle" style={styles.icon} />
              </View>
            )}
          </TouchableOpacity>
        );
      }}
    />
  );
}
