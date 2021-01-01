import React from "react";
import "./Card.css";

const Card = ({ story, idx }) => {
	return (
    <div className="card">
      
      <h1 className="card-number">0{idx + 1}</h1>
      <h2>
        <a className="card-title" href={`/stories/${story.id}`}>
          {story.title}
        </a>
      </h2>
      <p className="card-author">Written By: {story.author_name}</p>
    </div>
  );
};

export default Card;
