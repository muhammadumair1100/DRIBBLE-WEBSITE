import React from "react";
import Navbar from "../../../Home/Navbar";
import Filters from "../../../Home/Filters";
import HomeCards from "../../../Home/HomeCards";
import Footer from "../../../Home/Footer";
import Marque from "../../../Home/Marque";
import { cards } from "./NoteWorthyCards";

const NewNoteWorthy = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-18"></div>
      <Filters />
      <HomeCards cards={cards} />
      <Marque />
      <Footer />
    </div>
  );
};

export default NewNoteWorthy;
