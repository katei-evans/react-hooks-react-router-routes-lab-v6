import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className="nav-link">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/actors" className="nav-link">
            Actors
          </NavLink>
        </li>
      </ul>
      <li>
        <NavLink to="/directors" className="nav-link">
          Directors
        </NavLink>
      </li>
    </nav>
    );
};

export default NavBar;
