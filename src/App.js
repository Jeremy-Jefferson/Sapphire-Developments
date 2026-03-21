import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PropertiesGridView from "./components/PropertiesGridView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/properties-grid-view" element={<PropertiesGridView />} />
      <Route path="/properties" element={<PropertiesGridView />} />
      <Route path="/rent" element={<PropertiesGridView />} />
      <Route path="/sale" element={<PropertiesGridView />} />
    </Routes>
  );
}

export default App;
