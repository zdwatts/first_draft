import React from "react";
const DefaultHome = ({ setAuthenticated, authenticated }) => {
    return authenticated ? <h1>Logged in</h1> : <h1>Logged out</h1>;
};

export default DefaultHome;
