import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import DemoButton from "./auth/DemoButton";
import "./Footer.css";

const Footer = ({ setAuthenticated, authenticated }) => {
  return (
    <nav className="footer">
      <div className="main-logo">
        <h1 className="logo">{"</>"}</h1>
        <h1 className="logo-text">Medium</h1>
      </div>
      <ul className="nav_links">
        <li>
          <NavLink
            className="navlink"
            to="/"
            exact={true}
            activeClassName="active"
          >
            Home
          </NavLink>
        </li>
        {authenticated ? (
          <li>
            <NavLink
              className="navlink"
              to="/stories"
              exact={true}
              activeClassName="active"
            >
              Create A Story
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              className="navlink"
              to="/login"
              exact={true}
              activeClassName="active"
            >
              Login
            </NavLink>
          </li>
        )}
        {authenticated ? (
          ""
        ) : (
          <li>
            <NavLink
              to="/sign-up"
              className="navlink"
              exact={true}
              activeClassName="active"
            >
              Sign Up
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Footer;
