import React from "react";
import { demo } from "../../services/auth";
import "../navbar.css";

const DemoButton = ({ setAuthenticated, authenticated }) => {
	const demoPress = async (e) => {
		await demo();
		setAuthenticated(true);
		window.location.reload(false);
	};

	return authenticated ? (
		""
	) : (
		<button className="demo_button" onClick={demoPress}>
			Login as a Demo User
		</button>
	);
};

export default DemoButton;
