import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { generateData } from "./controller";
import styles from "./styles";

export default function DropdownComponent({ date, setDate, groupedSchedules }) {
  const data = generateData(groupedSchedules);

  return (
    <Dropdown
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select a date"
      value={date}
      onChange={(item) => {
        setDate(item.value);
      }}
    />
  );
}
