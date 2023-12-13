import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import createGlobalStyle from "./global";

const container = document.getElementById("root");
const root = createRoot(container);
createGlobalStyle();

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
