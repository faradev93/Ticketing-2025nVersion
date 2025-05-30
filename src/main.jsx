import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const Root = document.getElementById("feri");
createRoot(Root).render(<App />);
