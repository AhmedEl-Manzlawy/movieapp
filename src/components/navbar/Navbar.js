import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link "
                activeStyle={{
                  fontWeight: "bold",
                  color: "purple",
                }}
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                to="/movie"
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                to="/details/:id"
              >
                Details
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
