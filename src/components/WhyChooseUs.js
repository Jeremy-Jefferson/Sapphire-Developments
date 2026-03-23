import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const WhyChooseUs = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('why-choose-us');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Wide Range of Properties",
      description: "From luxury estates to affordable apartments, we have properties for every budget and lifestyle."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Competitive Pricing",
      description: "We offer the best deals in the market with transparent pricing and no hidden fees."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Guidance",
      description: "Our experienced agents guide you through every step of your property journey."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "We're always available to answer your questions and help you find your dream home."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Verified Listings",
      description: "All our properties are verified and meet our high standards of quality."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Easy Process",
      description: "Streamlined documentation and smooth transactions for a hassle-free experience."
    }
  ];

  return (
    <section 
      id="why-choose-us"
      className="self-stretch bg-white flex flex-col items-center justify-start py-[80px] px-[50px] gap-[60px] relative overflow-hidden"
    >
      {/* Background Decoration - Enhanced */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-[1200px] w-full relative z-10">
        {/* Section Header - Premium styling */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 bg-primary-50/80 backdrop-blur-sm px-4 py-2 rounded-full mb-5 ring-1 ring-primary-100">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            <span className="text-primary-600 text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight">Why Choose Us</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Discover the Sapphire Developments difference and find your perfect home with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms`, transitionDuration: '500ms' }}
            >
              <div className="feature-card-icon">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section - Premium styling */}
        <div className="cta-premium mt-16">
          <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Ready to Find Your Dream Home?</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
            Browse our extensive collection of properties and find the perfect one for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link
              to="/properties"
              className="btn-primary"
            >
              View Properties
            </Link>
            <Link
              to="/contact-us"
              className="btn-secondary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

export default WhyChooseUs;
