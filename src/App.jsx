import { BrowserRouter, Route, Routes } from "react-router";
import { LoginProvider } from "./ContextProvider/LoginProvider";
import { RegisterProvider } from "./ContextProvider/RegisterProvider";
import { UserBalanceProvider } from "./ContextProvider/UserBalanceProvider";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import Register from "./components/Register";
import Tickets from "./components/Tickets";
import { AuthProvider } from "./ContextProvider/AuthProvider";
import { PrivateRouteProvider } from "./ContextProvider/PrivateRouteProvider";
import ProtectedLayout from "./components/ProtectedLayout";
import TicketItemDescription from "./components/TicketItemDescription";

const App = () => {
  return (
    <div>
      <div>
        {/* Main */}
        <AuthProvider>
          <UserBalanceProvider>
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
                        element={<TicketItemDescription />}
                      ></Route>
                      <Route path="/tickets/reserved" element={<p>ای کصکش</p>}></Route>
                    </Route>
                  </Routes>
                </BrowserRouter>
              </LoginProvider>
            </RegisterProvider>
          </UserBalanceProvider>
        </AuthProvider>
      </div>
    </div>
  );
};
export default App;
