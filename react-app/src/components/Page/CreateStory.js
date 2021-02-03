import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import "./stories.css";

function CreateStory({ authenticate }) {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("");
	const history = useHistory();

	const apiKey = process.env.REACT_APP_TINY_MCE;

	useEffect(() => {
		document.title = "first_draft: Create Story";

		(async () => {
			const response = await authenticate();
			const username = response.username;
			setAuthor(username);
		})();
	}, [author, authenticate]);

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
			const storyId = data.id;
			history.push(`/stories/${storyId}`);
		}
	};

	return (
		<div className="content-wrapper pattern-cross-dots-xl bg-white flex justify-center items-center bg-fixed">
			<div className="create-story-div animate__animated animate__zoomInRight">
				<h1 className="story-title">Create A Story</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-div">
						<label className="story-title-label">Story Title</label>
						<input
							className="title-input"
							type="text"
							required
							onChange={titleChange}
							placeholder='"A really awesome title"'
						/>
					</div>
					<Editor
						apiKey={apiKey}
						init={{
							height: "40vh",
							plugins: [
								"wordcount wordcount fullscreen emoticons image insertdatetime preview",
							],
						}}
						onEditorChange={handleEditorChange}
						className="tiny-mce-resize animate__animated animate__hinge"
					/>
					<button className="story-submit" type="submit">
						Submit Story
					</button>
				</form>
			</div>
		</div>
	);
}

export default CreateStory;
