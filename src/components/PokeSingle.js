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
        <h3>{this.props.params.pokesingle}</h3>Single Pokemon will be here.
        {/* use fetch to get the data, must use class component to get it
          Otherwise must use hooks. If using hooks, cannot use params. */}
        <img
          src={this.state.data.sprites?.other.dream_world.front_default}
          alt={this.state.data.name}
        />
      </div>
    );
  }
}

export default PokeSingle;
