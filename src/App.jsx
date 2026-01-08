import React from "react";
import Home from "./components/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popular from "./components/pages/NavbarMenuItem/Popular";
import NewNoteWorthy from "./components/pages/NavbarMenuItem/NewNoteWorthy";
import ProductDesign from "./components/pages/NavbarMenuItem/ProductDesign";
import WebDesign from "./components/pages/NavbarMenuItem/WebDesign";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="noteworthy" element={<NewNoteWorthy />} />
          <Route path="product-design" element={<ProductDesign />} />
          <Route path="web-design" element={<WebDesign />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
