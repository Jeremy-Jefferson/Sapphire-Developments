import React from "react";
import { Link } from "react-router-dom";
import PHeader from "../components/PHeader";
import PGFooter from "../components/PGFooter";

const agents = [
  {
    id: 1,
    name: "John Smith",
    position: "Senior Real Estate Agent",
    phone: "+1 (555) 123-4567",
    email: "john.smith@sapphire.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face",
    bio: "With over 15 years of experience, John has helped over 300 families find their dream homes.",
    specialties: ["Luxury Homes", "First-Time Buyers", "Relocation"]
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Luxury Property Specialist",
    phone: "+1 (555) 234-5678",
    email: "sarah.johnson@sapphire.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face",
    bio: "Sarah specializes in high-end properties and has closed over $50M in luxury real estate.",
    specialties: ["Luxury Estates", "Waterfront Properties", "New Construction"]
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Commercial Property Agent",
    phone: "+1 (555) 345-6789",
    email: "michael.brown@sapphire.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    bio: "Michael brings 12 years of commercial real estate expertise to every transaction.",
    specialties: ["Commercial Buildings", "Office Spaces", "Investment Properties"]
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Residential Property Expert",
    phone: "+1 (555) 456-7890",
    email: "emily.davis@sapphire.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
    bio: "Emily is known for her patience and dedication to first-time home buyers.",
    specialties: ["Residential Homes", "Condos", "Family Homes"]
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Investment Property Consultant",
    phone: "+1 (555) 567-8901",
    email: "david.wilson@sapphire.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    bio: "David helps investors maximize their returns with strategic property investments.",
    specialties: ["Rental Properties", "Fixer-Uppers", "Multi-Family"]
  },
  {
    id: 6,
    name: "Jennifer Martinez",
    position: "Property Manager",
    phone: "+1 (555) 678-9012",
    email: "jennifer.martinez@sapphire.com",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop&crop=face",
    bio: "Jennifer manages over 100 properties and ensures both landlords and tenants are happy.",
    specialties: ["Property Management", "Leasing", "Tenant Relations"]
  }
];

const teamStats = [
  { number: "500+", label: "Properties Sold", icon: "🏠" },
  { number: "200+", label: "Happy Clients", icon: "😊" },
  { number: "98%", label: "Satisfaction Rate", icon: "⭐" },
  { number: "$100M+", label: "In Sales", icon: "💰" }
];

const OurAgents = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start">
      <PHeader />
      
      {/* Hero Section */}
      <section className="self-stretch bg-slate-900 h-[350px] flex flex-col items-center justify-center mix-blend-normal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        </div>
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-6xl font-semibold text-white font-body-large-400 leading-[48px]">
            Our Agents
          </h1>
          <p className="text-xl text-slate-300 mt-4 font-body-large-400 leading-[28px]">
            Meet our team of expert real estate professionals
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="self-stretch bg-slate-900 py-12 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px] text-center text-primary-800 font-body-large-400">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto max-w-[1200px]">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our Dedicated Team
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Our experienced agents are committed to finding you the perfect property. With diverse expertise across all real estate sectors, we have the right professional for your needs.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px]">
          {agents.map((agent) => (
            <div 
              key={agent.id} 
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="h-[320px] bg-slate-100 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={agent.image} 
                  alt={agent.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={`tel:${agent.phone}`}
                    className="bg-white text-slate-800 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                    aria-label="Call"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                  <a 
                    href={`mailto:${agent.email}`}
                    className="bg-white text-slate-800 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{agent.position}</p>
                <p className="text-slate-500 text-sm mb-4">{agent.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.specialties.map((specialty, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="space-y-2 text-slate-500 text-sm pt-4 border-t border-slate-100">
                  <p className="flex items-center gap-2">
                    <span>📞</span> {agent.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>✉️</span> {agent.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Work With Us */}
        <div className="mt-12 max-w-[1200px]">
          <div className="bg-gradient-to-r from-primary-50 to-slate-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Work With Our Team?</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                When you choose Sapphire Developments, you're choosing excellence, integrity, and results.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Personalized Service</h3>
                <p className="text-slate-500">Every client receives dedicated attention and tailored solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Market Expertise</h3>
                <p className="text-slate-500">Deep knowledge of local markets ensures the best deals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Trusted Advisors</h3>
                <p className="text-slate-500">We guide you through every step with transparency.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-16 text-center max-w-[1200px]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to Join Our Team?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing team. If you're passionate about real estate, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact-us"
              className="inline-block bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-600 hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
            <a 
              href="tel:+15551234567"
              className="inline-block bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <PGFooter />
    </div>
  );
};

export default OurAgents;
