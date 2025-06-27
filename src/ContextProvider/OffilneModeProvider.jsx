import { createContext, useContext, useState } from "react";

const offlineContext = createContext();

export const useOfflineMode = () => {
  return useContext(offlineContext);
};

export const OfflineModeProvider = ({ children }) => {
  const [OfflineMode, setOfflineMode] = useState(false);
  return (
    <offlineContext.Provider value={{ OfflineMode, setOfflineMode }}>
      {children}
    </offlineContext.Provider>
  );
};
