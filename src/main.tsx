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

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
