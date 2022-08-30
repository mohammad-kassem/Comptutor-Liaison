import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { filter } from "./controller";

export default function SearchBar({ original, setTutors }) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <Icon name="search" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={(searchText) =>
            filter(searchText.toLowerCase(), original, setTutors)
          }
        />
      </View>
    </View>
  );
}
