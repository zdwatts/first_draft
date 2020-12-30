import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { login } from "../services/auth";
import parse from "html-react-parser";

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
		<div>
			<ul>
				<li>
					<strong>User Id</strong> {userId}
				</li>
				<li>
					<strong>Username</strong> {user.username}
				</li>
				<li>
					<strong>Email</strong> {user.email}
				</li>
			</ul>

			{stories &&
				stories.map((story) => (
					<div>
						<h2>{story.title}</h2>
						<p>{parse(story.body)}</p>
					</div>
				))}
		</div>
	);
}
export default User;
