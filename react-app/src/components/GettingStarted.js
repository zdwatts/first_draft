import React from "react";
import "./defaultheader.css";

const GettingStarted = ({ authenticated }) => {
  return authenticated ? (
    <div></div>
  ) : (
    <div className="getting-started">
      <h1 className="start-title">Getting Started</h1>
      <div className="card-wrapper-2">
        <div className="card-1">
          <div>
            <h1 className="feature-title">Create an account.</h1>
            <p>Sign up today to begin sharing your stries with others.</p>
          </div>
          <div class="pattern-diagonal-lines-sm gray-lighter bg-dots">
            <img class="sign-image" src="signup.gif" />
          </div>
        </div>
        <div className="card-2">
          <div>
            <h1 className="feature-title">Create an account.</h1>
            <p>Sign up today to begin sharing your stries with others.</p>
          </div>
          <div class="pattern-diagonal-lines-sm gray-lighter bg-dots">
            <img class="sign-image" src="signup.gif" />
          </div>
        </div>
        <div className="card-3">
          <div>
            <h1 className="feature-title">Create an account.</h1>
            <p>Sign up today to begin sharing your stries with others.</p>
          </div>
          <div class="pattern-diagonal-lines-sm gray-lighter bg-dots">
            <img class="sign-image" src="signup.gif" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
