import React from "react";
import { Link } from "react-router-dom";
import PHeader from "../components/PHeader";
import PGFooter from "../components/PGFooter";

const AboutUs = () => {
  const stats = [
    { number: "500+", label: "Properties Sold", icon: "🏠" },
    { number: "200+", label: "Happy Clients", icon: "😊" },
    { number: "50+", label: "Expert Agents", icon: "👥" },
    { number: "15+", label: "Years Experience", icon: "⭐" }
  ];

  const values = [
    {
      icon: "🤝",
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in every transaction."
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for excellence in everything we do, from property listings to customer service."
    },
    {
      icon: "💎",
      title: "Quality",
      description: "We only list properties that meet our rigorous quality standards."
    },
    {
      icon: "❤️",
      title: "Customer Focus",
      description: "Our clients' needs are at the heart of every decision we make."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start">
      <PHeader />
      
      {/* Hero Section */}
      <section className="self-stretch bg-slate-900 h-[350px] flex flex-col items-center justify-center mix-blend-normal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        </div>
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
          {/* About Intro with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/png/property-image4@2x.png" 
                alt="Sapphire Developments Property" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
                <p className="text-white font-semibold text-lg">Luxury Living Redefined</p>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-primary-500 hover:border-2 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-[48px] mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-lg text-slate-300 leading-[28px]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-10 text-left border border-primary-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h2 className="text-3xl font-semibold text-slate-800 leading-[48px] mb-4">Our Mission</h2>
              <p className="text-xl text-slate-500 leading-[28px]">
                To provide exceptional real estate services that exceed our clients' expectations while maintaining the highest standards of professionalism and ethics.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 md:p-10 text-left border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🔭</span>
              </div>
              <h2 className="text-3xl font-semibold text-slate-800 leading-[48px] mb-4">Our Vision</h2>
              <p className="text-xl text-slate-500 leading-[28px]">
                To be the most trusted and preferred real estate partner in Texas, known for transforming dreams into addresses and setting new standards in the industry.
              </p>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Core Values</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                These values guide everything we do and define who we are as a company.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center border border-slate-200 hover:border-primary-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Office Location */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 text-center mb-20">
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl">📍</span>
            </div>
            <h2 className="text-3xl font-semibold text-slate-800 leading-[48px] mb-4">Visit Our Office</h2>
            <p className="text-xl text-slate-500 leading-[28px] mb-2">
              3411 Cummins ST, Houston, TX 77027
            </p>
            <p className="text-lg text-slate-400">
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let our expert team help you find the perfect property. Browse our listings or contact us today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/properties"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Browse Properties
              </Link>
              <Link
                to="/contact-us"
                className="inline-block bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-400 hover:scale-105 transition-all duration-300 shadow-lg border-2 border-white/30"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PGFooter />
    </div>
  );
};

export default AboutUs;
