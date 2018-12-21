import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import App from "../src/containers/App/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
