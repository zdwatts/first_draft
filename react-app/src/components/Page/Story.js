import React, { useEffect, useState } from "react";
import CreateComment from "./CreateComment";
import Comment from "./Comment";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

function Story() {
	const [story, setStory] = useState([]);
	const [author, setAuthor] = useState([]);
	const [comments, setComments] = useState([]);
	const [showComments, setShowComments] = useState(false);

	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const data = await axios.get(`/api/stories/${id}`);
			data.data.story.length > 0 && setStory(data.data.story[0]);
			data.data.story.length > 0 &&
				setAuthor(data.data.author[0].username);
			// data.data.comments.length > 0 && setComments(data.data.comments);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`/api/stories/${id}`);
			const comments_body = response.data.comments;
			// console.log(comments_body);
			comments_body.length > 0 && setComments(comments_body);
		})();
	}, []);

	const toggleComment = () => {
		setShowComments(!showComments);
	};

	return (
		<Container>
			<Inner>
				<Title>{story.title}</Title>
				<Author>
					<div>{author}</div>
				</Author>

				<Body>
					{/* <div>{story.body}</div> */}
					<div>{story.body && parse(story.body)}</div>
				</Body>
				<FontAwesomeIcon
					icon={faComments}
					size="2x"
					onClick={toggleComment}
				/>
				<div>Total Comments: {comments.length}</div>
				{showComments && (
					<>
						<Comment comments={comments} />
						<CreateComment
							author={author}
							storyId={id}
							setComments={setComments}
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
