import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import getSchedules, { filterAllTimes } from "./controller";
import { groupSchedules } from "../ScheduleScreen/controller";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import DropdownComponent from "../../components/Dropdown";
import Schedules from "../../components/Schedules";

export default function TutorSchedulesScreen() {
  let [schedules, setSchedules] = useState([]);
  const [date, setDate] = useState("");
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      getSchedules(setSchedules);
    }, [])
  );

  schedules = filterAllTimes(schedules);
  const groupedSchedules = groupSchedules(schedules);

  return (
    <>
      <Text style={styles.title}>Schedule</Text>
      <DropdownComponent
        date={date}
        setDate={setDate}
        groupedSchedules={groupedSchedules}
      />
      <Schedules groupedSchedules={groupedSchedules} date={date} />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate("HomeStackTutor", {
            screen: "AddScheduleScreen",
            params: { schedules: schedules, setSchedules: setSchedules },
          });
        }}
      >
        <Icon name="plus" style={styles.icon} />
      </TouchableOpacity>
    </>
  );
}
