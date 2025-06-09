import { createContext, useContext, useState } from "react";

const BalanceProvider = createContext();

export const useUserBalance = () => {
  return useContext(BalanceProvider);
};

export const UserBalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [reservedTickets, setReservedTickets] = useState([]);
  return (
    <BalanceProvider.Provider
      value={{balance, setBalance, reservedTickets, setReservedTickets}}
    >
      {children}
    </BalanceProvider.Provider>
  );
};
