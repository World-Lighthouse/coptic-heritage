import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

import "./styles/tokens.css";
import "./styles/global.css";
import "./components/ornaments/ornaments.css";
import "./styles/app.css";

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root element");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
