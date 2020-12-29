import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";

function Story() {
	const [story, setStory] = useState([]);
	const [author, setAuthor] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const data = await axios.get(`/api/stories/${id}`);
			data.data.story.length > 0 && setStory(data.data.story[0]);
			data.data.story.length > 0 && setAuthor(data.data.author[0]);
		})();
	}, [id]);

	return (
		<Container>
			<Inner>
				<Title>{story.title}</Title>
				<Author>
					<div>{author.username}</div>
				</Author>

				<Body>
					{/* <div>{story.body}</div> */}
					<div>{story.body && parse(story.body)}</div>
				</Body>
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
const Subtitle = styled.div`
	padding-top: 1em;
	font-family: monserrat;
	font-size: 21px;
	letter-spacing: 0.02em;
	padding: 1em;
`;

const Author = styled.div`
	font-family: nunito;
`;

const Body = styled.div`
	font-family: nunito;
	font-size: 16px;
`;

export default Story;
