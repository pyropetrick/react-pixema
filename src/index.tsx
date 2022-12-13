import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { GlobalStyles } from "ui";
import { store } from "store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
);
