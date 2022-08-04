import React, { useState } from "react";

export const UserContext = React.createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const { user, setUser } = React.useContext(UserContext);

  return { user, setUser };
};
