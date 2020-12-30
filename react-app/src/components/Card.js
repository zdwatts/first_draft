import React from "react";
import "./Card.css";

const Card = ({ title, body, idx }) => {
	return <div className="card">{idx > 6 ? "" : <h1>{idx + 1}</h1>}</div>;
};

export default Card;
