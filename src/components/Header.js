import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import pokelogo from "../assets/images/pokelogo.png";

const Header = () => {
  return (
    <header className="Header">
      <div>
        <Link to="/">
          <img src={pokelogo} />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
