import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Filters from "./Filters";
import HomeCards from "./HomeCards";
import Marque from "./Marque";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Filters />
      <HomeCards />
      <Marque />
      <Footer />
    </div>
  );
};

export default Home;
