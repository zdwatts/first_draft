import React from "react";
import "./Card.css";

const Card = ({ story, idx }) => {
	console.log(story);

	return (
		<div className="card">
			<h1 className="card-number">0{idx + 1}</h1>
			<h2 className="card-title">{story.title}</h2>
		</div>
	);
};

export default Card;
