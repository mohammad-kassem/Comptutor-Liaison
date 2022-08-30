import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function Container({ children }) {
  return <View style={styles.container}>{children}</View>;
}
