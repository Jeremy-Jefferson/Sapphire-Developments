import LPHeader from "./LPHeader";
import HeroSection from "./HeroSection";
import PropertiesByAreaSection from "./PropertiesByAreaSection";
import PropertiesByCatagory from "./PropertiesByCatagory";
import PropertiesForRent from "./PropertiesForRent";
import VacationPropSection from "./VacationPropSection";
import ContactSection from "./ContactSection";
import LPFooter from "./LPFooter";

const LandingPage = () => {
  return (
    <main
      className="bg-white w-[1920px] h-[5096px] flex flex-col items-center justify-start"
      id="Landing Page"
    >
      <LPHeader />
      <HeroSection />
      <PropertiesByAreaSection />
      <PropertiesByCatagory />
      <PropertiesForRent />
      <VacationPropSection />
      <ContactSection />
      <LPFooter />
    </main>
  );
};

export default LandingPage;
