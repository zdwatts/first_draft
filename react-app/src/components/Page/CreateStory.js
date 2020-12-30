import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function CreateStory({ authenticate }) {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("");
	const history = useHistory();

	useEffect(() => {
		(async () => {
			const response = await authenticate();
			const username = response.username;
			setAuthor(username);
		})();
	}, [authenticate]);
	console.log(author);

	const titleChange = (e) => {
		setTitle(e.target.value);
	};
	const bodyChange = (e) => {
		setBody(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch("/api/stories", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title,
				body,
				author,
			}),
		});

		if (response.ok) {
			const data = await response.json();
			console.log(data);
			const storyId = data.id;
			history.push(`/stories/${storyId}`);
		}
		// <Redirect to="/story/" />;
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="title" onChange={titleChange} />
				<input type="text" placeholder="body" onChange={bodyChange} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default CreateStory;
