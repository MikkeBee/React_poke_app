import React from "react";
import { Link, Outlet } from "react-router-dom";

const Pokelist = () => {
  return (
    <div className="Pokelist">
      PokeList coming. <br></br>
      <Link to="pokesingle">Some cool link</Link>
      <Outlet />
    </div>
  );
};

export default Pokelist;
