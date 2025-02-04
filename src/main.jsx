import React from "react";
import ReactDOM from "react-dom/client"; // <-- Change this import
import "./index.css";
import App from "./App";

import "@fontsource/roboto";
import "@fontsource/outfit";

const root = ReactDOM.createRoot(document.getElementById("root")); // <-- Use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
