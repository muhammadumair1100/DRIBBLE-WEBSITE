import React from "react";
import Navbar from "../../../../Home/Navbar";
import HeroSection from "./HeroSection";
import Dropdown from "../Dropdown/Dropdown.jsx";
import CardsSection from "./CardsSection";
import Marque from "../../../../Home/Marque.jsx";
import Footer from "../../../../Home/Footer.jsx";

const BrowseProfiles = () => {
  return (
    <div className="relative">
      <Dropdown></Dropdown>
      <Navbar />
      <div className="pt-20"></div>
      <HeroSection />
      <CardsSection />
      <Marque />
      <Footer></Footer>
    </div>
  );
};

export default BrowseProfiles;
