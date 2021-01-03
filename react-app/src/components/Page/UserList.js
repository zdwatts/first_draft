import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Users from "./Users";

function UsersList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		document.title = "first_draft: Users";
		async function fetchData() {
			const response = await fetch("/api/users/");
			const responseData = await response.json();
			setUsers(responseData.users);
		}
		fetchData();
	}, []);

	return (
		<Container>
			<div className="master">
				<div className="user_container animate__animated animate__fadeInDown">
					<div className="text-div">
						<h1 className="user-title">Authors</h1>
						<ul className="user-name-list">
							<Users users={users} />
						</ul>
					</div>
				</div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");

	@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-top: 3em;
	//   border: 1px solid blue;
	height: 100%;

	.user-name-list {
		width: 100%;
	}

	.user-title {
		font-family: monserrat;
		color: black;
		font-size: 40px;
		font-family: "Open Sans", sans-serif;
		text-align: center;
		border-bottom: 7px solid #fec017;
		text-align: center;
		width: 50%;
	}

	.text-div {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	ul {
		list-style: none;
	}

	.username {
		display: flex;
		font-family: nunito sans;
		text-decoration: none;
		font-weight: 800;
		font-size: 18px;
		letter-spacing: 0.05em;
		padding: 0.5em;
		color: grey;
		border-left: 3px solid rgb(219, 224, 230);
		font-family: "Open Sans", sans-serif;
	}

	.master {
		width: 100%;
		color: black;
		margin-top: -3em;
		align-items: center;
		justify-content: center;
		display: flex;
	}

	.user_container {
		border: none;
		padding: 10px;
		border-radius: 10px;
		margin-top: 5em;
		margin-bottom: 10em;
		padding-bottom: 5em;
		height: auto;
		width: 60%;
		background-color: white;
		box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
			0 30px 60px -30px rgba(0, 0, 0, 0.3),
			inset 0 -2px 6px 0 rgba(10, 37, 64, 0.35);
	}
`;

export default UsersList;
