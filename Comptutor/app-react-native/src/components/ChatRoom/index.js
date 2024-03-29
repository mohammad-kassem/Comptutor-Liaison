import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useUser } from "../../Context/User";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function ChatRoom({ roomData }) {
  const { user } = useUser();
  const navigation = useNavigation();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <TouchableOpacity
      style={styles.room}
      onPress={() =>
        navigation.navigate("ChatStack", {
          screen: "ChatScreen",
          params: {
            reciever: {
              id:
                user.role_id === 1
                  ? roomData.item[0].split("-")[1]
                  : roomData.item[0].split("-")[0],
            },
          },
        })
      }
    >
      {user.role_id === 1 ? (
        <>
          <View style={styles.imageContainer}>
            {roomData.item[1].tutorImage === "../../../assets/logo.png" ? (
              <Image
                style={styles.profile}
                source={require("../../../assets/logo.png")}
              />
            ) : (
              <Image
                style={styles.profile}
                source={{ uri: roomData.item[1].tutorImage }}
              />
            )}
          </View>
          <View style={styles.content}>
            <Text style={styles.time}>
              {monthNames[new Date(roomData.item[1].lastSent).getMonth() + 1]}{" "}
              {new Date(roomData.item[1].lastSent).getDate()},
              {new Date(roomData.item[1].lastSent).getHours()}:
              {new Date(roomData.item[1].lastSent).getMinutes() < 10 ? "0" : ""}
              {new Date(roomData.item[1].lastSent).getMinutes()}
            </Text>
            <View style={styles.header}>
              <Text style={styles.contact}>{roomData.item[1].tutorName}</Text>
            </View>
            <Text style={styles.message}>
              {roomData.item[1].lastMessage &&
                roomData.item[1].lastMessage.substring(0, 25)}
              {roomData.item[1].lastMessage &&
                roomData.item[1].lastMessage.length > 20 &&
                "..."}
            </Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.imageContainer}>
            {roomData.item[1].studentImage === "../../../assets/logo.png" ? (
              <Image
                style={styles.profile}
                source={require("../../../assets/logo.png")}
              />
            ) : (
              <Image
                style={styles.profile}
                source={{ uri: roomData.item[1].studentImage }}
              />
            )}
          </View>
          <View style={styles.content}>
            <Text style={styles.time}>
              {monthNames[new Date(roomData.item[1].lastSent).getMonth() + 1]}{" "}
              {new Date(roomData.item[1].lastSent).getDate()},
              {new Date(roomData.item[1].lastSent).getHours()}:
              {new Date(roomData.item[1].lastSent).getMinutes() < 10 ? "0" : ""}
              {new Date(roomData.item[1].lastSent).getMinutes()}
            </Text>
            <View style={styles.header}>
              <Text style={styles.contact}>{roomData.item[1].studentName}</Text>
            </View>
            <Text style={styles.message}>{roomData.item[1].lastMessage}</Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}
