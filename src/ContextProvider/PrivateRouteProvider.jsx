import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";

const PrivateRouteContext = createContext();

export const usePrivateRoute = () => {
  return useContext(PrivateRouteContext);
};

export const PrivateRouteProvider = ({ children }) => {
  //
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const defineUsername = localStorage.getItem("User_Email");
  const [email, showEmail] = useState(defineUsername);

  if (!token) return <Navigate to={"/login"} replace></Navigate>;
  //

  return (
    <PrivateRouteContext.Provider value={{ email, showEmail }}>
      {token && children}
    </PrivateRouteContext.Provider>
  );
};
