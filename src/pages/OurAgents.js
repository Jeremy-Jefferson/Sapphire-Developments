import React, { useState } from "react";
import { Link } from "react-router-dom";
import LPFooter from "../components/LPFooter";

const agents = [
  {
    id: 1,
    name: "James Mitchell",
    position: "CEO & Founder",
    phone: "+1 (555) 123-4567",
    email: "james.mitchell@sapphire.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face",
    bio: "Leading with vision and integrity to transform the luxury real estate experience.",
    specialties: ["Luxury Estates", "Strategic Advisory"],
    experience: "15+ Years",
    rating: 4.9,
    reviews: 127,
    sold: 300,
    featured: true,
    available: true,
    languages: ["English", "Spanish"],
  },
  {
    id: 2,
    name: "Sarah Chen",
    position: "Head of Sales",
    phone: "+1 (555) 234-5678",
    email: "sarah.chen@sapphire.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face",
    bio: "Specializing in exceptional properties for discerning clients worldwide.",
    specialties: ["Waterfront Properties", "New Construction"],
    experience: "12+ Years",
    rating: 4.8,
    reviews: 98,
    sold: 150,
    featured: true,
    available: true,
    languages: ["English", "French"],
  },
  {
    id: 3,
    name: "Michael Roberts",
    position: "Property Director",
    phone: "+1 (555) 345-6789",
    email: "michael.roberts@sapphire.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    bio: "Delivering premium results through deep market knowledge and strategic negotiation.",
    specialties: ["Commercial", "Investment Properties"],
    experience: "12+ Years",
    rating: 4.7,
    reviews: 85,
    sold: 120,
    featured: false,
    available: true,
    languages: ["English", "Spanish"],
  },
  {
    id: 4,
    name: "Emily Williams",
    position: "Client Relations",
    phone: "+1 (555) 456-7890",
    email: "emily.williams@sapphire.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
    bio: "Dedicated to creating seamless experiences for every client journey.",
    specialties: ["Residential", "Family Homes"],
    experience: "8+ Years",
    rating: 4.9,
    reviews: 156,
    sold: 200,
    featured: false,
    available: true,
    languages: ["English", "Mandarin"],
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Investment Consultant",
    phone: "+1 (555) 567-8901",
    email: "david.wilson@sapphire.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    bio: "Helping investors identify exceptional opportunities for long-term growth.",
    specialties: ["Rental Properties", "Multi-Family"],
    experience: "10+ Years",
    rating: 4.6,
    reviews: 72,
    sold: 95,
    featured: false,
    available: false,
    languages: ["English"],
  },
  {
    id: 6,
    name: "Jennifer Martinez",
    position: "Property Manager",
    phone: "+1 (555) 678-9012",
    email: "jennifer.martinez@sapphire.com",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop&crop=face",
    bio: "Ensuring exceptional management for luxury properties across the portfolio.",
    specialties: ["Property Management", "Leasing"],
    experience: "9+ Years",
    rating: 4.8,
    reviews: 110,
    sold: 0,
    propertiesManaged: 100,
    featured: false,
    available: true,
    languages: ["English", "Spanish", "Portuguese"],
  }
];

const teamStats = [
  { number: "500+", label: "Properties Sold" },
  { number: "200+", label: "Happy Clients" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "$100M+", label: "In Sales" }
];

const specialties = [
  "All", "Luxury Homes", "First-Time Buyers", "Relocation", "Luxury Estates", 
  "Waterfront Properties", "New Construction", "Commercial Buildings", 
  "Office Spaces", "Investment Properties", "Residential Homes", "Condos", 
  "Family Homes", "Rental Properties", "Property Management"
];

const testimonials = [
  {
    id: 1,
    name: "Robert & Lisa Thompson",
    text: "Working with James was an exceptional experience. His attention to detail and understanding of the luxury market helped us find our dream home.",
    rating: 5,
    agentId: 1,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "James Henderson",
    text: "Sarah's expertise in waterfront properties is unmatched. She found my perfect estate within weeks. Truly professional service.",
    rating: 5,
    agentId: 2,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Amanda Chen",
    text: "Emily made our first home buying journey seamless. Her patience and guidance throughout the process was invaluable.",
    rating: 5,
    agentId: 4,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  }
];

