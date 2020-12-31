import React from "react";
import "./defaultheader.css";

const GettingStarted = ({ authenticated }) => {
  return authenticated ? (
    <div></div>
  ) : (
    <div className="getting-started">
      <h1 className="start-title">Getting Started</h1>
      <h1 className="feature-title">Create an account.</h1>
      <div class="pattern-diagonal-lines-sm gray-lighter bg-dots animate__animated animate__slideInLeft">
        <img
          class="sign-image animate__animated animate__slideInRight"
          src="signup.gif"
        />
      </div>
    </div>
  );
};

export default GettingStarted;
