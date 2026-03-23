import LPHeader from "./LPHeader";
import HeroSection from "./HeroSection";
import PropertiesByAreaSection from "./PropertiesByAreaSection";
import PropertiesByCatagory from "./PropertiesByCatagory";
import PropertiesForRent from "./PropertiesForRent";
import VacationPropSection from "./VacationPropSection";
import StatsSection from "./StatsSection";
import WhyChooseUs from "./WhyChooseUs";
import LPFooter from "./LPFooter";

const LandingPage = () => {
  return (
    <main
      className="bg-white w-full min-h-screen flex flex-col items-start justify-start"
      id="main-content"
    >
      <LPHeader />
      <HeroSection />
      <PropertiesByAreaSection />
      <PropertiesByCatagory />
      <PropertiesForRent />
      <VacationPropSection />
      <StatsSection />
      <WhyChooseUs />
      <LPFooter />
    </main>
  );
};

export default LandingPage;
