import React, { useEffect, useState } from "react";
import axios from "axios";

function Story() {
	const [story, setStory] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await axios.get("http://127.0.0.1:5000/api/stories");
			console.log(data.data.stories[0]);
			setStory(data.data.stories[0]);
		})();
	}, []);

	console.log(story);

	return (
		<div>
			<h1>{story.author_id}</h1>
			<h3>{story.title}</h3>
			<h3>{story.body}</h3>
		</div>
	);
}

export default Story;
