import React from "react";
import { NavLink } from "react-router-dom";
// import LogoutButton from "./auth/LogoutButton";
// import DemoButton from "./auth/DemoButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<ul className="nav_links">
				<li>
					<p
						style={{
							fontSize: "1.5rem",
						}}
					>
						Zac Watts
					</p>
					<a
						href="https://www.linkedin.com/in/zac-watts-b27450106/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} style={{ color: "#15114A" }} />
					</a>
					<a
						href="https://github.com/zdwatts"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} style={{ color: "#15114A" }} />
					</a>
				</li>
				<li>
					<p
						style={{
							fontSize: "1.5rem",
						}}
					>
						Miguel Coria
					</p>
					<a
						href="https://www.linkedin.com/in/miguel-coria-273888130/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} style={{ color: "#15114A" }} />
					</a>
					<a
						href="https://github.com/miguelcoria94"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} style={{ color: "#15114A" }} />
					</a>
				</li>
				<li>
					<p
						style={{
							fontSize: "1.5rem",
						}}
					>
						Ronald Regan Palisuan
					</p>
					<a
						href="https://www.linkedin.com/in/ronald-regan-palisuan-833451163/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} style={{ color: "#15114A" }} />
					</a>
					<a
						href="https://github.com/zolvo"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} style={{ color: "#15114A" }} />
					</a>
				</li>
				<li>
					<p
						style={{
							fontSize: "1.5rem",
						}}
					>
						Saad Shaikh
					</p>
					<a
						href="https://www.linkedin.com/in/saadshaikh18/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} style={{ color: "#15114A" }} />
					</a>
					<a
						href="https://github.com/saadjs"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} style={{ color: "#15114A" }} />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
