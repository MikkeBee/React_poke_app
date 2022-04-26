import "./index.css";
import React from "react";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import FavList from "./components/FavList";
import Pokelist from "./components/PokeList";
import About from "./components/About";
import PokeSingle from "./components/PokeSingle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favlist" element={<FavList />} />
          <Route path="pokelist" element={<Pokelist />} />
          <Route path="pokelist/:pokesingle" element={<PokeSingle />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
