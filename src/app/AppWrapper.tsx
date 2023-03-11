import React from "react";
import { App } from "@App/App";
import { Provider } from "react-redux";
import { store } from "@Store/store";
import "@Styles/normalize.css";

export const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
