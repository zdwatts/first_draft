import React from "react";
import "./defaultheader.css";
import headerimage from "./images/headerimage.png";

const DefaultHome = ({ setAuthenticated, authenticated }) => {
	return authenticated ? (
		<div></div>
	) : (
		<div className="Logged_out_header">
			<div>
				<h1 className="header_title">Explore new perspectives</h1>
				<p className="header_text">
					Read and share ideas from independent voices, world-class
					publications, and experts from around the globe. Everyone's welcome.
				</p>
			</div>
			<img className="header_image" src={headerimage} alt=""></img>
		</div>
	);
};

export default DefaultHome;
