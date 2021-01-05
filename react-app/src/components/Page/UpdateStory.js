import React, { useState } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import "./Story.css";
import "./stories.css";
import Modal from "react-modal";

const customStyles = {
	content: {
		widht: "80%",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

function UpdateStory({ id, title, body }) {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<div>
			<button
				onClick={() => setShowModal(!showModal)}
				className="update-button"
			>
				Update Story
			</button>
			<Modal
				isOpen={showModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="EXAMPLE MODAL"
			>
				<UpdateForm id={id} title={title} body={body} />
			</Modal>
		</div>
	);
}

function UpdateForm({ id, title, body }) {
	const [newTitle, setNewTitle] = useState(title);
	const [newBody, setNewBody] = useState(body);

	const apiKey = process.env.REACT_APP_TINY_MCE;

	const handleSubmit = async (e) => {
		const request = { title: newTitle, body: newBody };
		const response = await axios.put(`/api/stories/${id}`, request);
		console.log(response);
	};
	const handleEditorChange = (content, editor) => {
		setNewBody(content);
	};
	const handleChange = (e) => {
		setNewTitle(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={newTitle}
				onChange={handleChange}
				className="title-input"
			/>
			<Editor
				value={newBody}
				apiKey={apiKey}
				// plugins="wordcount wordcount fullscreen emoticons image insertdatetime preview"
				init={{
					height: 500,
					width: 500,
					plugins: [
						"wordcount wordcount fullscreen emoticons image insertdatetime preview",
					],
				}}
				onEditorChange={handleEditorChange}
				className="animate__animated animate__hinge"
			/>
			<button type="submit" className="story-submit">
				Confirm Changes
			</button>
		</form>
	);
}

export default UpdateStory;
