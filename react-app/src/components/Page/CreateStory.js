import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import './stories.css'

function CreateStory({ authenticate }) {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("");
	const history = useHistory();

	const apiKey = process.env.REACT_APP_TINY_MCE;
	useEffect(() => {
		(async () => {
			const response = await authenticate();
			const username = response.username;
			setAuthor(username);
		})();
	}, [author]);

	const titleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleEditorChange = (content, editor) => {
		setBody(content);
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
	};

	return (
		<div class="create-story-div">
			<h1 className="story-title">Create A Story</h1>
			<form onSubmit={handleSubmit}>
				<div className="input-div">
				<label className="story-title-label">Story Title</label>
				<input className="title-input" type="text" placeholder='"Why Sequelize Sucks"' onChange={titleChange} />
				</div>
				<Editor
					apiKey={apiKey}
					plugins="wordcount"
					onEditorChange={handleEditorChange}
				/>
				<button className="story-submit" type="submit">Submit</button>
			</form>
		</div>
	);
}

export default CreateStory;
