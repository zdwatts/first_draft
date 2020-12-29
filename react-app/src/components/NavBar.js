import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import DemoButton from "./auth/DemoButton";
import "./navbar.css";

const NavBar = ({ setAuthenticated, authenticated }) => {
	return (
		<nav>
			<div className="main-logo">
				<h1 className="logo">{"</>"}</h1>
				<h1 className="logo-text">Medium</h1>
			</div>
			<ul className="nav_links">
				<li>
					<NavLink to="/" exact={true} activeClassName="active">
						Home
					</NavLink>
				</li>
				{authenticated ? (
					""
				) : (
					<li>
						<NavLink to="/login" exact={true} activeClassName="active">
							Login
						</NavLink>
					</li>
				)}
				{authenticated ? (
					""
				) : (
					<li>
						<NavLink to="/sign-up" exact={true} activeClassName="active">
							Sign Up
						</NavLink>
					</li>
				)}
				<li>
					<LogoutButton
						setAuthenticated={setAuthenticated}
						authenticated={authenticated}
					/>
				</li>
				<li>
					<DemoButton
						setAuthenticated={setAuthenticated}
						authenticated={authenticated}
					/>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
