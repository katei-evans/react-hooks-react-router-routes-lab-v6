import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import React from "react";
import Actors from "./pages/Actors";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={createBrowserRouter(routes)} />
        <Actors />
        <Home />
        <MovieCard title="Doctor Strange" />
        <NavBar /> 
    </React.StrictMode>
);
