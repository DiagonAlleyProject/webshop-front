import { StrictMode } from "react"; // El corazon de react.
import { createRoot } from "react-dom/client"; // Un adaptador (interfaz)
import App from "./App.jsx";
import "./index.css";
import * as bootstap from "bootstrap"; // Incorporo nlos script de bootstrap.
import { BrowserRouter } from "react-router-dom";

// Punto más bajo de la aplicación React.
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <StrictMode> */}
    <App />
    {/* </StrictMode> */}
  </BrowserRouter>
);
