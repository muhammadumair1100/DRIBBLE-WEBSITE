import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Filters from "./Filters";
import HomeCards from "./HomeCards";
import Marque from "./Marque";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Filters />
      <HomeCards />
      <Marque />
      <Footer />
    </>
  );
};

export default Home;
