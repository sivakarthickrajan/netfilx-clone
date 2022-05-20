import { createBrowserHistory } from "history";
import React, { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
const Navbar = () => {
  function handleOnClick() {
    const history = createBrowserHistory();
    history.push({ pathname: `/searchname=/${search_input}` });
  }
  const [search_input, setSearch_input] = useState("");
  const { searchinput } = useParams();
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
        <form>
          <input
            className="searchbar"
            type="text"
            value={search_input}
            placeholder="Search By Movie..."
            onChange={(e) => setSearch_input(e.target.value)}
          />
          {/* <button onClick={handleOnClick}> */}
          <input className="search_button" type="submit" value="Search" />
          {/* </button>                 */}
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
