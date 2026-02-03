import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Filters from "./Filters";
import HomeCards from "./HomeCards";
import Marque from "./Marque";
import Footer from "./Footer";
import SelectedCard from "./SelectedCard";

const Home = () => {
  const [selectedCard, setSelectedCard] = useState(false);
  console.log(selectedCard);
  return (
    <>
      {selectedCard && <SelectedCard />}
      <Navbar />
      <Hero />
      <Filters />
      <HomeCards onSelect={setSelectedCard} />
      <Marque />
      <Footer />
    </>
  );
};

export default Home;
