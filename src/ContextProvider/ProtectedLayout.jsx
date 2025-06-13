import { Outlet } from "react-router";
import { PrivateRouteProvider } from "../ContextProvider/PrivateRouteProvider";
import Header from "./Header";
import { useUserBalance } from "../ContextProvider/UserBalanceProvider";

const ProtectedLayout = () => {
  const { balance, setBalance, reservedTickets, setReservedTickets } =
    useUserBalance();
  return (
    <PrivateRouteProvider>
      <Header reservedTickets={reservedTickets} />
      <Outlet />
    </PrivateRouteProvider>
  );
};
export default ProtectedLayout;
