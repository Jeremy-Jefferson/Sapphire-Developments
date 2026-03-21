import Contact from "./Contact";
import { Link } from "react-router-dom";

const LPFooter = () => {
  return (
    <section
      className="self-stretch bg-slate-900 flex flex-row items-start justify-start p-[50px] md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col"
      id="Footer"
    >
      <footer className="flex-1 shrink-0 flex flex-row items-start justify-between mix-blend-normal text-left text-5xl text-gray-300 font-header-heading-4 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
        <Contact />
        <div
          className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px] mix-blend-normal"
          id="Features"
        >
          <h3
            className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit text-white"
            id="Features"
          >
            Features
          </h3>
          <article className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-left text-5xl text-gray-400 font-header-heading-4">
            <Link to="/" className="relative leading-[24px] text-gray-400 hover:text-white no-underline transition-colors">Home</Link>
            <Link to="/properties" className="relative leading-[24px] text-gray-400 hover:text-white no-underline transition-colors">Properties</Link>
            <Link to="/gallery" className="relative leading-[24px] text-gray-400 hover:text-white no-underline transition-colors">Gallery</Link>
            <Link to="/contact-us" className="relative leading-[24px] text-gray-400 hover:text-white no-underline transition-colors">Contact</Link>
          </article>
        </div>
        <div
          className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px] mix-blend-normal"
          id="Company"
        >
          <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mix-blend-normal text-white">
            Company
          </h3>
          <article className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] mix-blend-normal text-left text-5xl text-gray-400 font-header-heading-4">
            <Link to="/about-us" className="relative leading-[24px] text-gray-400 hover:text-white no-underline transition-colors">About Us</Link>
            <Link to="/our-agents" className="relative leading-[24px] text-gray-400 hover:text-white no-underline transition-colors">Our Agents</Link>
            <Link to="/contact-us" className="relative leading-[24px] text-gray-400 hover:text-white no-underline transition-colors">Contact</Link>
            <Link to="/properties" className="relative leading-[24px] text-gray-400 hover:text-white no-underline transition-colors">Careers</Link>
          </article>
        </div>
        <div
          className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px] mix-blend-normal"
          id="Terms and Policies"
        >
          <h3
            className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mix-blend-normal text-white"
            id={`Team & Policies`}
          >
            Team and policies
          </h3>
          <article className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] mix-blend-normal text-left text-5xl text-gray-400 font-header-heading-4">
            <Link to="/" className="relative leading-[24px] mix-blend-normal text-gray-400 hover:text-white no-underline transition-colors">Terms of Services</Link>
            <Link to="/" className="relative leading-[24px] mix-blend-normal text-gray-400 hover:text-white no-underline transition-colors">Privacy Policy</Link>
            <Link to="/" className="relative leading-[24px] mix-blend-normal text-gray-400 hover:text-white no-underline transition-colors">Security</Link>
          </article>
        </div>
      </footer>
    </section>
  );
};

export default LPFooter;
