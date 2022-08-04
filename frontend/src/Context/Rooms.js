import React, { useEffect, useState } from "react";
import { useUser } from "./User";
import database from "@react-native-firebase/database";
import { filterRooms } from "../screens/ChatRoomsScreen/controller";

export const RoomsContext = React.createContext();

export default function RoomsProvider({ children }) {
  const { user, setUser } = useUser();
  const [rooms, setRooms] = useState([]);

  useEffect(function () {
    let arr = [];
    database()
      .ref("rooms")
      .orderByChild("lastSent")
      .on("value", (snapshot) => {
        arr = [];
        snapshot.forEach((room) => {
          arr.push([room._snapshot.key, room._snapshot.value]);
        });
        setRooms([...(arr || [])].reverse());
      });
  }, []);

  const filteredRooms = filterRooms(rooms, user);

  let unreadRooms = 0;
  for (const room of filteredRooms) {
    if (
      (user.role_id === 1 && room[1].studentUnread) ||
      (user.role_id === 2 && room[1].tutorUnread)
    )
      unreadRooms += 1;
  }

  return (
    <RoomsContext.Provider value={{ rooms, setRooms, unreadRooms }}>
      {children}
    </RoomsContext.Provider>
  );
}

export const useRooms = () => {
  const { rooms, setRooms, unreadRooms } = React.useContext(RoomsContext);

  return { rooms, setRooms, unreadRooms };
};
