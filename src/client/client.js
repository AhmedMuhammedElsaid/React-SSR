import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
import { Provider } from "react-redux";
import store from "../helpers/createStore";
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
