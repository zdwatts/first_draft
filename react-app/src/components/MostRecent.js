import React from "react";
import Card from "./Card";
import "./Card.css";

const MostRecent = () => {
	const cards = ["1", "2", "3", "4", "5", "6"];
	return (
		<div className="most-recent-div">
			{cards.map((card) => {
				return <Card />;
			})}
		</div>
	);
};

export default MostRecent;
