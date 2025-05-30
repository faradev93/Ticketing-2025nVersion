import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [username, setUserName] = useState(
    localStorage.getItem("user_fullName")
  );
  return (
    <AuthContext.Provider value={{ username, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};
