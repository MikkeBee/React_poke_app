import React, { Component } from "react";

class PokeSingle extends Component {
  state = {
    data: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data, isLoading: false }));
  }

  render() {
    return (
      <div>
        <h3>{this.props.params.pokesingle}</h3>
        {/* use fetch to get the data, must use class component to get it
          Otherwise must use hooks. If using hooks, cannot use params. */}
        <div className="pokecardCard">
          <div className="pokecardImg">
            <img
              src={this.state.data.sprites?.other.dream_world.front_default}
              alt={this.state.data.name}
            />
          </div>
          {/* <p>{this.state.data.types.map((pokeType) => pokeType.type.name)}</p> */}
          <div className="pokecardDetails">
            <p>Base XP: {this.state.data.base_experience}</p>
            <p>Height: {this.state.data.height}</p>
            <p>Weight: {this.state.data.weight}</p>
            <p>
              Type:{" "}
              {this.state.data.types
                ?.map((pokeType) => pokeType.type.name)
                .join(", ")}
            </p>
            <p>
              Abilities:{" "}
              {this.state.data.abilities
                ?.map((pokeType) => pokeType.ability.name)
                .join(", ")}
            </p>
          </div>
          <div className="pokecardStats">
            {this.state.data.stats?.map((item) => {
              return (
                <p>
                  {item.stat.name}: {item.base_stat}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PokeSingle;
