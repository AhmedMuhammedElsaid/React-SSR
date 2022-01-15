import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Routers from "./Routers";

ReactDOM.hydrate(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>,
  document.querySelector("#root")
);
