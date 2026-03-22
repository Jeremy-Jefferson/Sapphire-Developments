import React, { useState } from "react";
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
    specialties: ["Luxury Homes", "First-Time Buyers", "Relocation"],
    experience: "15+ Years",
    rating: 4.9,
    reviews: 127,
    sold: 300,
    featured: true,
    available: true,
    badge: "Top Seller",
    languages: ["English", "Spanish"],
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Luxury Property Specialist",
    phone: "+1 (555) 234-5678",
    email: "sarah.johnson@sapphire.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face",
    bio: "Sarah specializes in high-end properties and has closed over $50M in luxury real estate.",
    specialties: ["Luxury Estates", "Waterfront Properties", "New Construction"],
    experience: "12+ Years",
    rating: 4.8,
    reviews: 98,
    sold: 150,
    featured: true,
    available: true,
    badge: "Luxury Expert",
    languages: ["English", "French"],
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Commercial Property Agent",
    phone: "+1 (555) 345-6789",
    email: "michael.brown@sapphire.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    bio: "Michael brings 12 years of commercial real estate expertise to every transaction.",
    specialties: ["Commercial Buildings", "Office Spaces", "Investment Properties"],
    experience: "12+ Years",
    rating: 4.7,
    reviews: 85,
    sold: 120,
    featured: false,
    available: true,
    badge: "Commercial Pro",
    languages: ["English", "Spanish"],
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Residential Property Expert",
    phone: "+1 (555) 456-7890",
    email: "emily.davis@sapphire.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
    bio: "Emily is known for her patience and dedication to first-time home buyers.",
    specialties: ["Residential Homes", "Condos", "Family Homes"],
    experience: "8+ Years",
    rating: 4.9,
    reviews: 156,
    sold: 200,
    featured: false,
    available: true,
    badge: "Client Favorite",
    languages: ["English", "Mandarin"],
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Investment Property Consultant",
    phone: "+1 (555) 567-8901",
    email: "david.wilson@sapphire.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    bio: "David helps investors maximize their returns with strategic property investments.",
    specialties: ["Rental Properties", "Fixer-Uppers", "Multi-Family"],
    experience: "10+ Years",
    rating: 4.6,
    reviews: 72,
    sold: 95,
    featured: false,
    available: false,
    badge: "Investment Guru",
    languages: ["English"],
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    id: 6,
    name: "Jennifer Martinez",
    position: "Property Manager",
    phone: "+1 (555) 678-9012",
    email: "jennifer.martinez@sapphire.com",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop&crop=face",
    bio: "Jennifer manages over 100 properties and ensures both landlords and tenants are happy.",
    specialties: ["Property Management", "Leasing", "Tenant Relations"],
    experience: "9+ Years",
    rating: 4.8,
    reviews: 110,
    sold: 0,
    propertiesManaged: 100,
    featured: false,
    available: true,
    badge: "Best Manager",
    languages: ["English", "Spanish", "Portuguese"],
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  }
];

