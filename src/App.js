import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load pages for better performance
const LandingPage = lazy(() => import("./components/LandingPage"));
const PropertiesGridView = lazy(() => import("./components/PropertiesGridView"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const OurAgents = lazy(() => import("./pages/OurAgents"));
const Gallery = lazy(() => import("./pages/Gallery"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <ScrollToTop />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
