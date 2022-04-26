import React from "react";
import { Link } from "react-router-dom";

const PokeCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
      <Link to={props.name}>See more</Link>
    </div>
  );
};

export default PokeCard;
