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

	return (
		<div className="cards-wrapper  animate__animated animate__slideInDown">
			<div className="title-wrapper">
				<h1 className="stories-header">Most Recent Stories</h1>
			</div>
			<div className="most-recent-div">
				{stories.map((story, idx) => {
					return <Card key={story.id} story={story} idx={idx} />;
				})}
			</div>
		</div>
	);
};

export default MostRecent;
