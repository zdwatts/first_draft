import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import "./Card.css";

const MostRecent = () => {
	let [stories, setStories] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await axios.get(`/api/stories/`);
			setStories(data.data.stories.reverse());
		})();
	}, []);

	stories = stories.slice(0, 6);

	return (
		<>
			<h1 className="stories-header">Most Recent Stories</h1>
			<div className="most-recent-div">
				{stories.map((story, idx) => {
					return <Card story={story} idx={idx} />;
				})}
			</div>
		</>
	);
};

export default MostRecent;
