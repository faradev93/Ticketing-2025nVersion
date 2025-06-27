import { Outlet } from "react-router";
import { PrivateRouteProvider } from "../ContextProvider/PrivateRouteProvider";
import { useUserBalance } from "../ContextProvider/UserBalanceProvider";
import Header from "../components/Header";

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
