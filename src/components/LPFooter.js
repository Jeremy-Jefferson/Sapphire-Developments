import Logo from "./Logo";
import { Link } from "react-router-dom";

const LPFooter = () => {
  return (
    <footer
      className="self-stretch bg-slate-900 flex flex-col items-center justify-start p-8 md:p-12 lg:p-16 box-border text-center text-gray-300 font-header-heading-4"
      id="Footer"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Logo - Top Left */}
        <div className="mb-10">
          <Logo />
        </div>
        
        {/* Main Footer Content - Full Width Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 w-full">
          {/* Column 1 - Contact */}
          <div className="flex flex-col items-start text-left">
            <h3 className="m-0 text-white text-lg font-semibold uppercase tracking-wide mb-4">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              <p>3411 Cummins ST</p>
              <p>Houston, TX 77027</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: info@sapphire.com</p>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div className="flex flex-col items-start text-left" id="Quick Links">
            <h3 className="m-0 text-white text-lg font-semibold uppercase tracking-wide mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col items-start gap-2" aria-label="Footer navigation">
              <Link to="/" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Home</Link>
              <Link to="/properties" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Properties</Link>
              <Link to="/about-us" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">About Us</Link>
              <Link to="/contact-us" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Contact</Link>
            </nav>
          </div>
          
          {/* Column 3 - Properties */}
          <div className="flex flex-col items-start text-left" id="Properties">
            <h3 className="m-0 text-white text-lg font-semibold uppercase tracking-wide mb-4">
              Properties
            </h3>
            <nav className="flex flex-col items-start gap-2" aria-label="Property links">
              <Link to="/properties" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">For Sale</Link>
              <Link to="/rent" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">For Rent</Link>
              <Link to="/gallery" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Gallery</Link>
              <Link to="/our-agents" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Our Agents</Link>
            </nav>
          </div>
          
          {/* Column 4 - Legal */}
          <div className="flex flex-col items-start text-left" id="Legal">
            <h3 className="m-0 text-white text-lg font-semibold uppercase tracking-wide mb-4">
              Legal
            </h3>
            <nav className="flex flex-col items-start gap-2" aria-label="Legal links">
              <Link to="/" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Terms of Services</Link>
              <Link to="/" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Privacy Policy</Link>
              <Link to="/" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Cookie Policy</Link>
              <Link to="/" className="text-gray-400 hover:text-white no-underline transition-colors text-sm">Accessibility</Link>
            </nav>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-slate-700 mb-8"></div>
        
        {/* Bottom Bar - Social & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          {/* Social Links - Only LinkedIn and GitHub */}
          <div className="flex items-center gap-3" aria-label="Social media links">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jeremyejefferson/" 
              rel="noopener noreferrer"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-primary-500 hover:scale-110 transition-all duration-300 inline-flex items-center justify-center"
              aria-label="Visit our LinkedIn profile"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/jeremy-jefferson" 
              rel="noopener noreferrer"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-primary-500 hover:scale-110 transition-all duration-300 inline-flex items-center justify-center"
              aria-label="Visit our GitHub profile"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
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

export default LPFooter;
