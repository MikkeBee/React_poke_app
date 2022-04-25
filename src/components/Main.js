import React from "react";
import Home from "./Home";
import FavList from "./FavList";
import Pokelist from "./PokeList";
import About from "./About";
import PokeSingle from "./PokeSingle";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokelist" element={<Pokelist />}>
          <Route path=":pokesingle" element={<PokeSingle />} />
        </Route>
        <Route path="/favlist" element={<FavList />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
