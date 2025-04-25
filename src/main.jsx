import { createMemoryRouter, RouterProvider} from "react-router-dom";
import { render } from "@testing-library/react";
import routes from "./routes";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import ErrorPage from "./components/ErrorPage";

const router = createMemoryRouter(routes,
  {path : "/",
  element: <Home />},
  {path : "/movie/:id",
  element: <Movie />},
  {path : "/actors",
  element: <Actors />},
  {path : "/directors",
  element: <Directors />},
  {path : "*",
  element: <ErrorPage />},
  {path : "/error",
  element: <ErrorPage />},
  {path : "/404",
  element: <ErrorPage />},
)

function main() {
  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(main())
