import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./index.styles";
import { Reset } from "styled-reset";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Reset />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);