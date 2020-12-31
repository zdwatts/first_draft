import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Comment({ storyId, setComments, currentUser }) {
	const [comment, setComment] = useState("");
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setComment("");

		const response = await fetch(`/api/stories/${storyId}/comment`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				comment,
				author: currentUser,
			}),
		});
		if (response.ok) {
			const data = await response.json();
			const storyId = data.story_id;
			history.push(`/stories/${storyId}`);
		}
		const data = await axios.get(`/api/stories/${storyId}`);
		const newComments = data.data.comments;
		newComments.length > 0 && setComments(newComments);
	};

	return (
		<div>
			<h1>Got something to say?</h1>
			<form onSubmit={handleSubmit}>
				<textarea
					cols="30"
					rows="10"
					onChange={(e) => setComment(e.target.value)}
					value={comment}
				></textarea>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Comment;
