import React from "react";
import "./defaultheader.css";
import signup from "./images/signup.gif";
import story from "./images/story.gif";
import commenting from "./images/commenting.gif";

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
						<p>
							Sign up to gain access to all of the features
							first_draft has to offer.
						</p>
					</div>
					<div class="pattern-diagonal-lines-sm gray-lighter bg-dots">
						<img class="sign-image" src={signup} />
					</div>
				</div>
				<div className="card-2">
					<div>
						<h1 className="feature-title">
							Begin sharing your stories.
						</h1>
						<p>Registered users can create stories.</p>
					</div>
					<div class="pattern-diagonal-lines-sm gray-lighter bg-dots">
						<img class="sign-image" src={story} />
					</div>
				</div>
				<div className="card-3">
					<div>
						<h1 className="feature-title">Share your thoughts.</h1>
						<p>
							Registered users have the ability to leave comments
							on stories.
						</p>
					</div>
					<div class="pattern-diagonal-lines-sm gray-lighter bg-dots">
						<img class="sign-image" src={commenting} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default GettingStarted;
