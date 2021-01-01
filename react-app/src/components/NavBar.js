import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import DemoButton from "./auth/DemoButton";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ setAuthenticated, authenticated, authenticate }) => {
	const [userId, setUserId] = useState("");
	// const [currentUser, setCurrentUser] = useState("");

	useEffect(() => {
		(async () => {
			const response = await authenticate();
			const id = response.id;
			// const user = response.username;
			setUserId(id);
			// setCurrentUser(user);
		})();
	});

	const greeting = () => {
		let greeting;
		let time = new Date().getHours();
		if (time < 12) {
			greeting = "Good morning";
		} else if (time < 17) {
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
				<a href="/" style={{ textDecoration: "none" }}>
					<h1
						className="logo-text"
						style={{
							fontFamily: "Satisfy, cursive",
							fontSize: "2rem",
						}}
					>
						First_Draft
						<FontAwesomeIcon icon={faFeatherAlt} />
					</h1>
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
				{!authenticated ? (
					""
				) : (
					<li>
						<NavLink
							to={`/users/${userId}`}
							exact
							activeClassName="active"
						>
							<FontAwesomeIcon icon={faUser} size="2x" />
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
