import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Website Home Pages Components
import Home from "./components/Home/Home";
// signup & login pages
import Signup from "./components/pages/SignupLogin/Signup";
import Shots from "./components/Home/Shots";
// HireTalent Pages
import StartProjectBrief from "./components/pages/NavbarMenuItem/HireTalent/startProjectBrief/StartProjectBrief";
import BrowseProfiles from "./components/pages/NavbarMenuItem/HireTalent/browseprofiles/BrowseProfiles";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Navbar Explore Items & Filter Items Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/shots/:id" element={<Shots />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signup />} />
          {/* Navbar HireTalent ItemsPages */}
          <Route path="/start-project-brief" element={<StartProjectBrief />} />
          <Route path="/browse-profiles" element={<BrowseProfiles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
