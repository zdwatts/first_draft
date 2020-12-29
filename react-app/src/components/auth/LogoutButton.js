import React from "react";
import { logout } from "../../services/auth";
import '../navbar.css'

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return <button className="logout_button" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
