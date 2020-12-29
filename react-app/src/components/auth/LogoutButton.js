import React from "react";
import { logout } from "../../services/auth";
import '../navbar.css'

const LogoutButton = ({setAuthenticated, authenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  console.log(authenticated)

  return <button className="logout_button" onClick={onLogout}>{LogoutButton ? 'Logout' : 'Demo'}</button>;
};

export default LogoutButton;
