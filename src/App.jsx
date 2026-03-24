import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { X } from "lucide-react";
// Website Home Pages Components
import Home from "./components/Home/Home";
// signup & login pages
import Signup from "./components/pages/SignupLogin/Signup";
import Shots from "./components/Home/Shots";

import SelectedCard from "./components/pages/HomeCards/SelectedCard";
import ForDesigners from "./components/pages/FooterPagess/ForDesigners/ForDesigners";
import Services from "./components/pages/HeroSection/Search";
import SearchProvider from "./context/SearchProvider";

// HireTalent Pages
import StartProjectBrief from "./components/pages/NavbarMenuItem/HireTalent/StartProjectBrief/StartProjectBriefs.jsx";
import BrowseProfiles from "./components/pages/NavbarMenuItem/HireTalent/BrowseProfiles/BrowseProfile.jsx";
import ExploreServices from "./components/pages/NavbarMenuItem/HireTalent/ExploreService/ExploreServices.jsx";

const App = () => {
  return (
    <SearchProvider>
      <BrowserRouter>
        <div>
          <Routes>
            {/* Navbar Explore Items & Filter Items Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/shots/:id" element={<Shots />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Signup />} />

            {/* for hero section  */}
            <Route path="/search/:id" element={<Services />}></Route>
            <Route path="/designers/:id" element={<BrowseProfiles />} />

            {/* for home cards  */}
            <Route path="/shots/:source/:id" element={<SelectedCard />} />
            {/* Navbar HireTalent ItemsPages */}
            <Route path="/instantmatch" element={<StartProjectBrief />} />
            <Route path="/designers" element={<BrowseProfiles />} />
            <Route path="/services" element={<ExploreServices />} />

            {/* Footer Pages  */}
            <Route path="/for-designers" element={<ForDesigners />} />
          </Routes>
        </div>
      </BrowserRouter>
    </SearchProvider>
  );
};

export default App;
