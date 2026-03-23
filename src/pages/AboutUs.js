import React from "react";
import PGFooter from "../components/PGFooter";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[55vh] md:h-[65vh] lg:h-[75vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/luxury-home-1.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <p className="text-sm md:text-base font-medium tracking-[0.3em] text-white/70 uppercase mb-6">
            Sapphire Developments
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight mb-8 leading-[1.1]">
            Defining the Art of Fine Living
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            Where architectural excellence meets unparalleled service. We curate the world's most exceptional properties for those who demand nothing less than extraordinary.
          </p>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <img 
                  src="/luxury-home-2.jpg" 
                  alt="Luxury property" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl hidden lg:block rounded-xl">
                <p className="text-4xl font-light text-slate-900">15+</p>
                <p className="text-sm text-slate-500">Years of Excellence</p>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-4">
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

      {/* ===== STATS SECTION ===== */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "500+", label: "Properties Sold" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "$2B+", label: "Property Value" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </p>
                <p className="text-xs md:text-sm text-gray-400 font-light uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FULL-WIDTH VISUAL SECTION ===== */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Crafting dreams into reality
          </h2>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            Every property we represent is a testament to our commitment to excellence and our passion for exceptional living.
          </p>
        </div>
      </section>

      {/* ===== ADVANTAGES SECTION (WHY CHOOSE SAPPHIRE) ===== */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-4">
              Our Advantages
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900">
              Why Choose Sapphire
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: (
                  <svg className="w-10 h-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ), 
                title: "Award Winning", 
                desc: "Recognized industry-wide for excellence in luxury real estate services and client satisfaction." 
              },
              { 
                icon: (
                  <svg className="w-10 h-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                ), 
                title: "Exclusive Access", 
                desc: "Private listings and off-market opportunities available only to our distinguished clients." 
              },
              { 
                icon: (
                  <svg className="w-10 h-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ), 
                title: "Personal Service", 
                desc: "Dedicated expertise and bespoke guidance throughout your entire property journey." 
              },
              { 
                icon: (
                  <svg className="w-10 h-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ), 
                title: "Global Network", 
                desc: "International connections spanning the world's most prestigious property markets." 
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-8 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border border-slate-200 mb-5">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Mission - Dark background */}
            <div className="bg-[#08122b] p-10 md:p-12 rounded-xl flex flex-col justify-center">
              <div className="w-12 h-[1px] bg-white/30 mb-6" />
              <h2 className="text-xs font-medium tracking-[0.2em] text-white/50 uppercase mb-4">
                Our Mission
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-6 leading-tight">
                To transform the way people experience luxury real estate
              </h3>
              <p className="text-white/60 font-light leading-relaxed text-base">
                We strive to create meaningful connections between extraordinary properties and 
                the exceptional individuals who will call them home. Every interaction is an 
                opportunity to exceed expectations and redefine what is possible.
              </p>
            </div>
            
            {/* Vision - White background with better contrast */}
            <div className="bg-white p-10 md:p-12 rounded-xl border border-slate-200 flex flex-col justify-center">
              <div className="w-12 h-[1px] bg-slate-200 mb-6" />
              <h2 className="text-xs font-medium tracking-[0.2em] text-slate-400 uppercase mb-4">
                Our Vision
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-5 leading-tight">
                To be the most trusted name in luxury real estate
              </h3>
              <p className="text-slate-600 font-light leading-relaxed text-base">
                We envision a future where every property transaction is seamless, transparent, 
                and exceptional. Our commitment to innovation and integrity will continue to 
                set new standards in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-4">
              What Guides Us
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900">
              Our Core Values
            </h3>
          </div>
          
          {/* Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                title: "Integrity", 
                desc: "We operate with unwavering honesty and transparency in every interaction, building lasting trust with our clients. This commitment extends to every negotiation, every document, and every relationship we cultivate.",
                number: "01"
              },
              { 
                title: "Excellence", 
                desc: "We pursue the highest standards in everything we do, from property selection to client service. Our team continuously refines our processes and expands our expertise to deliver results that consistently exceed expectations.",
                number: "02"
              },
              { 
                title: "Innovation", 
                desc: "We embrace new technologies and approaches that enhance the property journey. From virtual tours to data-driven market analysis, we leverage every available tool to serve our clients more effectively.",
                number: "03"
              },
              { 
                title: "Client Focus", 
                desc: "Your needs and aspirations are at the center of everything we do. We take the time to understand your unique vision, ensuring that every recommendation and every decision aligns with your ultimate goals.",
                number: "04"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="border-b border-slate-100 pb-8 last:border-b-0"
              >
                <div className="flex items-start gap-6">
                  <span className="text-sm font-semibold text-slate-300 flex-shrink-0 pt-1 w-8">{value.number}</span>
                  <div>
                    <h4 className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-4">{value.title}</h4>
                    <p className="text-gray-500 font-light leading-relaxed text-base">{value.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION (OUR EXPERTS) ===== */}
      <section className="py-20 lg:py-28 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-widest text-white/50 uppercase mb-4">
              Meet The Team
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
              Our Experts
            </h3>
          </div>
          
          {/* Unified portrait presentation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              { name: "James Mitchell", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=face" },
              { name: "Sarah Chen", role: "Head of Sales", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=533&fit=crop&crop=face" },
              { name: "Michael Roberts", role: "Property Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=533&fit=crop&crop=face" },
              { name: "Emily Williams", role: "Client Relations", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=533&fit=crop&crop=face" }
            ].map((member, index) => (
              <div 
                key={index} 
                className="group text-center"
              >
                {/* Consistent 3:4 portrait with hover lift */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-800 shadow-lg mb-5 rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Enhanced typography hierarchy */}
                <h4 className="text-lg font-semibold text-white mb-1 tracking-wide">{member.name}</h4>
                <p className="text-sm text-gray-400 uppercase tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-4">
              Client Stories
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900">
              What They Say
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Sapphire Developments made finding our dream home an absolute pleasure. Their attention to detail and professional service exceeded all expectations.", author: "Robert Anderson", location: "Beverly Hills", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
              { quote: "The team understood exactly what we were looking for. Within weeks, we found the perfect property that matched our vision completely.", author: "Jennifer Martinez", location: "Malibu", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
              { quote: "Exceptional service from start to finish. They truly understand the luxury market and what discerning clients are looking for.", author: "David Thompson", location: "Palm Springs", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="p-10 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-10 h-10 text-primary-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-base text-slate-700 font-light leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4 border-t border-slate-200 pt-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-slate-900 font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAGE ENDING - Consultation CTA ===== */}
      <section className="py-20 lg:py-24 bg-slate-900 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-[1px] bg-white/20 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Ready to find your extraordinary home?
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Our team of luxury property specialists is ready to guide you through an exceptional 
            journey. Let's discuss your vision and find the perfect property that matches your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-slate-900 font-semibold text-sm tracking-widest uppercase hover:bg-slate-100 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-light text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300">
              View Properties
            </button>
          </div>
          <p className="mt-8 text-sm text-white/40 font-light">
            Or call us at <span className="text-white/60">+1 (555) 123-4567</span>
          </p>
        </div>
      </section>

      <PGFooter />
    </div>
  );
};

export default AboutUs;
