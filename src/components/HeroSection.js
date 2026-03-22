import RentSale from "./RentSale";

const HeroSection = () => {
  return (
    <section
      className="self-stretch flex flex-col items-center justify-center py-20 md:py-32 px-4 bg-slate-900 relative overflow-hidden"
      id="Hero Section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl opacity-20"></div>

      <div
        className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-12 relative z-10"
        id="Hero Contents"
      >
        {/* Badge - Centered */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-white/80 text-sm font-medium">Trusted by 500+ Happy Homeowners</span>
        </div>

        {/* Header - Centered */}
        <header
          className="flex flex-col items-center justify-center text-center text-white font-header-heading-4 w-full"
          id="Find Your Dream Home"
        >
          <h1
            className="m-0 relative leading-tight font-bold text-4xl md:text-5xl lg:text-6xl text-center"
            id="Find Your Dream Home"
          >
            <span className="block text-center text-white">Find Your</span>
            <span className="block text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Dream Home</span>
          </h1>
          <p className="text-lg md:text-xl font-normal mt-6 text-slate-300 max-w-2xl leading-relaxed text-center mx-auto">
            Your dream home is just a click away. Search through thousands of properties to find the perfect home that fits your lifestyle.
          </p>
        </header>

        {/* RentSale - Centered */}
        <div className="w-full flex justify-center">
          <RentSale />
        </div>

        {/* Trust Indicators - Centered */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <div className="flex items-center gap-2 text-white/70">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">Free Property Valuation</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">Expert Guidance</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">0% Commission</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
