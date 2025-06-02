import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserInfoProvider = () => {
  return useContext(UserContext);
};

export const UserInfoProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [reservedTickets, setReservedTickets] = useState([]);

  return (
    <UserContext.Provider
      value={{ balance, setBalance, reservedTickets, setReservedTickets }}
    >
      {children}
    </UserContext.Provider>
  );
};
