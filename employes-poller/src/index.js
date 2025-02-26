import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../src/components/App";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { legacy_createStore as createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(
  document.getElementById("root") || document.createElement("div")
);
export const store = createStore(reducer, middleware);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
