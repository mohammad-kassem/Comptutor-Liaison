import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  approveAppointment,
  deleteAppointment,
  filterAppointments,
  getAppointments,
  groupAppointments,
} from "./controller";
import { useUser } from "../../Context/User";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import DropdownComponent from "../../components/Dropdown";
import AppointmentCard from "../../components/AppointmentCard";
import SegmenetdControl from "../../components/SegmentedControl";
import database from "@react-native-firebase/database";

export default function AppointmentsScreen() {
  let [approvedAppointments, setApprovedAppointments] = useState([]);
  let [pendingAppointments, setPendingAppointments] = useState([]);
  let [appointments, setAppointments] = useState(approvedAppointments);
  const refRBSheet = useRef();
  const [date, setDate] = useState("");
  const [id, setId] = useState();
  const [type, setType] = useState("approved");
  const [goButtonDisabled, setGoButtonDisabled] = useState(false);
  const [cancelButtonDisabled, setCancelButtonDisabled] = useState(false);
  const { user, setUser } = useUser();
  const stackType = user.role_id === 1 ? "student" : "tutor";
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      getAppointments(
        setApprovedAppointments,
        setPendingAppointments,
        stackType
      );
    }, [])
  );

  useEffect(function(){
    database()
      .ref(`appointments/${user.id}`)
      .on("value", async (snapshot) => {
        getAppointments(
          setApprovedAppointments,
          setPendingAppointments,
          stackType
        );
      });
  },[])

  let groupedAppointments = [];
  if (type === "approved") {
    appointments = filterAppointments(approvedAppointments);
    groupedAppointments = groupAppointments(appointments);
  } else {
    appointments = filterAppointments(pendingAppointments);
    groupedAppointments = groupAppointments(appointments);
  }

  return (
    <>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container: styles.sheetContainer,
          draggableIcon: styles.draggableIcon,
        }}
      >
        <Text style={styles.sheetText}>Appointment Action</Text>

        {type === "approved" ? (
          <TouchableOpacity
            style={goButtonDisabled ? [styles.go, styles.disabled] : styles.go}
            disabled={goButtonDisabled}
            onPress={() => {
              navigation.navigate("AppointmentStack", {
                screen: "CallScreen",
                params: { appointmentId: id },
              });
              refRBSheet.current.close();
            }}
          >
            <Text
              style={[styles.goText, goButtonDisabled && styles.disabledText]}
            >
              Go to Appointment
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.go}
            onPress={() => {
              approveAppointment(
                id,
                approvedAppointments,
                pendingAppointments,
                setApprovedAppointments,
                setPendingAppointments
              );
              refRBSheet.current.close();
            }}
          >
            <Text style={styles.goText}>Approve Appointment</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={
            cancelButtonDisabled
              ? [styles.cancel, styles.disabled]
              : styles.cancel
          }
          disabled={cancelButtonDisabled}
          onPress={() => {
            deleteAppointment(
              id,
              type,
              approvedAppointments,
              pendingAppointments,
              setApprovedAppointments,
              setPendingAppointments
            );
            refRBSheet.current.close();
          }}
        >
          <Text style={styles.cancelText}>Cancel Appointment</Text>
        </TouchableOpacity>
      </RBSheet>
      {user.role_id === 2 ? (
        <>
          <SegmenetdControl type={type} setType={setType} />
        </>
      ) : (
        <>
          <Text style={styles.title}>
            {type === "approved" ? "Appointments" : "Pending"}
          </Text>
        </>
      )}

      <DropdownComponent
        date={date}
        setDate={setDate}
        groupedSchedules={groupedAppointments}
      />
      <FlatList
        data={groupedAppointments[date]}
        renderItem={(dateData) => {
          return (
            <AppointmentCard
              refRBSheet={refRBSheet}
              setId={setId}
              dateData={dateData}
              setGoButtonDisabled={setGoButtonDisabled}
              setCancelButtonDisabled={setCancelButtonDisabled}
            />
          );
        }}
      />
    </>
  );
}
