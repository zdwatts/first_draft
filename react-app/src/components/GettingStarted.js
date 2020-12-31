import React from "react";
import "./defaultheader.css";

const GettingStarted = ({ authenticated }) => {
  return authenticated ? (
    <div></div>
  ) : (
    <div className="getting-started">
      <h1 className="start-title">Getting Started</h1>
      <h1 className="feature-title">Create an account.</h1>
      <div class="pattern-diagonal-lines-sm gray-lighter bg-dots">
        <img class="sign-image" src="signup.gif" />
      </div>
    </div>
  );
};

export default GettingStarted;
