import LandingPage from "./components/LandingPage";
import PropertiesGridView from "./components/PropertiesGridView";

function App() {
  const path = window.location.pathname;

  if (path === "/properties-grid-view") {
    return <PropertiesGridView />;
  }

  return <LandingPage />;
}

export default App;
