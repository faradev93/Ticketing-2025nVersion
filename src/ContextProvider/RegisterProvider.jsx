import { createContext, useContext, useState } from "react";

const RegisterContext = createContext();

export const useRegister = () => {
  return useContext(RegisterContext);
};

export const RegisterProvider = ({ children }) => {
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });
  const [showMsg, setShowMsg] = useState({
    passwordmissMatch: false,
  });
  return (
    <RegisterContext.Provider value={{ form, setForm, showMsg, setShowMsg }}>
      {children}
    </RegisterContext.Provider>
  );
};
