import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserBalanceProvider } from "./ContextProvider/UserBalanceProvider.jsx";
import { AuthProvider } from "./ContextProvider/AuthProvider.jsx";
import { OfflineModeProvider } from "./ContextProvider/OffilneModeProvider.jsx";

const Root = document.getElementById("feri");
createRoot(Root).render(
  <AuthProvider>
    <UserBalanceProvider>
      <OfflineModeProvider>
        <App />
      </OfflineModeProvider>
    </UserBalanceProvider>
  </AuthProvider>
);
