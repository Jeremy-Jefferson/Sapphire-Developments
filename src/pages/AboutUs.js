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

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/png/ellipse-1@2x.png",
      bio: "With over 15 years in real estate, Sarah founded Sapphire Developments with a vision to transform how people find their dream homes."
    },
    {
      name: "Michael Chen",
      role: "Chief Operating Officer",
      image: "/png/ellipse-11@2x.png",
      bio: "Michael brings 12 years of operational expertise to ensure seamless experiences for every client."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Sales",
      image: "/png/ellipse-12@2x.png",
      bio: "Emily has closed over 300 deals and specializes in luxury properties and first-time home buyers."
    },
    {
      name: "David Williams",
      role: "Director of Marketing",
      image: "/png/ellipse-111@2x.png",
      bio: "David leads our marketing initiatives with innovative strategies that connect buyers with perfect properties."
    }
  ];

  const testimonials = [
    {
      name: "James & Lisa Thompson",
      location: "Houston, TX",
      image: "/png/ellipse-1@2x.png",
      text: "Sapphire Developments made finding our dream home an absolute pleasure. Their team was professional, knowledgeable, and always available to answer our questions.",
      rating: 5
    },
    {
      name: "Robert Martinez",
      location: "Miami, FL",
      image: "/png/ellipse-11@2x.png",
      text: "As a first-time buyer, I was nervous about the process. The team at Sapphire guided me every step of the way and helped me find the perfect condo within my budget.",
      rating: 5
    },
    {
      name: "Amanda & Chris Lee",
      location: "Los Angeles, CA",
      image: "/png/ellipse-12@2x.png",
      text: "We sold our home in just 2 weeks thanks to their expert marketing and negotiation skills. Highly recommend!",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      icon: "🏆",
      title: "Award-Winning Service",
      description: "Recognized by industry leaders for excellence in customer satisfaction and results."
    },
    {
      icon: "💰",
      title: "Best Price Guarantee",
      description: "We negotiate aggressively to ensure you get the best value for your investment."
    },
    {
      icon: "🔒",
      title: "Secure Transactions",
      description: "Your peace of mind is our priority with transparent, secure processes."
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      description: "Quick responses and efficient processes to help you close deals faster."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start">
      <PHeader />
      
      {/* Hero Section - Improved */}
      <section className="self-stretch bg-slate-900 h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white/80 text-sm font-medium">Since 2010</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mt-4 max-w-2xl mx-auto">
            Discover the story behind Sapphire Developments and why we're the preferred choice for homebuyers and sellers.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="self-stretch flex-1 flex flex-col items-center justify-start py-20 px-4 gap-16 text-center">
        <div className="w-full max-w-[1200px]">
          
          {/* About Intro with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
                <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Welcome to Sapphire Developments
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-4">
                At Sapphire Developments, we believe that a home is more than just a place to live—it's where memories are made and dreams come true. With years of experience in the real estate industry, we are committed to providing exceptional properties that meet the diverse needs of our clients.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-4">
                Our team of dedicated professionals works tirelessly to ensure that every property we list meets our high standards of quality and excellence. From luxury estates to cozy apartments, we have something for everyone.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                We pride ourselves on our transparency, integrity, and customer-focused approach. Let us help you find your perfect property today.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/properties-grid-view"
                  className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300"
                >
                  View Properties
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="/png/property-image4@2x.png" 
                alt="Sapphire Developments Property" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                <p className="text-white font-bold text-2xl mb-2">Luxury Living</p>
                <p className="text-white/80">Redefined for the modern homeowner</p>
              </div>
              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                <p className="text-primary-600 font-bold text-lg">15+ Years</p>
                <p className="text-slate-600 text-sm">of Excellence</p>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 hover:border-primary-500/50 hover:border-2 transition-all duration-300 group cursor-default"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-lg text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section - NEW */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
                <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Benefits</span>
                <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose Us</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Experience the Sapphire difference with our commitment to excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center border border-slate-200 hover:border-primary-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-10 text-left border border-primary-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                To provide exceptional real estate services that exceed our clients' expectations while maintaining the highest standards of professionalism and ethics.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 md:p-10 text-left border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🔭</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Our Vision</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                To be the most trusted and preferred real estate partner in Texas, known for transforming dreams into addresses and setting new standards in the industry.
              </p>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
                <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Principles</span>
                <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Core Values</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
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

          {/* Team Section - NEW */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
                <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Leadership</span>
                <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                The dedicated professionals behind Sapphire Developments' success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section - NEW */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
                <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Testimonials</span>
                <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Don't just take our word for it—hear from our satisfied clients.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Office Location */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 text-center mb-24">
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl">📍</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Visit Our Office</h2>
            <p className="text-lg text-slate-500 mb-2">
              3411 Cummins ST, Houston, TX 77027
            </p>
            <p className="text-slate-400 mb-6">
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300"
            >
              Get Directions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 via-primary-500 to-blue-600 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Let our expert team help you find the perfect property. Browse our listings or contact us today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/properties-grid-view"
                  className="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Browse Properties
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-block bg-primary-500/30 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PGFooter />
    </div>
  );
};

export default AboutUs;
