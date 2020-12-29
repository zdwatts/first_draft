import React from "react";
import "./defaultheader.css"

const DefaultHome = ({ setAuthenticated, authenticated }) => {
    return authenticated ? (
      <h1>Logged in</h1>
    ) : (
      <div className="Logged_out_header">
        <div>
          <h1 className="header_title">Explore new perspectives</h1>
          <p>
            Read and share ideas from independent voices, world-class
            publications, and experts from around the globe. Everyone's welcome.
          </p>
        </div>
          <img className="header_image"src="headerimage.png"></img>
      </div>
    );
};

export default DefaultHome;
