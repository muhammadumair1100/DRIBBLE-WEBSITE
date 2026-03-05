import React from "react";
import Navbar from "../../../Home/Navbar";
import HeroSection from "./HeroSection";
import PabloStory from "./PabloStory";
import MillionDesigners from "./MillionDesigners";
import VideoText from "./VideoText";
import StartExploring from "./StartExploring";
import Footer from "../../../Home/Footer";
import Marque from "../../../Home/Marque";

const ForDesigners = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MillionDesigners />
      <PabloStory />
      <VideoText
        videoSrc="https://framerusercontent.com/assets/uDOjytXP7GZfVU2PY1UZ7J0YPlE.mp4"
        title="Build your portfolio"
        para1="Showcase your design work and start building your audience."
        para2="What have you been working on? Show the world. Sharing your design work on Dribbble helps you attract hiring managers, business owners, and recruiters who may want to hire you. Upload your latest project work now!"
        btn="Share work"
        reverse={true}
      />
      <VideoText
        videoSrc="https://framerusercontent.com/assets/7z4pSWWkwhVFcjpXfauIBPdeE.mp4"
        title="Find work"
        para1="Browse design jobs and find your next career opportunity."
        para2="Some of the world’s best design-forward companies including Apple, Airbnb, IDEO, Meta, Google, Shopify and tens of thousands more hire creatives on  . Find your next project today!"
        btn="View job board"
      />
      <StartExploring />
      <Marque />
      <Footer />
    </div>
  );
};

export default ForDesigners;
