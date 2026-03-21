import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PropertiesGridView from "./components/PropertiesGridView";
import AboutUs from "./pages/AboutUs";
import OurAgents from "./pages/OurAgents";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/our-agents" element={<OurAgents />} />
      <Route path="/properties" element={<PropertiesGridView />} />
      <Route path="/properties-grid-view" element={<PropertiesGridView />} />
      <Route path="/rent" element={<PropertiesGridView />} />
      <Route path="/sale" element={<PropertiesGridView />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
