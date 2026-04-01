import { Link } from "react-router-dom";

const LPFooter = () => {
  return (
    <footer
      className="w-full bg-[#08122b] text-gray-300 mt-16"
      id="Footer"
      role="contentinfo"
      aria-label="Footer"
    >
      {/* Inner Container - Centered with max-width */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-14 lg:py-16">
        
        {/* Grid Layout - 4 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 w-full">
          
          {/* Column 1 - Contact Info */}
          <div className="w-full">
            <h3 className="text-white text-base font-semibold uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 text-slate-300 text-sm">
              <p className="leading-relaxed">3411 Cummins ST</p>
              <p className="leading-relaxed">Houston, TX 77027</p>
              <div className="w-full h-px bg-white/10 my-2"></div>
              <p className="flex items-center gap-2.5 hover:text-white transition-colors duration-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1-800-SAP-PHIRE
              </p>
              <p className="flex items-center gap-2.5 hover:text-white transition-colors duration-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@sapphiredev.com
              </p>
            </div>
          </div>
          
          {/* Column 2 - Navigation */}
          <div className="w-full" id="Navigation">
            <h3 className="text-white text-base font-semibold uppercase tracking-wider mb-5">
              Navigate
            </h3>
            <nav className="flex flex-col items-start gap-3" aria-label="Footer navigation">
              <Link to="/" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">Home</Link>
              <Link to="/about-us" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">About Us</Link>
              <Link to="/our-agents" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">Our Agents</Link>
              <Link to="/properties" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">Properties</Link>
              <Link to="/contact-us" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">Contact Us</Link>
            </nav>
          </div>
          
          {/* Column 3 - Properties */}
          <div className="w-full" id="Properties">
            <h3 className="text-white text-base font-semibold uppercase tracking-wider mb-5">
              Properties
            </h3>
            <nav className="flex flex-col items-start gap-3" aria-label="Property links">
              <Link to="/properties" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">For Sale</Link>
              <Link to="/rent" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">For Rent</Link>
              <Link to="/gallery" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">Gallery</Link>
            </nav>
          </div>
          
          {/* Column 4 - Legal */}
          <div className="w-full" id="Legal">
            <h3 className="text-white text-base font-semibold uppercase tracking-wider mb-5">
              Legal
            </h3>
            <nav className="flex flex-col items-start gap-3" aria-label="Legal links">
              <Link to="/" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">Terms of Services</Link>
              <Link to="/" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">Privacy Policy</Link>
              <Link to="/" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">Cookie Policy</Link>
            </nav>
          </div>
        </div>
        
        {/* Visual Divider */}
        <div className="w-full border-t border-white/10 mt-10 pt-6">
        </div>
        
        {/* Bottom Row - 3-Part Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          {/* Left - Designed & Built by */}
          <div className="text-slate-500 text-sm order-2 md:order-1">
            <span className="text-slate-400">Designed & Built by </span>
            <a 
              href="https://www.hungryghost.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Hungry Ghost DEV
            </a>
          </div>
          
          {/* Center - Social Icons */}
          <div className="flex items-center gap-3 order-1 md:order-2" aria-label="Social media links">
            <a
              href="https://www.linkedin.com/in/jeremyejefferson/" 
              rel="noopener noreferrer"
              target="_blank"
              className="p-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Visit our LinkedIn profile"
            >
              <svg className="w-4 h-4 text-slate-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/jeremy-jefferson" 
              rel="noopener noreferrer"
              target="_blank"
              className="p-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Visit our GitHub profile"
            >
              <svg className="w-4 h-4 text-slate-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          
          {/* Right - Copyright */}
          <div className="text-slate-500 text-sm text-center md:text-right order-3 md:order-3">
            <p>© 2026 Sapphire Developments. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LPFooter;
