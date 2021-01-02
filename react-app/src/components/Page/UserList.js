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
			<div className="master pattern-cross-dots-md">
				<div className="user_container animate__animated animate__fadeInDown">
					<div>
						<h1>All Users</h1>
						{/* <ul>{userComponents}</ul> */}
						<ul>
							<Users users={users} />
						</ul>
					</div>
				</div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-top: 3em;
	//   border: 1px solid blue;
	height:100%;

	h1 {
		padding-left: 1em;
		padding-bottom: 1em;
		font-family: monserrat;
		color: black;
	}

	ul {
		list-style: none;
	}

	.username {
		display: flex;
		font-family: nunito sans;
		text-decoration: none;
		font-weight: 500;
		font-size: 18px;
		letter-spacing: 0.05em;
		padding: 0.5em;
		color: grey;
		// border: 1px solid red;
	}

	.master {
		width: 100%;
		color: red;
		background-color: #fec017;
		margin-top: -3em;
		align-items: center;
		justify-content: center;
		display:flex;

	}

	.user_container {
		border: none;
		padding: 10px;
		border-radius: 10px;
		margin-top: 5em;
		margin-bottom: 10em;
		padding-left: 5em;
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
