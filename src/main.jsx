import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render } from "@testing-library/react";
import routes from "./routes";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
