import { createContext, useContext, useState } from "react";

const offlinecontext = createContext();

export const useOfflineMode = () => {
  useContext(offlinecontext);
};

export const OfflineModeProvider = ({ children }) => {
  const [OfflineMode, setOfflineMode] = useState(false);

  return (
    <offlinecontext.Provider value={{ OfflineMode, setOfflineMode }}>
      {children}
    </offlinecontext.Provider>
  );
};
