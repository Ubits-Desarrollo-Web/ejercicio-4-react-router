import React from "react";
import logo from "../assets/ubits_logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <Link to={"/"}>
          <img className="Logo" alt="ubits logo" src={logo} />
        </Link>
        <div className="NavBar-links">
          <Link to={"Sobre"}>
            Sobre este Ejercicio
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;