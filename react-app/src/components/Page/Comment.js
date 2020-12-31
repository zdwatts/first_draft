import React from "react";
import parse from "html-react-parser";
import "./Story.css"

function Comment({ comments, currentUser }) {
	return (
		<div class="comments-container">
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
