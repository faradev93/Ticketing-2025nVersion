import { Outlet } from "react-router";
import { PrivateRouteProvider } from "../ContextProvider/PrivateRouteProvider";
import Header from "./Header";

const ProtectedLayout = () => {
  return (
    <PrivateRouteProvider>
      <Header />
      <Outlet />
    </PrivateRouteProvider>
  );
};
export default ProtectedLayout;
