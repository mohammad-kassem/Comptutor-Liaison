import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function OnBoardingPrompt({ message }) {
  return (
    <>
      <Text style={styles.title}>{message}</Text>
    </>
  );
}
