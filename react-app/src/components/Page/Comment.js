import React from "react";
import parse from "html-react-parser";
import "./Story.css"

function Comment({ comments, currentUser }) {
	return (
		<div className="comments-container">
			{comments.map((comment, i) => (
				<div className="comment-box" claskey={i}>
					<p className="comment-maker">{comment.user} commented:</p>
					<div>{parse(comment.comment)}</div>
				</div>
			))}
		</div>
	);
}

export default Comment;
