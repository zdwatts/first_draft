import React from "react";
import { logout } from "../../services/auth";
import '../navbar.css'

const LogoutButton = ({ setAuthenticated, authenticated }) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return authenticated ? < button className="logout_button" onClick={onLogout} > {authenticated ? 'Logout' : 'Login'}</button > : "";
};

export default LogoutButton;
