import React from "react";
import PHeader from "../components/PHeader";
import PGFooter from "../components/PGFooter";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start">
      <PHeader />
      
      {/* Hero Section */}
      <section className="self-stretch bg-slate-900 h-[350px] flex flex-col items-center justify-center mix-blend-normal relative">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-6xl font-semibold text-white font-body-large-400 leading-[48px]">
            About Us
          </h1>
          <p className="text-xl text-slate-300 mt-4 font-body-large-400 leading-[28px]">
            Discover the story behind Sapphire Developments
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px] text-center text-primary-800 font-body-large-400">
        <div className="w-full max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-left">
              <h2 className="text-3xl font-semibold text-slate-800 leading-[48px] mb-6">
                Welcome to Sapphire Developments
              </h2>
              <p className="text-xl text-slate-500 leading-[28px] mb-4">
                At Sapphire Developments, we believe that a home is more than just a place to live—it's where memories are made and dreams come true. With years of experience in the real estate industry, we are committed to providing exceptional properties that meet the diverse needs of our clients.
              </p>
              <p className="text-xl text-slate-500 leading-[28px] mb-4">
                Our team of dedicated professionals works tirelessly to ensure that every property we list meets our high standards of quality and excellence. From luxury estates to cozy apartments, we have something for everyone.
              </p>
              <p className="text-xl text-slate-500 leading-[28px]">
                We pride ourselves on our transparency, integrity, and customer-focused approach. Let us help you find your perfect property today.
              </p>
            </div>
            <div className="bg-slate-100 h-[400px] rounded-lg flex items-center justify-center">
              <span className="text-slate-400 text-xl leading-[28px]">About Us Image</span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-lg border border-slate-200">
              <h3 className="text-4xl font-semibold text-primary-600 leading-[48px]">500+</h3>
              <p className="text-xl text-slate-500 leading-[28px] mt-2">Properties Sold</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-slate-200">
              <h3 className="text-4xl font-semibold text-primary-600 leading-[48px]">200+</h3>
              <p className="text-xl text-slate-500 leading-[28px] mt-2">Happy Clients</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-slate-200">
              <h3 className="text-4xl font-semibold text-primary-600 leading-[48px]">50+</h3>
              <p className="text-xl text-slate-500 leading-[28px] mt-2">Expert Agents</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-slate-200">
              <h3 className="text-4xl font-semibold text-primary-600 leading-[48px]">15+</h3>
              <p className="text-xl text-slate-500 leading-[28px] mt-2">Years Experience</p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-800 leading-[48px] mb-6">Our Mission</h2>
            <p className="text-xl text-slate-500 leading-[28px] max-w-3xl mx-auto">
              To provide exceptional real estate services that exceed our clients' expectations while maintaining the highest standards of professionalism and ethics.
            </p>
          </div>

          {/* Office Location */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-semibold text-slate-800 leading-[48px] mb-6">Visit Our Office</h2>
            <p className="text-xl text-slate-500 leading-[28px]">
              3411 Cummins ST, Houston, TX 77027
            </p>
          </div>
        </div>
      </section>

      <PGFooter />
    </div>
  );
};

export default AboutUs;
