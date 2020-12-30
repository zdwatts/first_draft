import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CreateComment from "./CreateComment";
import Comment from "./Comment";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faHeart } from "@fortawesome/free-solid-svg-icons";

function Story({ authenticate }) {
	const [story, setStory] = useState([]);
	const [author, setAuthor] = useState([]);
	const [comments, setComments] = useState([]);
	const [showComments, setShowComments] = useState(false);
	const [currentUser, setCurrentUser] = useState("");
	const [totalLikes, setTotalLikes] = useState(0);

	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		(async () => {
			const data = await axios.get(`/api/stories/${id}`);
			data.data.story.length > 0 && setStory(data.data.story[0]);
			data.data.story.length > 0 &&
				setAuthor(data.data.author[0].username);
			data.data.comments.length > 0 && setComments(data.data.comments);

			const response = await authenticate();
			const loggedUser = response.username;
			setCurrentUser(loggedUser);
			setTotalLikes(data.data.total_likes);
		})();
	}, []);

	const toggleComment = () => {
		setShowComments(!showComments);
	};

	const handleLike = async () => {
		const response = await fetch(`/api/stories/${id}/like`, {
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
		<Container>
			<Inner>
				<Title>{story.title}</Title>
				<Author>
					<p>Written By: {author}</p>
				</Author>

				<Body>
					{/* <div>{story.body}</div> */}
					<div>{story.body && parse(story.body)}</div>
				</Body>
				<FontAwesomeIcon
					icon={faHeart}
					size="2x"
					onClick={handleLike}
				/>
				<div>Total Likes: {totalLikes}</div>
				<FontAwesomeIcon
					icon={faComments}
					size="2x"
					onClick={toggleComment}
				/>
				<div>Total Comments: {comments.length}</div>
				{showComments && (
					<>
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
					</>
				)}
			</Inner>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 13em;
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

const Title = styled.div`
	padding-top: 1em;
	font-family: roboto;
	font-size: 32px;
`;

const Author = styled.div`
	font-family: nunito;
`;

const Body = styled.div`
	font-family: nunito;
	font-size: 16px;
`;

export default Story;
