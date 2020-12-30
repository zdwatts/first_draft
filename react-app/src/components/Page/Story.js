import React, { useEffect, useState } from "react";
import CreateComment from "./CreateComment";
import Comment from "./Comment";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import "./Story.css";

function Story({ authenticate }) {
	const [story, setStory] = useState([]);
	const [author, setAuthor] = useState([]);
	const [comments, setComments] = useState([]);
	const [showComments, setShowComments] = useState(false);
	const [currentUser, setCurrentUser] = useState("");

	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const data = await axios.get(`/api/stories/${id}`);
			data.data.story.length > 0 && setStory(data.data.story[0]);
			data.data.story.length > 0 && setAuthor(data.data.author[0].username);
			data.data.comments.length > 0 && setComments(data.data.comments);

			const response = await authenticate();
			const loggedUser = response.username;
			setCurrentUser(loggedUser);
		})();
	}, []);

	const toggleComment = () => {
		setShowComments(!showComments);
	};

	return (
		<Container className="story-container pattern-diagonal-lines-md">
			<Inner className="story-div">
				<h1 className="story-page-title">{story.title}</h1>
				<p className="story-page-author">
					Written By: <span className="author-name">{author}</span>
				</p>
				{/* <div>{story.body}</div> */}
				<div className="story-body">{story.body && parse(story.body)}</div>
				<FontAwesomeIcon icon={faComments} size="2x" onClick={toggleComment} />
				<div>Total Comments: {comments.length}</div>
				{showComments && (
					<>
						<Comment comments={comments} currentUser={currentUser} />
						<CreateComment
							author={author}
							storyId={id}
							setComments={setComments}
							currentUser={currentUser}
						/>
					</>
				)}
			</Inner>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	box-sizing: border-box;
	width: 44em;

	div {
		padding: 1em;
	}
`;

const Body = styled.div`
	font-family: nunito;
	font-size: 16px;
`;

export default Story;
