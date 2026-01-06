import React from "react";
import Home from "./components/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Popular from "./components/pages/NavbarMenuItem/Popular";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="popular" element={<Popular />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
