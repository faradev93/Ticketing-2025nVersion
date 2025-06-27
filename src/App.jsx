import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { LoginProvider } from "./ContextProvider/LoginProvider";
import { RegisterProvider } from "./ContextProvider/RegisterProvider";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import Register from "./components/Register";
import Tickets from "./components/Tickets";
import ProtectedLayout from "./ContextProvider/ProtectedLayout";
import TicketItemDescription from "./components/TicketItemDescription";
import { useUserBalance } from "./ContextProvider/UserBalanceProvider";
import { useAuth } from "./ContextProvider/AuthProvider";
import ReservedTickets from "./components/ReservedTickets";
import { getMe } from "./api/me";
import { myTickets } from "./api/myTicekts";
import { getTickets } from "./api/Tickets";
import { useOfflineMode } from "./ContextProvider/OffilneModeProvider";

const App = () => {
  //
  const { balance, setBalance, reservedTickets, setReservedTickets, token } =
    useUserBalance();
  const { username, setUsername } = useAuth();
  const { OfflineMode, setOfflineMode } = useOfflineMode();
  const [data, setData] = useState([]);

  const getTicketsData = async () => {
    if (OfflineMode) {
      const data = await getTickets();
      setData(data);
    } else {
      console.log("gereftam");
      const response = await fetch("https://test.joo.nz/tickets", {
        method: "GET",
      });
      console.log(response, response.status);
      if (response.ok) {
        const json = await response.json();
        setData(json);
        console.log(`heyyyyyy MAN${json}`);
      }

      console.log(`Error when fetch getdata:♦ ${err}`);
    }
  };

  const checkBalance = async () => {
    if (OfflineMode) {
      const data = await getMe(token);
      setBalance(data.balance);
    } else {
      try {
        const response = await fetch("http://test.joo.nz/me", {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          setBalance(data.balance);
        }
      } catch (err) {
        console.log("Check Balance Not work: ", err);
      }
    }
  };

  const fetchTickets = async () => {
    if (OfflineMode) {
      const getTickets = await myTickets();
      setReservedTickets(getTickets);
    } else {
      try {
        const response = await fetch("http://test.joo.nz/tickets/my-tickets", {
          method: "GET",
          headers: { authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          const data = await response.json();
          setReservedTickets(data);
        }
      } catch (err) {
        console.log(`not load ReservedTickets:  ${err}`);
      }
    }
  };
  const handleTicketReserved = () => {
    fetchTickets();
    checkBalance();
  };

  useEffect(() => {
    getTicketsData();
    checkBalance();
    fetchTickets();
    console.log(data);
    console.log(OfflineMode);
  }, [username]);
  //
  return (
    <div>
      <div>
        {/* Main */}
        <RegisterProvider>
          <LoginProvider>
            <BrowserRouter>
              <Toaster
                containerClassName="font-[bebas] text-xl"
                position="bottom-right"
              />
              <Routes>
                {/* Public Route */}
                <Route path={"/"} element={<Login />}></Route>
                <Route path={"/login"} element={<Login />}></Route>
                <Route path={"/register"} element={<Register />}></Route>

                {/* Protected Route */}
                <Route element={<ProtectedLayout />}>
                  <Route path={"/tickets"} element={<Tickets />}></Route>
                  <Route
                    path={"/tickets/:id"}
                    element={
                      <TicketItemDescription
                        onTicketReserved={handleTicketReserved}
                      />
                    }
                  ></Route>
                  <Route
                    path="/tickets/reserved"
                    element={
                      <ReservedTickets reservedTickets={reservedTickets} />
                    }
                  ></Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </LoginProvider>
        </RegisterProvider>
      </div>
    </div>
  );
};

export default App;
