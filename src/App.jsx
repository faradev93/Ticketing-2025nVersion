import { BrowserRouter, Route, Routes } from "react-router";
import { LoginProvider } from "./ContextProvider/LoginProvider";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import Register from "./components/Register";
import { RegisterProvider } from "./ContextProvider/RegisterProvider";
import Tickets from "./components/Tickets";
import { AuthProvider } from "./ContextProvider/AuthProvider";

const App = () => {
  return (
    <div>
      <div>
        {/* Main */}
        <AuthProvider>
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

                  <Route path={"/tickets"} element={<Tickets />}></Route>
                </Routes>
              </BrowserRouter>
            </LoginProvider>
          </RegisterProvider>
        </AuthProvider>
      </div>
    </div>
  );
};
export default App;