const faqs = [
  {
    question: "How do I schedule a consultation with an agent?",
    answer: "You can schedule a consultation by clicking the 'Schedule Consultation' button or calling our office directly. Our advisors are available Monday through Friday, 9 AM to 6 PM."
  },
  {
    question: "Do your agents work with first-time home buyers?",
    answer: "Absolutely. Many of our advisors specialize in guiding first-time buyers through the process with personalized support and expertise."
  },
  {
    question: "What areas do your agents serve?",
    answer: "Our team serves the greater Houston area and surrounding regions, including The Woodlands, Sugar Land, and Katy."
  },
  {
    question: "Are virtual consultations available?",
    answer: "Yes, we offer video consultations for clients who prefer remote meetings or are relocating from out of area."
  }
];

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We begin by understanding your vision, preferences, and goals to create a tailored property strategy.",
  },
  {
    step: 2,
    title: "Property Search",
    description: "We curate exclusive listings that align with your criteria and arrange private viewings at your convenience.",
  },
  {
    step: 3,
    title: "Negotiation & Offer",
    description: "Our strategic approach ensures optimal terms while protecting your interests throughout the process.",
  },
  {
    step: 4,
    title: "Closing",
    description: "We guide you through every detail to ensure a seamless transition to your new property.",
  }
];

