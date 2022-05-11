import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <a className="logo-image" href="http://localhost:3000">
        <img className="logo-image" src={require("../logo.png")} alt=""></img>
      </a>
      <div className="nav-links">
        <NavLink className="links" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/Upcoming">
          Up Coming
        </NavLink>
        <NavLink className="links" to="/Toprated">
          Top Rated
        </NavLink>
        <NavLink className="links" to="/Nowplaying">
          Now Playing
        </NavLink>
        <NavLink className="links" to="/Popular">
          Popular
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
