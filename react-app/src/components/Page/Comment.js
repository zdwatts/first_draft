import React from "react";
import parse from "html-react-parser";

function Comment({ comments }) {
	return (
		<div>
			{comments.map((comment, i) => (
				<div key={i}>
					<div>{parse(comment.comment)}</div>
				</div>
			))}
		</div>
	);
}

export default Comment;
