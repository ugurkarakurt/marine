import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./index.styles";
import { Reset } from "styled-reset";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ColorsProvider } from "./context/colors.context";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorsProvider>
        <GlobalStyles />
        <Reset />
        <App />
      </ColorsProvider>
    </BrowserRouter>
  </React.StrictMode>
);