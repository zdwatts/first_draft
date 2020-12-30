import React from "react";
import parse from "html-react-parser";

function Comment({ comments, currentUser }) {
	console.log("current user, this is comment comp:", currentUser);
	console.log("comments: ", comments);
	return (
		<div>
			{comments.map((comment, i) => (
				<div key={i}>
					<p>{comment.user} commented:</p>
					<div>{parse(comment.comment)}</div>
				</div>
			))}
		</div>
	);
}

export default Comment;
