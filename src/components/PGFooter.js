import Contact2 from "./Contact2";
import { Link } from "react-router-dom";

const PGFooter = () => {
  return (
    <footer
      className="self-stretch bg-slate-900 flex flex-col items-center justify-start p-8 md:p-12 lg:p-16 box-border text-center text-gray-300 font-header-heading-4"
      id="Footer"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Footer Content - Centered Horizontal Layout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-center gap-10 lg:gap-16 xl:gap-20 mb-12">
          {/* Column 1 - Contact */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[200px]">
            <Contact2 />
          </div>
          
          {/* Column 2 - Features */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[140px]" id="Features">
            <h3 className="m-0 text-white text-lg font-semibold uppercase tracking-wide mb-4">
              Features
            </h3>
            <nav className="flex flex-col items-center lg:items-start gap-2" aria-label="Footer navigation">
              <Link to="/" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Home</Link>
              <Link to="/properties" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Properties</Link>
              <Link to="/gallery" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Gallery</Link>
              <Link to="/contact-us" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Contact</Link>
            </nav>
          </div>
          
          {/* Column 3 - Company */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[140px]" id="Company">
            <h3 className="m-0 text-white text-lg font-semibold uppercase tracking-wide mb-4">
              Company
            </h3>
            <nav className="flex flex-col items-center lg:items-start gap-2" aria-label="Company links">
              <Link to="/about-us" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">About Us</Link>
              <Link to="/our-agents" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Our Agents</Link>
              <Link to="/contact-us" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Contact</Link>
              <Link to="/properties" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Careers</Link>
            </nav>
          </div>
          
          {/* Column 4 - Policies */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[140px]" id="Terms and Policies">
            <h3 className="m-0 text-white text-lg font-semibold uppercase tracking-wide mb-4">
              Policies
            </h3>
            <nav className="flex flex-col items-center lg:items-start gap-2" aria-label="Legal links">
              <Link to="/" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Terms of Services</Link>
              <Link to="/" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Privacy Policy</Link>
              <Link to="/" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Security</Link>
            </nav>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-slate-700 mb-8"></div>
        
        {/* Bottom Bar - Social & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-3" aria-label="Social media links">
            <a
              href="https://www.linkedin.com/in/jeremyejefferson/" 
              rel="noopener noreferrer"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors inline-flex items-center justify-center"
              aria-label="Visit our LinkedIn profile"
            >
              <img
                className="w-5 h-5 object-contain"
                alt="LinkedIn"
                src="/svg/vector11.svg"
              />
            </a>
            <a
              href="https://github.com/jeremy-jefferson" 
              rel="noopener noreferrer"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors inline-flex items-center justify-center"
              aria-label="Visit our GitHub profile"
            >
              <img
                className="w-5 h-5 object-contain"
                alt="GitHub"
                src="/png/github2@2x.png"
              />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} Sapphire Developments. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PGFooter;
