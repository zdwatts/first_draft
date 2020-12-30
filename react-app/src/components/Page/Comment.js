import React from "react";
import parse from "html-react-parser";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";

function Comment({ comments, author }) {
	console.log("comments: ", comments);
	console.log("author: ", author);
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
