import React, { Component } from "react";
import PokeCard from "./PokeCard";
import { Link, Outlet } from "react-router-dom";

class PokeList extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((poke) => {
          return fetch(poke.url).then((res) => res.json());
        });
        Promise.all(fetches).then((res) => {
          console.log(res);
          this.setState({ data: res, isLoading: false });
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="Pokelist">
        {this.state.data.map((poke) => (
          <PokeCard
            name={poke.name}
            key={poke.name}
            id={poke.id}
            img={poke.sprites.other.dream_world.front_default}
          ></PokeCard>
        ))}
      </div>
    );
  }
}

export default PokeList;
