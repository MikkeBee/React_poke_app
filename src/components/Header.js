import React from "react";
import Nav from "./Nav";
import pokelogo from "../assets/images/pokelogo.png";

const Header = () => {
  return (
    <header className="Header">
      <div>
        <img src={pokelogo} />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
