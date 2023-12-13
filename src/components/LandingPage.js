import LPHeader from "./LPHeader";
import HeroSection from "./HeroSection";
import PropertiesByAreaSection from "./PropertiesByAreaSection";
import PropertiesByCatagory from "./PropertiesByCatagory";
import PropertiesForRent from "./PropertiesForRent";
import VacationPropSection from "./VacationPropSection";
import ContactSection from "./ContactSection";
import LPFooter from "./LPFooter";
import { css } from "@emotion/css";

const LandingPage = () => {
  return (
    <main
      className={css`
        background-color: var(--color-white);
        width: 1920px;
        height: 5096px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      `}
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
