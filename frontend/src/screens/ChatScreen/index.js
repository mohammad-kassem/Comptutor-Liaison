import { View, Text } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import database from "@react-native-firebase/database";
import { useUser } from "../../Context/User";
import { onSend, renderBubble, renderSend } from "./controller";

export default function ChatScreen({ route }) {
  const [messages, setMessages] = useState([]);
  const { user } = useUser();
  const roomId =
    user.role_id === 1
      ? `${user.id}-${route.params.reciever.id}`
      : `${route.params.reciever.id}-${user.id}`;
  const avatar = user.profile_image || "../../../assets/logo.png";

  useEffect(function () {
    var arr = [];
    database()
      .ref(`rooms/${roomId}/messages`)
      .orderByValue("createdAt")
      .on("value", async (snapshot) => {
        if (snapshot.val()) {
          arr = [];
          snapshot.forEach((message) => {
            arr.push(message._snapshot.value);
          });
          setMessages([...(arr || [])].reverse());
        }
      });
  }, []);

  useEffect(function () {
    const refrenceStudent = database().ref(`rooms/${roomId}/studentUnread`);
    const refrenceTutor = database().ref(`rooms/${roomId}/tutorUnread`);

    refrenceStudent.transaction((studentUnread) => {
      if (studentUnread === null) return;
      if (user.role_id === 1) return false;
    });

    refrenceTutor.transaction((tutorUnread) => {
      if (tutorUnread === null) return;
      if (user.role_id === 2) return false;
    });
  });

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages, user, route, avatar, roomId)}
        user={{
          _id: user.id,
        }}
        alwaysShowSend={true}
        keyboardShouldPersistTaps="never"
        minComposerHeight={50}
        minInputToolbarHeight={55}
        renderBubble={renderBubble}
        renderSend={renderSend}
        timeFormat="HH:mm"
      />
    </>
  );
}
