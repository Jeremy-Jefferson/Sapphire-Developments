import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const SharedHeader = ({ variant = "solid" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine background style based on variant and scroll
  const getHeaderStyle = () => {
    if (variant === "transparent" && !isScrolled && isHome) {
      return "bg-transparent";
    }
    if (variant === "transparent" && isScrolled) {
      return "bg-white/95 backdrop-blur-md shadow-sm";
    }
    return "bg-white shadow-sm";
  };

  const getTextColor = () => {
    if (variant === "transparent" && !isScrolled && isHome) {
      return "text-white";
    }
    return "text-slate-700";
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderStyle()}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            {variant === "transparent" && !isScrolled && isHome ? (
              <img 
                src="/png/logo@2x.png" 
                alt="Sapphire Developments" 
                className="h-12 w-auto brightness-0 invert"
              />
            ) : (
              <img 
                src="/png/logo@2x.png" 
                alt="Sapphire Developments" 
                className="h-12 w-auto"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-6 xl:gap-8 ${getTextColor()}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide relative group ${
                  isActive(link.path) 
                    ? "text-primary-500" 
                    : `hover:text-primary-500 ${variant === "transparent" && !isScrolled && isHome ? "text-white/90" : ""}`
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <Link
              to="/properties"
              className="ml-4 px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              SEARCH
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className={`w-6 h-6 ${getTextColor()}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <nav className="px-6 py-4 border-t border-slate-100">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 text-slate-700 font-medium border-b border-slate-50 hover:text-primary-600 transition-colors ${
                isActive(link.path) ? "text-primary-500" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/properties"
            className="block mt-4 text-center bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Search Properties
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default SharedHeader;