import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import DemoButton from "./auth/DemoButton";
import "./navbar.css";

const NavBar = ({ setAuthenticated, authenticated, authenticate }) => {
	const greeting = () => {
		let greeting;
		let time = new Date().getHours();
		if (time < 12) {
			greeting = "Good morning";
		} else if (time < 20) {
			greeting = "Good afternoon";
		} else {
			greeting = "Good evening";
		}
		return greeting;
	};

	let navTheme;
	if (authenticated) {
		navTheme = "loggedin";
	} else {
		navTheme = "loggedout";
	}

	return (
		<nav className={navTheme}>
			<div className="main-logo">
				<h1 className="logo">{"</>"}</h1>
				<a href="/">
					<h1 className="logo-text">first_draft</h1>{" "}
				</a>
				{authenticated ? (
					<h2 className="welcome-message">{greeting()}</h2>
				) : (
					""
				)}
			</div>
			<ul className="nav_links">
				<li>
					<NavLink to="/" exact={true} activeClassName="active">
						Home
					</NavLink>
				</li>
				{authenticated ? (
					<li>
						<NavLink
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
							exact={true}
							activeClassName="active"
						>
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
