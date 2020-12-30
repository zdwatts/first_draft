import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

function Comment({ storyId, setComments, currentUser }) {
	const [comment, setComment] = useState("");
	const history = useHistory();

	const apiKey = process.env.REACT_APP_TINY_MCE;

	const handleEditorChange = (content, editor) => {
		setComment(content);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

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
				<Editor
					apiKey={apiKey}
					plugins="wordcount"
					onEditorChange={handleEditorChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Comment;
