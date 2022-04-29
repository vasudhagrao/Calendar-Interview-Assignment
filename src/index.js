import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import React, { Component } from "react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
