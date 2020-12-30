import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import "./Card.css";

const MostRecent = () => {
	let [stories, setStories] = useState([]);
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await axios.get(`/api/stories/`);
			setStories(data.data.stories.reverse());
		})();
	}, []);

	stories = stories.slice(0, 6);

	let authorIds = [];

	for (let i = 0; i < stories.length; i++) {
		let story = stories[i];
		authorIds.push(story.author_id);
	}

	console.log(authorIds);

	// useEffect(() => {
	// 	(async () => {
	// 		const data = await axios.get(`/api/user/`);
	// 		setStories(data.data.stories.reverse());
	// 	})();
	// }, []);

	let usernames = [];

	const getUsername = async (id) => {
		const data = await axios.get(`/api/user/${id}`);
		return data.data.author.username;
	};

	for (let i = 0; i < authorIds.length; i++) {
		let authorId = authorIds[i];
		let fetchedUsernames = getUsername(authorId);
		usernames.push(fetchedUsernames);
	}

	console.log(usernames);

	return (
		<div className="cards-wrapper">
			<h1 className="stories-header animate__animated animate__slideInLeft">
				Most Recent Stories
			</h1>
			<div className="most-recent-div animate__animated animate__slideInRight">
				{stories.map((story, idx) => {
					return <Card story={story} idx={idx} />;
				})}
			</div>
		</div>
	);
};

export default MostRecent;
