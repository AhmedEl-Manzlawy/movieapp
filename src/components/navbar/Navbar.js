import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const searchLink = () => `movies?query=${query}`;

  const history = useHistory();
  const location = useLocation();
  console.log("HISTORY", history);
  console.log("LOCATION", location);

  const [query, setQuery] = useState("");
  // function search(event) {
  //   // event.preventDefault();
  //   console.log("HISTORY", history);
  //   console.log("LOCATION", location);

  //   history.push(`movies?query=${query}`);
  //   // history.go();
  // }

  function handleInputChange(event) {
    console.log(event);
    setQuery(event.target.value);
  }

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
            to="/movie"
          >
            Movies
          </NavLink>
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
        </div>
      </div>

      <form className="form-inline d-flex">
        <input
          className="form-control mr-sm-2 mx-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          id="query"
          value={query}
          onChange={handleInputChange}
        />
        <Link className="nav-item nav-link" to={searchLink()}>
          Search
        </Link>
      </form>
    </nav>
  );
}
