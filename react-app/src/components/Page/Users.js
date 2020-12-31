import React from "react";
import { NavLink } from "react-router-dom";

function Users({ users }) {
	return (
		<>
			{users.map((user) => (
				<li key={user.id}>
					<div>
						<NavLink to={`/users/${user.id}`} className="username">
							{user.username}
						</NavLink>
					</div>
				</li>
			))}
		</>
	);
}

export default Users;
