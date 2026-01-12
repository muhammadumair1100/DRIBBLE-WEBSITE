import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Website Home Pages Components
import Home from "./components/Home/Home";

// Website Navbar Pages Components
// Explore and Filter Pages
import Popular from "./components/pages/NavbarMenuItem/ExplorePages/Popular";
import NewNoteWorthy from "./components/pages/NavbarMenuItem/ExplorePages/NewNoteWorthy";
import ProductDesign from "./components/pages/NavbarMenuItem/ExplorePages/ProductDesign";
import WebDesign from "./components/pages/NavbarMenuItem/ExplorePages/WebDesign";
import Animation from "./components/pages/NavbarMenuItem/ExplorePages/Animation";
import Branding from "./components/pages/NavbarMenuItem/ExplorePages/Branding";
import Illustration from "./components/pages/NavbarMenuItem/ExplorePages/Illustration";
import Mobile from "./components/pages/NavbarMenuItem/ExplorePages/Mobile";
import Print from "./components/pages/NavbarMenuItem/ExplorePages/Print";
import Typography from "./components/pages/NavbarMenuItem/ExplorePages/Typography";

// signup & login pages
import Signup from "./components/pages/SignupLogin/Signup";

// HireTalent Pages
import StartProjectBrief from "./components/pages/NavbarMenuItem/HireTalent/StartProjectBrief";
import BrowseProfiles from "./components/pages/NavbarMenuItem/HireTalent/browseprofiles/BrowseProfiles";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Navbar Explore Items & Filter Items Pages */}
          <Route path="/" element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="noteworthy" element={<NewNoteWorthy />} />
          <Route path="discover" element={<Popular />} />
          <Route path="/product-design" element={<ProductDesign />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/illustration" element={<Illustration />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/print" element={<Print />} />
          <Route path="/typography" element={<Typography />} />

          {/* signup & login pages  */}
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
