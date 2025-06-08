import { BrowserRouter, Route, Routes } from "react-router";
import { LoginProvider } from "./ContextProvider/LoginProvider";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import Register from "./components/Register";
import { RegisterProvider } from "./ContextProvider/RegisterProvider";
import Tickets from "./components/Tickets";
import { AuthProvider } from "./ContextProvider/AuthProvider";
import { PrivateRouteProvider } from "./ContextProvider/PrivateRouteProvider";
import Header from "./components/Header";
import { UserInfoProvider } from "./ContextProvider/UserInfoProvider";
import TicketItemDescription from "./components/TicketItemDescription";

const App = () => {
  return (
    <div>
      <div>
        {/* Main */}
        <AuthProvider>
          <UserInfoProvider>
            <RegisterProvider>
              <LoginProvider>
                <BrowserRouter>
                  <Toaster
                    containerClassName="font-[bebas] text-xl"
                    position="bottom-right"
                  />
                  <Routes>
                    <Route path={"/"} element={<Login />}></Route>
                    <Route path={"/login"} element={<Login />}></Route>
                    <Route path={"/register"} element={<Register />}></Route>
                    
                  </Routes>
                </BrowserRouter>
              </LoginProvider>
            </RegisterProvider>
          </UserInfoProvider>
        </AuthProvider>
      </div>
    </div>
  );
};
export default App;
