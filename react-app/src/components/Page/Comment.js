import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

function Comment({ author, storyId }) {
	console.log(storyId);
	console.log(author);
	const [comment, setComment] = useState("");
	const history = useHistory();

	const apiKey = process.env.REACT_APP_TINY_MCE;
	const handleEditorChange = (content, editor) => {
		setComment(content);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("You rock!!!!!!!!");

		const response = await fetch(`/api/stories/${storyId}/comment`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				comment,
				author,
			}),
		});
		if (response.ok) {
			const data = await response.json();
			console.log(
				"This is the data received from the post to comment: ",
				data
			);
			const storyId = data.story_id;
			history.push(`/stories/${storyId}`);
		}
	};

	return (
		<div>
			<h1>Hello Mate!</h1>
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
