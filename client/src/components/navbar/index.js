import React, { useState } from "react";
import { Link } from "react-router-dom";
// , Route, Switch
import userFunctions from "../utils/login";
import { useCookies } from "react-cookie";

// Functional component
function NavBar(props) {
  // Log out function
  const logOut = e => {
    e.preventDefault();
    userFunctions.logOut().then(res => {
      console.log("navbar: logout response:", res);
    });
  };

  // Login register links
  const loginRegLink = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
    </ul>
  );
  // User links
  const userLink = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link">
          Sites
        </Link>
      </li>
      <li className="nav-item">
        <button onClick={props.logOut}>Log Out</button>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Brand and links*/}
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="collapse navbar-collapse">
            <a className="navbar-brand" href="/">
              Recurring Works
            </a>
            {/* login state */}
            <span>
              {props.profile.first_name
                ? "Logged In: " +
                  props.profile.first_name +
                  " " +
                  props.profile.last_name
                : "Not Logged In"}
            </span>
            {/* place other links on navbar below here */}
          </div>
        </li>
      </ul>

      {/* Login Portion */}
      {props.profile.user_id ? userLink : loginRegLink}

      <div></div>
    </nav>
  );
}

export default NavBar;
