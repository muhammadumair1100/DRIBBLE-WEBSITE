import React from "react";
import Navbar from "../../../../Home/Navbar";
import HeroSection from "./HeroSection";
import Dropdown from "../Dropdown/dropdown";
import CardsSection from "./CardsSection";
const BrowseProfiles = () => {
  return (
    <div className="relative">
      <Dropdown></Dropdown>
      <Navbar />
      <div className="pt-20"></div>
      <HeroSection />
      <CardsSection />
    </div>
  );
};

export default BrowseProfiles;
