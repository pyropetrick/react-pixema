import React from "react";
import "./firebase";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "ui";
import { store } from "store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { router } from "router";
import "react-toastify/dist/ReactToastify.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>,
);
