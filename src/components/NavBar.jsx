import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink
        to="/actors"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Actors
      </NavLink>{" "}
      |{" "}
      <NavLink
        to="/directors"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Directors
      </NavLink>
    </div>
  );
}
