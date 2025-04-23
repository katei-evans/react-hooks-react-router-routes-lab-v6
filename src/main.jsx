import { createMemoryRouter, Route, Router, RouterProvider } from "react-router-dom";
import { render } from "@testing-library/react";
import routes from "./routes";
import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <RouterProvider router={routes} />
    <NavBar/>
    <Route>
      <createMemoryRouter exact path="/home">
        <Home/>
      </createMemoryRouter>
      <createMemoryRouter exact path="/movies/:id">
        <Movie/>
      </createMemoryRouter>
      <createMemoryRouter exact path="/actors">
        <Actors/>
      </createMemoryRouter>
      <createMemoryRouter exact path="/directors">
        <Directors/>
      </createMemoryRouter>
      <createMemoryRouter exact path="/error">
        <ErrorPage/>
      </createMemoryRouter>
    </Route>
  </Router>
);
