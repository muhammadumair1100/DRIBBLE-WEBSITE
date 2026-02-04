import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Filters from "./Filters";
import HomeCards from "./HomeCards";
import Marque from "./Marque";
import Footer from "./Footer";
import SelectedCard from "../pages/HomeCards/SelectedCard";
const Home = () => {
  const [selectedCard, setSelectedCard] = useState(false);
  console.log(selectedCard);
  // if (selectedCard) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "unset";
  // }

  return (
    <>
      {selectedCard && <SelectedCard onSelect={setSelectedCard} />}
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
