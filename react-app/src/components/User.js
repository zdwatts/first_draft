import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function User() {
	const [user, setUser] = useState({});
	const [stories, setStories] = useState([]);

	const { userId } = useParams();

	useEffect(() => {
		if (!userId) {
			return;
		}
		(async () => {
			const response = await fetch(`/api/users/${userId}`);
			const user = await response.json();
			const id = user.id;
			setUser(user);

			const getStories = await axios.get(`/api/user/${id}`);
			const userStories = getStories.data.stories;
			setStories(userStories);
		})();
	}, [userId]);

	if (!user) {
		return null;
	}

	stories.map((story) => console.log(story));

	return (
		<Container>
			<Inner>
				<ul>
					{/* <li>
            <strong>User Id :</strong> <span>{userId}</span>
          </li> */}
					<li>
						<strong>Username :</strong>{" "}
						<span> {user.username} </span>
					</li>
					<li>
						<strong>Email :</strong> <span>{user.email}</span>
					</li>
				</ul>
			</Inner>
			<Stories>
				{stories &&
					stories.map((story) => (
						<div>
							<Link to={`/stories/${story.id}`}>
								{story.title}
							</Link>
							{/* <p>{parse(story.body)}</p> */}
						</div>
					))}
			</Stories>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 3em;
	padding-bottom: 8em;
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 44em;

	li {
		width: 18em;
		// border: 1px solid blue;
		display: flex;
		justify-content: space-between;
		font-family: nunito;
		list-style: none;
	}
`;

const Stories = styled.div`
	display: flex;
	flex-direction: column;
	//   border: 1px solid yellow;
	div {
		overflow: auto;
		box-sizing: border-box;
		border-radius: 1em;
		padding: 1em;
		padding-left: 2em;
		width: 44em;
		margin: 1em 0em;
		background-color: #f5f0f9;

		Link {
			font-family: nunito;
			font-size: 18px;
			padding-bottom: 0.5em;
		}
		p {
			font-family: nunito;
			font-size: 15px;
		}
	}
`;

export default User;
