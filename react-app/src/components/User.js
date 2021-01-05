import React, { useState, useEffect } from "react";
import UpdateStory from "./Page/UpdateStory";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import PageTransition from "./Page/PageTransition";

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
		<Container variants={PageTransition} initial="hidden" animate="show">
			<Inner>
				<ul>
					<li>
						<strong>Author Name :</strong>{" "}
						<span> {user.username} </span>
					</li>
					<li>
						<strong>Author Email :</strong>{" "}
						<span>{user.email}</span>
					</li>
				</ul>
			</Inner>
			<Stories>
				<div className="main-div ">
					{stories.length === 0 ? (
						<h1
							className="pun"
							style={{
								fontFamily: "Satisfy, cursive",
								textAlign: "center",
								color: "#fec017",
							}}
						>
							Such emptiness!
						</h1>
					) : (
						""
					)}
					{stories &&
						stories.map((story, i) => (
							<div key={i} className="story-box">
								<Link
									to={`/stories/${story.id}`}
									className="story-t"
								>
									<p className="story-num">0{i + 1}</p>
									{story.title}
								</Link>

								{story.author_id === currentLoggedUser ? (
									<div className="button-div">
										<button
											className="delete-button"
											onClick={() =>
												deleteStory(story.id)
											}
										>
											Delete Story
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
				</div>
			</Stories>
			<Link to="/users">
				<p
					className="user-lists"
					style={{ fontSize: "30px", color: "#ced4da" }}
				>
					View all Authors
				</p>
			</Link>
		</Container>
	);
}

const Container = styled(motion.div)`
	background-color: #343a40;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 1.5em;
	padding-bottom: 8em;
	width: 100vw;
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;

	@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");

	@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

	.profile-title {
		font-size: 50px;
		font-family: "Open Sans", sans-serif;
	}

	.user-details {
		font-family: "Open Sans", sans-serif;
	}

	li {
		width: 18em;
		// border: 1px solid blue;
		color: #ced4da;
		display: flex;
		justify-content: space-between;
		font-family: nunito;
		list-style: none;
	}
`;

const Stories = styled.div`
	display: flex;
	width: 80vw;
	flex-direction: column;
	//   border: 1px solid yellow;
	.main-div {
		overflow: auto;
		box-sizing: border-box;
		width: 44em;
		margin: 1em 0em;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;

		Link {
			font-family: nunito;
			font-size: 18px;
			padding-bottom: 0.5em;
			text-align: center;
		}
		p {
			font-family: nunito;
			font-size: 15px;
		}

		.story-box {
			display: flex;
			justify-content: space-between;
			padding: 80px 40px;
			width: 80%;
			border: 1px solid black;
			margin-bottom: 40px !important;
			background-color: white;
			border-radius: 5px;
			box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		}

		.story-box:hover {
			box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
		}

		.story-t {
			font-family: "Open Sans", sans-serif;
			font-size: 25px;
		}

		.story-num {
			font-family: "Open Sans", sans-serif;
			font-size: 40px;
			font-weight: 800;
			margin: 0;
		}

		.delete-button {
			color: white;
			cursor: pointer;
			margin-bottom: 50px;
			border: none;
			width: 100%;
			border-radius: 5px;
			padding: 10px 40px;
			background-color: #fec017;
			font-family: "Open Sans", sans-serif;
			font-weight: 800;
			box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
				rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
		}

		.delete-button:hover {
			background-color: #ffbd09;
			color: white;
			box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
				rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
		}

		.button-div {
			width: 500px;
		}

		.user-lists {
			font-family: "Open Sans", sans-serif;
			font-size: 40px !important;
		}
	}
`;

export default User;
