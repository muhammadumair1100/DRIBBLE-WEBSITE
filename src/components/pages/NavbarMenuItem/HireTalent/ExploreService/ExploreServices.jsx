import React from "react";
import HeroSection from "../BrowseProfiles/HeroSection";
import Navbar from "../../../../Home/Navbar";
import CardSection from "./CardSection";

export default function ExploreServices() {
  const propData = {
    heading: "Explore Services",
    headingPara:
      "Hire designers offering design services for your next project.",
    items: [
      "landing page",
      "logo desing",
      "mobile app",
      "web design",
      "development",
      "branding",
      "social media",
      "ecommerce",
      "illustration",
      "animation",
    ],
    categories: [
      "Categories",
      "Tags",
      "Price",
      "Delivery Time",
      "Designer Filter",
    ],
    fCategories: [
      "Logo & Branding",
      "Web Design",
      "Illustration",
      "Product Design",
      "Animation",
      "Typography",
      "Print Design",
    ],
  };

  return (
    <>
      <Navbar />
      <div className="pt-20"></div>
      <HeroSection propData={propData} />
      <CardSection />
    </>
  );
}
