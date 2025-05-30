import { createContext, useContext, useState } from "react";

const LoginForm = createContext();

export const useLoginForm = () => {
  return useContext(LoginForm);
};

export const LoginProvider = ({ children }) => {
  const [logForm, setLogForm] = useState({ username: "", password: "" });
  return (
    <LoginForm.Provider value={{ logForm, setLogForm }}>
      {children}
    </LoginForm.Provider>
  );
};
