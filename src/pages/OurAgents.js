import React from "react";
import PHeader from "../components/PHeader";
import PGFooter from "../components/PGFooter";

const agents = [
  {
    id: 1,
    name: "John Smith",
    position: "Senior Real Estate Agent",
    phone: "+1 (555) 123-4567",
    email: "john.smith@sapphire.com",
    image: "/png/card-1@3x.png"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Luxury Property Specialist",
    phone: "+1 (555) 234-5678",
    email: "sarah.johnson@sapphire.com",
    image: "/png/card-2@3x.png"
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Commercial Property Agent",
    phone: "+1 (555) 345-6789",
    email: "michael.brown@sapphire.com",
    image: "/png/card-3@3x.png"
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Residential Property Expert",
    phone: "+1 (555) 456-7890",
    email: "emily.davis@sapphire.com",
    image: "/png/card-4@3x.png"
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Investment Property Consultant",
    phone: "+1 (555) 567-8901",
    email: "david.wilson@sapphire.com",
    image: "/png/card-5@3x.png"
  },
  {
    id: 6,
    name: "Jennifer Martinez",
    position: "Property Manager",
    phone: "+1 (555) 678-9012",
    email: "jennifer.martinez@sapphire.com",
    image: "/png/card-11@3x.png"
  }
];

const OurAgents = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start">
      <PHeader />
      
      {/* Hero Section */}
      <section className="self-stretch bg-slate-900 h-[350px] flex flex-col items-center justify-center mix-blend-normal relative">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-6xl font-semibold text-white font-body-large-400 leading-[48px]">
            Our Agents
          </h1>
          <p className="text-xl text-slate-300 mt-4 font-body-large-400 leading-[28px]">
            Meet our team of expert real estate professionals
          </p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px] text-center text-primary-800 font-body-large-400">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto max-w-[1200px]">
          <h2 className="text-3xl font-semibold text-slate-800 leading-[48px]">
            Our Dedicated Team
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px]">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-[300px] bg-slate-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={agent.image} 
                  alt={agent.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 leading-[48px]">{agent.name}</h3>
                <p className="text-primary-600 font-medium mb-4 leading-[28px]">{agent.position}</p>
                <div className="space-y-2 text-slate-500 leading-[28px]">
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

        {/* CTA Section */}
        <div className="mt-8 bg-slate-900 rounded-lg p-12 text-center max-w-[1200px]">
          <h2 className="text-3xl font-semibold text-white leading-[48px] mb-4">Want to Join Our Team?</h2>
          <p className="text-xl text-slate-300 leading-[28px] mb-8">
            We're always looking for talented individuals to join our growing team.
          </p>
          <a 
            href="/contact-us"
            className="inline-block bg-primary-500 text-white px-8 py-3 rounded font-semibold hover:bg-primary-600 transition-colors leading-[28px] no-underline"
          >
            Contact Us
          </a>
        </div>
      </section>

      <PGFooter />
    </div>
  );
};

export default OurAgents;
