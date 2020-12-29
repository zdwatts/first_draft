import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Story() {
	const [story, setStory] = useState([]);
	const [author, setAuthor] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const data = await axios.get(`/api/stories/${id}`);
			data.data.story.length > 0 && setStory(data.data.story[0]);
			data.data.story.length > 0 && setAuthor(data.data.author[0]);
		})();
	}, [id]);

	return (
		<div>
			<div>
				<div>
					<h1>{story.title}</h1>
					<p>{author.username}</p>
					<h3>{story.body}</h3>
				</div>
			</div>
		</div>
	);
}

export default Story;
