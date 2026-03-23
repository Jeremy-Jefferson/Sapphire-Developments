import { Link } from "react-router-dom";

const Navigation2 = () => {
  return (
    <nav
      className="m-0 shrink-0 flex flex-row items-center justify-center gap-[30px] text-center text-xl text-primary-900 font-body-large-400 lg:hidden"
      id="Nav2"
      aria-label="Main navigation"
    >
      <Link
        className="cursor-pointer text-decoration-none relative leading-[22px] text-slate-700 hover:text-slate-900 transition-colors"
        id="HOME"
        to="/"
      >
        HOME
      </Link>
      <Link
        className="cursor-pointer text-decoration-none relative leading-[22px] text-slate-700 hover:text-slate-900 transition-colors"
        to="/about-us"
      >
        ABOUT US
      </Link>
      <Link
        className="cursor-pointer text-decoration-none relative leading-[22px] text-slate-700 hover:text-slate-900 transition-colors"
        to="/our-agents"
      >
        OUR AGENTS
      </Link>
      <Link
        className="cursor-pointer text-decoration-none relative leading-[22px] font-semibold text-primary-600 hover:text-primary-700 transition-colors"
        id="PROPERTIES"
        to="/properties"
      >
        PROPERTIES
      </Link>
      <Link
        className="cursor-pointer text-decoration-none relative leading-[22px] text-slate-700 hover:text-slate-900 transition-colors"
        to="/contact-us"
      >
        CONTACT US
      </Link>
      <div className="ml-4">
        <div className="relative">
          <input 
            type="search" 
            placeholder="SEARCH" 
            className="w-48 pl-4 pr-10 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            aria-label="Search properties"
          />
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navigation2;
