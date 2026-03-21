import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Filters from "./Filters";
import HomeCards from "./HomeCards";
import Marque from "./Marque";
import Footer from "./Footer";
import SelectedCard from "../pages/HomeCards/SelectedCard";
import { X } from "lucide-react";
const Home = () => {
  const [selectedCard, setSelectedCard] = useState(false);

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
