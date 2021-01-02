import React, { useState, useEffect } from "react";
import UpdateStory from "./Page/UpdateStory";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function User({ authenticate }) {
	const [user, setUser] = useState({});
	const [stories, setStories] = useState([]);
	const [currentLoggedUser, setCurrentLoggedUser] = useState("");

	const { userId } = useParams();

	useEffect(() => {
		document.title = "first_draft: Profile";
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

			const loggedUserRes = await authenticate();
			const loggedUserId = loggedUserRes.id;
			setCurrentLoggedUser(loggedUserId);
		})();
	}, [userId, authenticate]);

	if (!user) {
		return null;
	}

	const deleteStory = async (toBeDeletedId) => {
		await axios.delete(`/api/stories/${toBeDeletedId}`);
		window.location.reload(false);
	};

	return (
		<Container>
			<Inner>
				<h1 className="profile-title">My Profile</h1>
					<li className="user-details">
						<strong>Username :</strong>{" "}
						<span> {user.username} </span>
					</li>
					<li>
						<strong>Email :</strong> <span>{user.email}</span>
					</li>
			</Inner>
			<Stories>
				{stories.length === 0 ? (
					<h1 style={{ fontFamily: "Satisfy, cursive" }}>
						Such emptiness!
					</h1>
				) : (
					""
				)}
				{stories &&
					stories.map((story, i) => (
						<div key={i}>
							<Link to={`/stories/${story.id}`}>
								{story.title}
							</Link>
							{story.author_id === currentLoggedUser ? (
								<div>
									<button
										onClick={() => deleteStory(story.id)}
									>
										Eradicate
									</button>
									<UpdateStory
										id={story.id}
										title={story.title}
										body={story.body}
									/>
								</div>
							) : (
								""
							)}
						</div>
					))}
			</Stories>
			<Link to="/users">All users</Link>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 1.5em;
	padding-bottom: 8em;
	width: 100%;
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 44em;

	@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

	.profile-title {
		font-size: 50px;
		font-family: "Open Sans", sans-serif;
	}

	.user-details {
		padding-left: none !important;
		text-align: left;
	}

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
