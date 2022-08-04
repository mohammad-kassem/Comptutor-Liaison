import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./styles";

export default function InfoFields({
  type,
  setFname,
  setLname,
  setRate,
  setYears,
  setAbout,
  user,
}) {
  return (
    <>
      {type === "editinfo" && (
        <>
          <Text style={styles.fieldTitle}>First name</Text>
          <TextInput
            style={styles.field}
            defaultValue={user.fname}
            placeholder="First name"
            onChangeText={(enteredText) => {
              setFname(enteredText);
            }}
          />
          <Text style={styles.fieldTitle}>Last name</Text>
          <TextInput
            style={styles.field}
            defaultValue={user.lname}
            placeholder="Last name"
            onChangeText={(enteredText) => {
              setLname(enteredText);
            }}
          />
        </>
      )}
      {user.role_id === 2 && (
        <>
          <Text style={styles.fieldTitle}>Rate</Text>
          <TextInput
            style={styles.field}
            defaultValue={user.rate && user.rate.toFixed()}
            placeholder="Rate"
            keyboardType="decimal-pad"
            onChangeText={(enteredText) => {
              setRate(enteredText);
            }}
          />
          <Text style={styles.fieldTitle}>Teaching since</Text>
          <TextInput
            style={styles.field}
            defaultValue={user.since && user.since.toFixed()}
            placeholder="Teaching since"
            keyboardType="decimal-pad"
            onChangeText={(enteredText) => {
              setYears(enteredText);
            }}
          />
          <Text style={styles.fieldTitle} multiline={true}>
            About
          </Text>
          <TextInput
            style={styles.about}
            defaultValue={user.about}
            placeholder="About"
            multiline={true}
            onChangeText={(enteredText) => {
              setAbout(enteredText);
            }}
          />
        </>
      )}
    </>
  );
}