const teamStats = [
  { number: "500+", label: "Properties Sold", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { number: "200+", label: "Happy Clients", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { number: "98%", label: "Satisfaction Rate", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
  { number: "$100M+", label: "In Sales", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
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
    text: "John Smith made our first home buying experience absolutely seamless. His patience and expertise helped us find the perfect family home.",
    rating: 5,
    agentId: 1
  },
  {
    id: 2,
    name: "James Henderson",
    text: "Sarah's knowledge of luxury properties is unmatched. She found me my dream estate within weeks!",
    rating: 5,
    agentId: 2
  },
  {
    id: 3,
    name: "Amanda Chen",
    text: "Emily Davis was incredibly helpful throughout our entire journey. She answered every question and made us feel comfortable.",
    rating: 5,
    agentId: 4
  }
];

const faqs = [
  {
    question: "How do I schedule a consultation with an agent?",
    answer: "You can schedule a consultation by clicking the 'Contact Us' button or calling our office directly. Our agents are available Monday through Friday, 9 AM to 6 PM."
  },
  {
    question: "Do your agents work with first-time home buyers?",
    answer: "Absolutely! Many of our agents specialize in helping first-time buyers navigate the home buying process with ease."
  },
  {
    question: "What areas do your agents serve?",
    answer: "Our agents serve the greater Houston area and surrounding regions, including The Woodlands, Sugar Land, and Katy."
  },
  {
    question: "Are your agents available for virtual consultations?",
    answer: "Yes, we offer virtual consultations via video call for clients who prefer remote meetings or are relocating from out of area."
  }
];

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We listen to your needs and preferences to understand what you're looking for.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  },
  {
    step: 2,
    title: "Property Search",
    description: "We curate listings that match your criteria and schedule viewings.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  },
  {
    step: 3,
    title: "Negotiation & Offer",
    description: "We handle all negotiations to get you the best deal possible.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    step: 4,
    title: "Closing",
    description: "We guide you through the paperwork to a successful close.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
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
    <div className="min-h-screen bg-white flex flex-col items-center justify-start">
      <PHeader />
      
      {/* Hero Section */}
      <section className="self-stretch bg-slate-900 h-[350px] flex flex-col items-center justify-center mix-blend-normal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        </div>
        <div className="text-center z-10 px-4">
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
                <div className="w-14 h-14 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      {featuredAgents.length > 0 && (
        <section className="self-stretch bg-gradient-to-b from-primary-50 to-white py-16 px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
                ⭐ Top Performers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Featured Agents
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Our most experienced agents ready to help you find your dream property
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredAgents.map((agent) => (
                <div 
                  key={agent.id} 
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 h-[300px] md:h-auto relative overflow-hidden">
                      <img 
                        src={agent.image} 
                        alt={agent.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {agent.available && (
                        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                          Available Now
                        </div>
                      )}
                      {agent.badge && (
                        <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {agent.badge}
                        </div>
                      )}
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 mb-1">{agent.name}</h3>
                          <p className="text-primary-600 font-medium">{agent.position}</p>
                        </div>
                        <div className="flex items-center gap-1 bg-primary-50 px-2 py-1 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm font-semibold text-slate-700">{agent.rating}</span>
                          <span className="text-xs text-slate-400">({agent.reviews})</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-500 mb-4">{agent.bio}</p>
                      
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
                      
                      <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {agent.experience}
                        </div>
                        {agent.sold > 0 && (
                          <div className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {agent.sold} Properties Sold
                          </div>
                        )}
                      </div>

                      {/* Languages */}
                      <div className="flex items-center gap-2 mb-4 text-sm text-slate-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                        <span>{agent.languages.join(", ")}</span>
                      </div>
                      
                      <div className="flex gap-3">
                        <a 
                          href={`tel:${agent.phone}`}
                          className="flex-1 bg-primary-500 text-white py-2.5 px-4 rounded-xl font-medium text-center hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Call
                        </a>
                        <a 
                          href={`mailto:${agent.email}`}
                          className="flex-1 bg-slate-100 text-slate-700 py-2.5 px-4 rounded-xl font-medium text-center hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
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

      {/* How It Works Section */}
      <section className="self-stretch bg-white py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How Our Agents Work</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              A streamlined process to help you find your perfect property
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                  <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="self-stretch flex-1 flex flex-col items-center justify-start py-12 px-8 gap-10 text-center text-primary-800 font-body-large-400">
        <div className="max-w-[1200px] w-full">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Dedicated Team
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Our experienced agents are committed to finding you the perfect property. With diverse expertise across all real estate sectors, we have the right professional for your needs.
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="max-w-[1200px] w-full">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-slate-200">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search agents by name or position..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-700"
                />
              </div>
            </div>
            
            {/* Specialty Filter Pills */}
            <div className="mt-4">
              <p className="text-sm text-slate-500 mb-3 text-left">Filter by specialty:</p>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty) => (
                  <button
                    key={specialty}
                    onClick={() => setSelectedSpecialty(specialty)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedSpecialty === specialty
                        ? "bg-primary-500 text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-slate-500">
              Showing <span className="font-semibold text-slate-700">{filteredAgents.length}</span> agents
            </p>
          </div>
        </div>
        
        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px]">
          {filteredAgents.map((agent) => (
            <div 
              key={agent.id} 
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="h-[300px] bg-slate-100 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={agent.image} 
                  alt={agent.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {agent.available ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      Available
                    </span>
                  ) : (
                    <span className="bg-slate-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Unavailable
                    </span>
                  )}
                </div>

                {/* Badge */}
                {agent.badge && (
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {agent.badge}
                  </div>
                )}
                
                {/* Quick Actions */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={`tel:${agent.phone}`}
                    className="bg-white text-slate-800 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors shadow-lg"
                    aria-label="Call"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                  <a 
                    href={`mailto:${agent.email}`}
                    className="bg-white text-slate-800 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors shadow-lg"
                    aria-label="Email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a 
                    href={agent.social.linkedin}
                    className="bg-white text-slate-800 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-slate-800">{agent.name}</h3>
                  <div className="flex items-center gap-1 bg-primary-50 px-2 py-1 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-semibold text-slate-700">{agent.rating}</span>
                  </div>
                </div>
                <p className="text-primary-600 font-medium mb-2">{agent.position}</p>
                <p className="text-slate-500 text-sm mb-3 line-clamp-2">{agent.bio}</p>
                
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
                
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {agent.experience}
                  </div>
                  {agent.sold > 0 && (
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {agent.sold} Sold
                    </div>
                  )}
                  {agent.propertiesManaged && (
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {agent.propertiesManaged} Managed
                    </div>
                  )}
                </div>

                {/* Languages */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 pb-3 border-b border-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span>{agent.languages.join(", ")}</span>
                </div>
                
                <div className="space-y-2 text-slate-500 text-sm pt-3 border-t border-slate-100">
                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {agent.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {agent.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No agents found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {setSelectedSpecialty("All"); setSearchQuery("");}}
              className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Testimonials Section */}
        <div className="mt-12 max-w-[1200px] w-full">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-slate-800">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 max-w-[800px]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-500">
              Common questions about working with our agents
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-800">{faq.question}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${expandedFaq === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-500">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
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
              <div className="text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Personalized Service</h3>
                <p className="text-slate-500">Every client receives dedicated attention and tailored solutions.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Market Expertise</h3>
                <p className="text-slate-500">Deep knowledge of local markets ensures the best deals.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
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
