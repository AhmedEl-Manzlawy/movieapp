import React from "react";
import {  NavLink } from "react-router-dom";
import SearchMovie from "./SearchMovie";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between px-2">
      
      <NavLink
        className="nav-link "
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        exact
        to="/"
      >
        Home
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            className="nav-link"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            to="/movies"
          >
            Movies
          </NavLink>
          <NavLink
            className="nav-link"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            to="/favourite"
          >
            Favourite
          </NavLink>
        </div>
      </div>

      <SearchMovie></SearchMovie>
    </nav>
  );
}
