import React from "react";
import { NavLink } from "react-router-dom";
// import LogoutButton from "./auth/LogoutButton";
// import DemoButton from "./auth/DemoButton";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="main-logo-footer">
				<h1 className="logo-text">Medium</h1>
			</div>
			<ul className="nav_links">
				<li>
					<NavLink
						className="navlink"
						to="/"
						exact={true}
						activeclassname="active"
					>
						<i className="fas fa-home"></i> Home
					</NavLink>
					<a
						className="navlink"
						href="https://github.com/zdwatts/medium-clone"
						target="_blank"
						rel="noopener noreferrer"
						activeclassname="active"
					>
						<i className="fab fa-github footer-icon fa-md"></i>{" "}
						GitHub
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
