import { Link } from "react-router-dom";
import RentSale from "./RentSale";

const HeroSection = () => {
  return (
    <section
      className="self-stretch flex flex-col items-center justify-center py-20 md:py-32 px-4 bg-slate-900 relative overflow-hidden"
      id="Hero Section"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern - Subtle premium texture */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Premium Ambient Lighting */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/80 pointer-events-none"></div>
      
      {/* Enhanced Gradient Orbs - Layered depth */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-15"></div>
      {/* Additional accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/40 rounded-full blur-[140px] opacity-40"></div>
      
      {/* Floating Property Cards Animation */}
      <div className="absolute top-1/4 right-10 hidden xl:block opacity-20">
        <div className="w-48 h-32 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 p-2 transform rotate-6 animate-float">
          <div className="w-full h-full bg-slate-700/50 rounded-lg"></div>
        </div>
      </div>
      <div className="absolute bottom-1/3 left-10 hidden xl:block opacity-15">
        <div className="w-40 h-28 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 p-2 transform -rotate-3 animate-float-delayed">
          <div className="w-full h-full bg-slate-700/50 rounded-lg"></div>
        </div>
      </div>

      <div
        className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-12 relative z-10"
        id="Hero Contents"
      >
        {/* Badge - Centered - Premium styling with subtle glow */}
        <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer group ring-1 ring-white/10 hover:ring-white/25">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/60"></span>
          <span className="text-white/90 text-sm font-medium tracking-wide">Trusted by 500+ Happy Homeowners</span>
        </div>

        {/* Header - Centered - Enhanced hierarchy */}
        <h1
          className="m-0 relative leading-[1.1] font-bold text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] text-center text-white tracking-tight"
          id="hero-heading"
        >
          Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-white to-blue-400 animate-gradient">Dream Home</span>
        </h1>
        <p className="text-lg md:text-xl font-normal mt-4 md:mt-6 text-slate-400 max-w-2xl leading-relaxed text-center mx-auto">
          Your dream home is just a click away. Search through thousands of properties to find the perfect home that fits your lifestyle.
        </p>

        {/* RentSale - Centered - Now with glow effect */}
        <div className="w-full flex justify-center search-panel-glow">
          <RentSale />
        </div>

        {/* Trust Indicators - Centered - Improved spacing */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
          <div className="flex items-center gap-2.5 text-white/70 hover:text-white transition-all duration-300 cursor-pointer group">
            <div className="p-1.5 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-medium">Free Property Valuation</span>
          </div>
          <div className="flex items-center gap-2.5 text-white/70 hover:text-white transition-all duration-300 cursor-pointer group">
            <div className="p-1.5 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-medium">Expert Guidance</span>
          </div>
          <div className="flex items-center gap-2.5 text-white/70 hover:text-white transition-all duration-300 cursor-pointer group">
            <div className="p-1.5 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-medium">0% Commission</span>
          </div>
        </div>
        
        {/* Quick Links - Enhanced buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Link
            to="/properties"
            className="btn-primary btn-primary-lg group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Browse Properties
          </Link>
          <Link
            to="/contact-us"
            className="btn-secondary group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
