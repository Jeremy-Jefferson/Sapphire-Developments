import { Link } from "react-router-dom";

const Navigation1 = () => {
  return (
    <nav
      className="m-0 shrink-0 flex flex-row items-center justify-center gap-[30px] text-center text-xl text-primary-900 font-body-large-400 lg:hidden"
      id="Nav1"
      NAV="1"
      aria-label="Main navigation"
    >
      <Link
        className="cursor-pointer text-decoration-none relative leading-[22px] font-semibold font-inherit text-darkslateblue hover:text-primary-600 transition-colors"
        id="HOME"
        to="/"
      >
        HOME
      </Link>
      <Link
        className="cursor-pointer text-decoration-none relative leading-[22px] font-normal text-slate-700 hover:text-slate-900 transition-colors"
        to="/about-us"
      >
        ABOUT US
      </Link>
      <Link
        className="cursor-pointer text-decoration-none relative leading-[22px] font-normal text-slate-700 hover:text-slate-900 transition-colors"
        to="/our-agents"
      >
        OUR AGENTS
      </Link>
      <Link
        className="cursor-pointer text-decoration-none relative leading-[22px] font-semibold text-slate-700 hover:text-primary-600 transition-colors"
        to="/properties"
      >
        PROPERTIES
      </Link>
      <Link
        className="cursor-pointer text-decoration-none relative leading-[22px] font-normal text-slate-700 hover:text-slate-900 transition-colors"
        to="/gallery"
      >
        GALLERY
      </Link>
      <Link
        className="cursor-pointer text-decoration-none relative leading-[22px] font-normal text-slate-700 hover:text-slate-900 transition-colors"
        to="/contact-us"
      >
        CONTACT US
      </Link>
      <Link
        to="/properties"
        className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ml-4"
        aria-label="Search for properties"
      >
        SEARCH
      </Link>
    </nav>
  );
};

export default Navigation1;
