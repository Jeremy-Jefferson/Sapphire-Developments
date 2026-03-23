import { Link, useLocation } from "react-router-dom";

const Navigation1 = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "OUR AGENTS", path: "/our-agents" },
    { name: "PROPERTIES", path: "/properties" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  return (
    <nav
      className="m-0 shrink-0 flex flex-row items-center justify-center gap-4 xl:gap-[30px] text-center text-base xl:text-xl text-primary-900 font-body-large-400"
      id="Nav1"
      NAV="1"
      aria-label="Main navigation"
    >
      {navLinks.map((link) => (
        <Link
          key={link.path}
          className={`cursor-pointer text-decoration-none relative leading-[22px] font-semibold font-inherit transition-all duration-300 whitespace-nowrap ${
            isActive(link.path) 
              ? 'text-primary-600' 
              : 'text-slate-700 hover:text-primary-600'
          }`}
          id={link.name}
          to={link.path}
        >
          {link.name}
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0'}`}></span>
        </Link>
      ))}
      <Link
        to="/properties"
        className="px-4 xl:px-6 py-2 xl:py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ml-2 xl:ml-4"
        aria-label="Search for properties"
      >
        SEARCH
      </Link>
    </nav>
  );
};

export default Navigation1;
