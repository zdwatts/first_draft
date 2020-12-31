import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import "./Card.css";

const MostRecent = () => {
	let [stories, setStories] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await axios.get(`/api/stories/`);
			const storyInfo = data.data.stories;
			setStories(storyInfo);
		})();
	}, []);
	// console.log(stories);

	return (
		<div className="cards-wrapper">
			<div className="title-wrapper">
				<h1 className="stories-header animate__animated animate__slideInLeft">
					Most Recent Stories
				</h1>
			</div>
			<div className="most-recent-div animate__animated animate__slideInRight">
				{stories.map((story, idx) => {
					return <Card key={story.id} story={story} idx={idx} />;
				})}
			</div>
		</div>
	);
};

export default MostRecent;
