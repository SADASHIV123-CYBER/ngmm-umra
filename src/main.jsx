import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import RoutesFile from "./routes/RoutesFile.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <RoutesFile />
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
