import React, { useEffect, useState } from "react";
import CreateComment from "./CreateComment";
import Comment from "./Comment";
import axios from "axios";
import { useParams, useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";
import "./Story.css";

function Story({ authenticate }) {
	const [story, setStory] = useState([]);
	const [author, setAuthor] = useState([]);
	const [authorId, setAuthorId] = useState("");
	const [comments, setComments] = useState([]);
	const [showComments, setShowComments] = useState(false);
	const [currentUser, setCurrentUser] = useState("");
	const [totalLikes, setTotalLikes] = useState(0);
	const history = useHistory();

	const { id } = useParams();

	useEffect(() => {
		document.title = "first_draft: Story";
		(async () => {
			const response = await axios.get(`/api/stories/${id}`);
			const data = response.data;
			const authorId = data.author[0].id;
			setAuthorId(authorId);
			setAuthor(data.author[0].username);
			setStory(data.story[0]);
			setComments(data.comments);
			setTotalLikes(data.total_likes);

			const loggedInUser = await authenticate();
			const loggedUser = loggedInUser.username;
			setCurrentUser(loggedUser);
		})();
	}, [authenticate, id]);

	const toggleComment = () => {
		if (!currentUser) history.push("/login");
		setShowComments(!showComments);
		const hideMe = () => {
			let text = document.getElementById("comment-cta");
			text.classList.toggle("hide");
		};

		hideMe();
	};

	const handleLike = async () => {
		if (!currentUser) history.push("/login");
		await fetch(`/api/stories/${id}/like`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user: currentUser,
			}),
		});
		const likeData = await axios.get(`/api/stories/${id}`);
		setTotalLikes(likeData.data.total_likes);
	};

	return (
		<Container className="story-container">
			<Inner className="story-div animate__animated animate__backInDown">
				<h1 className="story-page-title">{story.title}</h1>
				<p className="story-page-author">
					Written By:{" "}
					<span className="author-name">
						<Link to={`/users/${authorId}`}>{author}</Link>
					</span>
				</p>
				{/* <div>{story.body}</div> */}
				{/* <div className="story-body"> */}
				<div style={{ all: "unset" }}>
					{story.body && parse(story.body)}
				</div>
				{/* </div> */}
				<div className="like-wrapper">
					<div>
						<i
							className="fas fa-sign-language fa-2x clap-icon"
							onClick={handleLike}
						></i>
						<span className="like-text">Claps </span>
						<span className="total-text">{totalLikes}</span>
						<i
							className="fas fa-comments fa-2x comment-icon"
							onClick={toggleComment}
						></i>{" "}
						<span className="total-text">
							Replies {comments.length}
						</span>
					</div>
				</div>
				<span
					onClick={toggleComment}
					className="like-text"
					id="comment-cta"
				>
					Leave a comment . . .
				</span>

				{showComments && (
					<div className="animate__animated animate__zoomIn comment-box">
						<Comment
							comments={comments}
							currentUser={currentUser}
						/>
						<CreateComment
							author={author}
							storyId={id}
							setComments={setComments}
							currentUser={currentUser}
						/>
					</div>
				)}
			</Inner>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	box-sizing: border-box;
	/* width: 44em; */

	div {
		padding: 1em;
	}

	.comment-box {
		width: 80%;
	}
`;

export default Story;
