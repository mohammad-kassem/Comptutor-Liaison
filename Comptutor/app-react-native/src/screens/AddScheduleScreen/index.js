import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { addSchedule, toDateString, toTimeString } from "./controller";
import DateTimePicker from "react-native-modal-datetime-picker";
import FullWidthButton from "../../components/FullWidthButton";
import Container from "../../components/Container";

export default function AddScheduleScreen({ route }) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [datePickerIsVisable, setDatePickerIsVisable] = useState(false);
  const [timePickerIsVisable, setTimePickerIsVisable] = useState(false);
  const schedules = route.params.schedules;
  const setSchedules = route.params.setSchedules;

  return (
    <Container>
      <DateTimePicker
        mode="date"
        value={date}
        isVisible={datePickerIsVisable}
        minimumDate={new Date()}
        onConfirm={(d) => {
          setDatePickerIsVisable(false);
          setDate(d);
        }}
        onCancel={() => setDatePickerIsVisable(false)}
      />
      <DateTimePicker
        mode="time"
        value={time}
        isVisible={timePickerIsVisable}
        is24Hour={true}
        onConfirm={(t) => {
          setTimePickerIsVisable(false);
          setTime(t);
        }}
        onCancel={() => setTimePickerIsVisable(false)}
      />
      <Text style={styles.title}>Add your available time</Text>
      <Text style={styles.fieldTitle}>Duration</Text>
      <Text style={styles.field}>1 hour</Text>
      <Text style={styles.fieldTitle}>Date</Text>
      <TouchableOpacity
        style={styles.field}
        onPress={() => setDatePickerIsVisable(true)}
      >
        <Text style={styles.fieldText}>{toDateString(date)}</Text>
      </TouchableOpacity>
      <Text style={styles.fieldTitle}>Start time</Text>
      <TouchableOpacity
        style={styles.field}
        onPress={() => setTimePickerIsVisable(true)}
      >
        <Text style={styles.fieldText}>{toTimeString(time)}</Text>
      </TouchableOpacity>
      <View style={styles.buttonsContainer}>
        <FullWidthButton
          text="Confirm"
          onHandlePress={() => addSchedule(date, time, schedules, setSchedules)}
        />
      </View>
    </Container>
  );
}
