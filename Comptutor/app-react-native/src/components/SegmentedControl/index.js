import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

export default function SegmenetdControl({ type, setType }) {
  return (
    <View style={styles.segmentsContainer}>
      <View style={styles.segments}>
        <TouchableOpacity
          style={
            type === "approved" ? styles.activeButton : styles.inactiveButton
          }
          onPress={() => setType("approved")}
        >
          <Text style={type === "approved" ? styles.active : styles.inactive}>
            Approved
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            type === "pending" ? styles.activeButton : styles.inactiveButton
          }
          onPress={() => setType("pending")}
        >
          <Text style={type === "pending" ? styles.active : styles.inactive}>
            Pending
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