const OurAgents = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const featuredAgents = agents.filter(agent => agent.featured);
  
  const filteredAgents = agents.filter(agent => {
    const matchesSpecialty = selectedSpecialty === "All" || 
      agent.specialties.includes(selectedSpecialty);
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.position.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white pt-20">
      
      {/* Hero Section - Centered */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/luxury-home-1.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
            Our Advisors
          </h1>
          <p className="text-lg text-white/80 font-light">
            Meet the team behind exceptional property experiences
          </p>
        </div>
      </section>

      {/* Team Stats - Centered */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2">{stat.number}</p>
                <p className="text-sm text-slate-400 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Advisors - Centered */}
      {featuredAgents.length > 0 && (
        <section className="py-20 lg:py-28 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-4">
                Leadership
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900">
                Featured Advisors
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {featuredAgents.map((agent) => (
                <div 
                  key={agent.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 h-[280px] md:h-auto relative overflow-hidden">
                      <img 
                        src={agent.image} 
                        alt={agent.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {agent.available && (
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1.5 rounded-full text-xs font-medium">
                          Available
                        </div>
                      )}
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">{agent.name}</h3>
                      <p className="text-slate-500 font-light mb-4">{agent.position}</p>
                      
                      <p className="text-slate-600 font-light leading-relaxed mb-5 text-sm">
                        {agent.bio}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {agent.experience}
                        </div>
                        {agent.sold > 0 && (
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {agent.sold} Sold
                          </div>
                        )}
                      </div>

                      <div className="flex gap-3">
                        <a 
                          href={`tel:${agent.phone}`}
                          className="flex-1 bg-slate-900 text-white py-2.5 px-4 rounded-lg font-medium text-center hover:bg-slate-800 transition-colors text-sm"
                        >
                          Contact
                        </a>
                        <a 
                          href={`mailto:${agent.email}`}
                          className="flex-1 bg-slate-100 text-slate-700 py-2.5 px-4 rounded-lg font-medium text-center hover:bg-slate-200 transition-colors text-sm"
                        >
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How Our Advisors Work - Centered */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-4">
              Our Approach
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-4">
              How We Work
            </h3>
            <p className="text-slate-500 font-light max-w-xl mx-auto">
              A refined approach to finding exceptional properties
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {processSteps.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-slate-600 font-semibold text-lg">{item.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-500 font-light text-sm leading-relaxed">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[60%] w-[80%] h-px bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section - Centered */}
      <section className="py-16 lg:py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-4">
              Meet The Team
            </h2>
            <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
              Our Dedicated Advisors
            </h3>
            <p className="text-slate-500 font-light max-w-2xl mx-auto">
              Our experienced team is committed to finding you the perfect property. 
              With diverse expertise across all real estate sectors, we have the right professional for your needs.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <svg className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by name or role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent text-slate-700"
                />
              </div>
            </div>
            
            <div className="mt-5">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-3 text-left">Filter by specialty</p>
              <div className="flex flex-wrap gap-2">
                {specialties.slice(0, 8).map((specialty) => (
                  <button
                    key={specialty}
                    onClick={() => setSelectedSpecialty(specialty)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedSpecialty === specialty
                        ? "bg-slate-800 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-slate-500 text-sm">
              Showing <span className="font-semibold text-slate-700">{filteredAgents.length}</span> advisors
            </p>
          </div>
        </div>
        
        {/* Agents Grid - Centered */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredAgents.map((agent) => (
              <div 
                key={agent.id} 
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-[260px] overflow-hidden relative">
                  <img 
                    src={agent.image} 
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-3 right-3">
                    {agent.available ? (
                      <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-2 py-1 rounded-full text-xs font-medium">
                        Available
                      </span>
                    ) : (
                      <span className="bg-slate-800/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Unavailable
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-slate-900">{agent.name}</h3>
                    <p className="text-slate-500 text-sm">{agent.position}</p>
                  </div>
                  
                  <p className="text-slate-600 text-sm font-light leading-relaxed mb-4 line-clamp-2">
                    {agent.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {agent.specialties.slice(0, 2).map((specialty, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 text-xs text-slate-500 pt-3 border-t border-slate-100">
                    <span>{agent.experience}</span>
                    {agent.sold > 0 && <span>• {agent.sold} sold</span>}
                  </div>
                  
                  <div className="flex items-center gap-3 pt-3 mt-1">
                    <a 
                      href={`tel:${agent.phone}`}
                      className="flex-1 bg-slate-900 text-white py-2 px-3 rounded-lg text-sm text-center hover:bg-slate-800 transition-colors"
                    >
                      Call
                    </a>
                    <a 
                      href={`mailto:${agent.email}`}
                      className="flex-1 bg-slate-100 text-slate-700 py-2 px-3 rounded-lg text-sm text-center hover:bg-slate-200 transition-colors"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredAgents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500">No advisors match your criteria</p>
              <button 
                onClick={() => {setSelectedSpecialty("All"); setSearchQuery("");}}
                className="mt-4 text-slate-600 hover:text-slate-800 font-medium text-sm"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials - Centered */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-4">
                Client Stories
              </h2>
              <h3 className="text-3xl md:text-4xl font-light text-slate-900">
                What They Say
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-xl">
                  <svg className="w-8 h-8 text-slate-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-slate-600 font-light leading-relaxed mb-5 text-sm">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-slate-900 font-medium text-sm">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Centered */}
      <section className="py-20 lg:py-28 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-4">
              Common Questions
            </h2>
            <h3 className="text-3xl md:text-4xl font-light text-slate-900">
              Frequently Asked
            </h3>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden border border-slate-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="font-medium text-slate-800 text-sm">{faq.question}</span>
                  <svg 
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${expandedFaq === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-5 pb-4">
                    <p className="text-slate-500 text-sm font-light">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Centered */}
      <section className="py-20 lg:py-24 px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-px bg-white/20 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-light text-white mb-5">
            Ready to find your extraordinary home?
          </h2>
          <p className="text-white/60 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Schedule a private consultation with one of our advisors. 
            Let's discuss your vision and find the perfect property that matches your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact-us"
              className="px-8 py-3 bg-white text-slate-900 font-semibold text-sm tracking-widest uppercase hover:bg-slate-100 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <a 
              href="tel:+15551234567"
              className="px-8 py-3 border border-white/30 text-white font-light text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
          <p className="mt-8 text-sm text-white/40 font-light">
            Or reach us at <span className="text-white/60">+1 (555) 123-4567</span>
          </p>
        </div>
      </section>

      <LPFooter />
    </main>
  );
};

export default OurAgents;
