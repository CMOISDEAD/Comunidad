import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Providers } from "./components/layout/Providers";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers />
    </BrowserRouter>
  </React.StrictMode>,
);
