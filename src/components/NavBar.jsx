import React from "react";
import logo from "../assets/ubits_logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
          <img className="Logo" alt="ubits logo" src={logo} />
        <div className="NavBar-links">
          {/*Links aqui*/}
        </div>
      </div>
    </>
  );
};

export default NavBar;