import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const PrivateRouteContext = createContext();

export const usePrivateRoute = () => {
  return useContext(PrivateRouteContext);
};

export const PrivateRouteProvider = ({ children }) => {
  //
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const defineUsername = localStorage.getItem("User_Email");
  const [username, setuserName] = useState(defineUsername);
  const [email, showEmail] = useState(defineUsername);

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token, navigate]);
  //

  return (
    <PrivateRouteContext.Provider
      value={{ username, setuserName, email, showEmail }}
    >
      {token && children}
    </PrivateRouteContext.Provider>
  );
};
