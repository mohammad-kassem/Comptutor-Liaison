import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { useUser } from "../../Context/User";
import styles from "./styles";

export default function Schedules({
  groupedSchedules,
  date,
  setModalIsVisable,
  setModalData,
}) {
  const { user } = useUser();

  return (
    <FlatList
      numColumns={2}
      columnWrapperStyle={styles.timesContainer}
      data={groupedSchedules[date]}
      renderItem={(dateData) => {
        dateData.item.start_time =
          dateData.item.start_time.split(":")[0] +
          ":" +
          dateData.item.start_time.split(":")[1];
        dateData.item.end_time =
          dateData.item.end_time.split(":")[0] +
          ":" +
          dateData.item.end_time.split(":")[1];
        return (
          <>
            {user.role_id === 1 ? (
              <TouchableOpacity
                style={styles.timeContainer}
                onPress={() => {
                  setModalIsVisable(true);
                  setModalData([dateData.item, date]);
                }}
              >
                <Text style={styles.time}>{dateData.item.start_time}</Text>
                <Text style={styles.time}>{dateData.item.end_time}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.timeContainer}>
                <Text style={styles.time}>{dateData.item.start_time}</Text>
                <Text style={styles.time}>{dateData.item.end_time}</Text>
              </TouchableOpacity>
            )}
          </>
        );
      }}
    />
  );
}
