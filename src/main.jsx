import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserBalanceProvider } from "./ContextProvider/UserBalanceProvider.jsx";
import { AuthProvider } from "./ContextProvider/AuthProvider.jsx";

const Root = document.getElementById("feri");
createRoot(Root).render(
  <AuthProvider>
    <UserBalanceProvider>
      <App />
    </UserBalanceProvider>
  </AuthProvider>
);
