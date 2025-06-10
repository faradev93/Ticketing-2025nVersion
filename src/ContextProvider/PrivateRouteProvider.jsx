import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";

const PrivateRouteContext = createContext();

export const usePrivateRoute = () => {
  return useContext(PrivateRouteContext);
};

export const PrivateRouteProvider = ({ children }) => {
  //
  const navigate = useNavigate();
  const defineUsername = localStorage.getItem("user_email");
  const [email, showEmail] = useState(defineUsername);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const TimeOut = setTimeout(() => {
      localStorage.removeItem("token");
      setToken(null);
      navigate("/login");
    }, 30 * 60 *3000);
    return () => {
      clearTimeout(TimeOut);
    };
  }, [token]);

  if (!token) return <Navigate to={"/login"} replace></Navigate>;
  //

  return (
    <PrivateRouteContext.Provider value={{ email, showEmail }}>
      {token && children}
    </PrivateRouteContext.Provider>
  );
};
