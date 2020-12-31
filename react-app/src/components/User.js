import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { login } from "../services/auth";
import parse from "html-react-parser";
import styled from "styled-components";

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
    <Container>
      <Inner>
        <div>
          <ul>
            {/* <li>
            <strong>User Id :</strong> <span>{userId}</span>
		</li> */}
            <li>
              <strong>Username :</strong>{" "}
              <span className="head"> {user.username} </span>
            </li>
            <li>
              <strong>Email :</strong>{" "}
              <span className="head">{user.email}</span>
            </li>
          </ul>
        </div>
      </Inner>
      <Stories>
        {stories &&
          stories.map((story) => (
            <div className="story_container animate__animated animate__bounceInDown master pattern-cross-dots-sm">
              <Link to={`/stories/${story.id}`} className="story_link">
                {story.title}
              </Link>
              {/* <p>{parse(story.body)}</p> */}
            </div>
          ))}
      </Stories>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3em;
  padding-bottom: 8em;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 44em;

  ul {
    margin-top: 2em;
    margin-bottom: 3em;
  }

  li {
    width: 18em;
    // border: 1px solid blue;
    display: flex;
    justify-content: space-between;
    font-family: nunito sans;
    letter-spacing: 0.02em;
    font-weight: 500;
    list-style: none;
    font-size: 18px;
    padding-bottom: 0.5em;
  }

  .head {
    font-family: nunito sans;
    color: grey;
    font-size: 18px;
    letter-spacing: 0.02em;
  }
`;

const Stories = styled.div`
  display: flex;
  flex-direction: column;
  //   border: 1px solid yellow;
  div {
    overflow: auto;
    box-sizing: border-box;
    border-radius: 1em;
    padding: 1em;
    padding-left: 2em;
    width: 44em;
    margin: 1em 0em;
    background-color: #f5f0f9;

    p {
      font-family: nunito;
      font-size: 15px;
    }
  }

  .story_container {
    background-color: #fec017;
    color: red;
    filter: drop-shadow(0 2px 2px grey);
  }

  .story_link {
    text-decoration: none;
    font-family: nunito sans;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.05em;
  }
`;

export default User;
