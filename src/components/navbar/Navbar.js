import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import SearchMovie from "./SearchMovie";
import { LanguageContext } from "../../context/language";
import { addToQuery } from "../../store/actions/query";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  const { languageContext, setLanguageContext } = useContext(LanguageContext);
  function resetQuery() {
    dispatch(addToQuery(""));
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
      <button
        style={{ marginRight: "10px" }}
        className="btn btn-secondary"
        onClick={() =>
          setLanguageContext(languageContext === "ar" ? "en" : "ar")
        }
      >
        {LanguageContext}
      </button>

      <SearchMovie></SearchMovie>
    </nav>
  );
}
