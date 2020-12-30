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
        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
      </li>
    );
  });

  return (
    <Container>
      <h1>User List: </h1>
      <ul>{userComponents}</ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 3em;
  padding-bottom: 8em;
  //   border: 1px solid blue;

  h1 {
    padding-left: 1em;
    font-family: monserrat;
  }

  ul {
    font-family: nunito;
    list-style: none;
  }
`;

export default UsersList;
