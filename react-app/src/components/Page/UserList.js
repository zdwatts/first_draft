import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
      <li key={user.id}>
        <div>
          <NavLink to={`/users/${user.id}`} className="username">
            {user.username}
          </NavLink>
        </div>
      </li>
    );
  });

  return (
    <Container>
      <div className="master pattern-cross-dots-md">
        <div className="user_container animate__animated animate__fadeInDown">
          <div>
            <h1>User List: </h1>
            <ul>{userComponents}</ul>
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
  padding-bottom: 5em;
  //   border: 1px solid blue;

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
    width: 100%;
    background-color: white;
    box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
      0 30px 60px -30px rgba(0, 0, 0, 0.3),
      inset 0 -2px 6px 0 rgba(10, 37, 64, 0.35);
  }
`;

export default UsersList;
