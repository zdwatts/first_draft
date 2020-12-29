import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import "./navbar.css";

const NavBar = ({ setAuthenticated }) => {
	return (
		<nav>
			<h1 className="logo_text">
				Medium
			</h1>
			<ul className="nav_links">
				<li>
					<NavLink to="/" exact={true} activeClassName="active">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/login" exact={true} activeClassName="active">
						Login
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/sign-up"
						exact={true}
						activeClassName="active"
					>
						Sign Up
					</NavLink>
				</li>
				<li>
					<NavLink to="/users" exact={true} activeClassName="active">
						Users
					</NavLink>
				</li>
				<li>
					<LogoutButton setAuthenticated={setAuthenticated} />
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
