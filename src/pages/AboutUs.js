import React from "react";
import PGFooter from "../components/PGFooter";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero section starts - SharedHeader is now globally applied via App.js */}

      {/* ===== HERO SECTION - Premium Scale ===== */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/luxury-home-1.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Redefining luxury real estate with exceptional properties and unmatched service
          </p>
        </div>
      </section>

      {/* ===== WHO WE ARE - Structured Content ===== */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="/luxury-home-2.jpg" 
                  alt="Luxury property" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl hidden lg:block">
                <p className="text-4xl font-light text-slate-900">15+</p>
                <p className="text-sm text-slate-500">Years of Excellence</p>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-4">
                Who We Are
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-8 leading-tight">
                Architects of extraordinary living spaces
              </h3>
              
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p>
                  Sapphire Developments stands as a beacon of excellence in the luxury real estate market. 
                  Since our inception, we have remained committed to discovering and curating the most 
                  exceptional properties that define the pinnacle of modern living.
                </p>
                <p>
                  Our portfolio encompasses the most sought-after addresses, from beachfront estates 
                  to urban penthouses, each selected for its unique character and unparalleled quality. 
                  We understand that a home is more than just a structure—it is a sanctuary where 
                  life unfolds.
                </p>
                <p>
                  What sets us apart is our dedication to personalized service. Every client receives 
                  bespoke attention from our team of seasoned professionals, ensuring that each property 
                  journey is as remarkable as the properties themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION - Clean Minimal Layout ===== */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "500+", label: "Properties Sold" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "$2B+", label: "Property Value" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-2">
                  {stat.number}
                </p>
                <p className="text-sm md:text-base text-slate-500 font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FULL-WIDTH VISUAL SECTION ===== */}
      <section className="py-24 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Crafting dreams into reality
          </h2>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            Every property we represent is a testament to our commitment to excellence and our passion for exceptional living.
          </p>
        </div>
      </section>

      {/* ===== WHY CHOOSE US - Improved Cards ===== */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-4">
              Our Advantages
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900">
              Why Choose Sapphire
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              { 
                icon: (
                  <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ), 
                title: "Award Winning", 
                desc: "Recognized industry-wide for excellence in luxury real estate" 
              },
              { 
                icon: (
                  <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                ), 
                title: "Exclusive Access", 
                desc: "Private listings and off-market opportunities for discerning clients" 
              },
              { 
                icon: (
                  <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ), 
                title: "Personal Service", 
                desc: "Dedicated expertise throughout your entire property journey" 
              },
              { 
                icon: (
                  <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ), 
                title: "Global Network", 
                desc: "International connections to premium properties worldwide" 
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-8 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 mb-6">{item.icon}</div>
                <h4 className="text-xl font-light text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION - Combined Section ===== */}
      <section className="py-24 lg:py-32 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission - Primary */}
            <div className="bg-slate-900 p-10 lg:p-12">
              <h2 className="text-sm font-medium tracking-widest text-white/60 uppercase mb-4">
                Mission
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-6 leading-tight">
                To transform the way people experience luxury real estate
              </h3>
              <p className="text-white/70 font-light leading-relaxed">
                We strive to create meaningful connections between extraordinary properties and 
                the exceptional individuals who will call them home. Every interaction is an 
                opportunity to exceed expectations and redefine what is possible.
              </p>
            </div>
            
            {/* Vision */}
            <div className="p-10 lg:p-12 border border-slate-200">
              <h2 className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-4">
                Vision
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-6 leading-tight">
                To be the most trusted name in luxury real estate
              </h3>
              <p className="text-slate-500 font-light leading-relaxed">
                We envision a future where every property transaction is seamless, transparent, 
                and exceptional. Our commitment to innovation and integrity will continue to 
                set new standards in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES - 2 Column Layout ===== */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-4">
              What Guides Us
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900">
              Our Core Values
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { title: "Integrity", desc: "We operate with unwavering honesty and transparency in every interaction, building lasting trust with our clients." },
              { title: "Excellence", desc: "We pursue the highest standards in everything we do, from property selection to client service." },
              { title: "Innovation", desc: "We embrace new technologies and approaches that enhance the property journey." },
              { title: "Client Focus", desc: "Your needs and aspirations are at the center of everything we do." }
            ].map((value, index) => (
              <div 
                key={index} 
                className="p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h4 className="text-xl font-light text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-500 font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION - Larger Images ===== */}
      <section className="py-24 lg:py-32 bg-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-widest text-white/60 uppercase mb-4">
              Meet The Team
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
              Our Experts
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              { name: "James Mitchell", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face" },
              { name: "Sarah Chen", role: "Head of Sales", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face" },
              { name: "Michael Roberts", role: "Property Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
              { name: "Emily Williams", role: "Client Relations", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face" }
            ].map((member, index) => (
              <div 
                key={index} 
                className="group text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-square overflow-hidden mb-4 bg-slate-800">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-lg font-light text-white mb-1">{member.name}</h4>
                <p className="text-sm text-white/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS - Larger Quotes ===== */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-4">
              Client Stories
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900">
              What They Say
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              { quote: "Sapphire Developments made finding our dream home an absolute pleasure. Their attention to detail and professional service exceeded all expectations.", author: "Robert Anderson", location: "Beverly Hills", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
              { quote: "The team understood exactly what we were looking for. Within weeks, we found the perfect property that matched our vision completely.", author: "Jennifer Martinez", location: "Malibu", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
              { quote: "Exceptional service from start to finish. They truly understand the luxury market and what discerning clients are looking for.", author: "David Thompson", location: "Palm Springs", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="p-8 bg-slate-50 hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <svg className="w-10 h-10 text-primary-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-lg text-slate-700 font-light leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4 border-t border-slate-200 pt-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-slate-900 font-medium">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PGFooter />
    </div>
  );
};

export default AboutUs;
