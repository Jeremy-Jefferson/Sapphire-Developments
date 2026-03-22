import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ variant = "landing" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Our Agents", path: "/our-agents" },
    { name: "Properties", path: "/properties" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <div className="lg:hidden relative">
      {/* Hamburger Button */}
      <button
        className="flex flex-col justify-center items-center w-10 h-10 p-2 bg-transparent border-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span 
          className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
        ></span>
        <span 
          className={`block w-6 h-0.5 bg-slate-800 my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
        ></span>
        <span 
          className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu Dropdown */}
      <div 
        id="mobile-menu"
        className={`absolute top-full right-0 w-64 bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 z-50 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col" role="navigation" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="px-6 py-4 text-slate-700 hover:bg-primary-50 hover:text-primary-600 font-medium border-b border-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className="p-4 bg-slate-50">
            <Link
              to="/properties"
              className="block w-full text-center bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
              onClick={closeMenu}
            >
              Search Properties
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
