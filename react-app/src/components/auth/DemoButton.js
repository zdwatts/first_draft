import React from "react";
import { demo } from "../../services/auth";
import '../navbar.css'

const DemoButton = ({ setAuthenticated, authenticated }) => {
  const demoPress = async (e) => {
    await demo();
    setAuthenticated(true);
  };

  return authenticated ? "" : < button className="logout_button" onClick={demoPress} >Try It Out</button >;
};

export default DemoButton;