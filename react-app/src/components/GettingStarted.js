import React from "react";
import "./defaultheader.css";

const GettingStarted = ({ authenticated }) => {
  return authenticated ? (
    <div></div>
  ) : (
    <div className="getting-started">
        <h1 className="start-title">Getting Started</h1>
    </div>
  );
};

export default GettingStarted;
