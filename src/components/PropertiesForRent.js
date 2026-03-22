import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const rentalProperties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    location: "713 Arturo Ln. Los Angeles, CA 90401",
    price: "$2,500/month",
    image: "/luxury-home-13.jpg",
    beds: 2,
    baths: 2,
    sqft: 1200,
    agent: { name: "Jenny Wilson", image: "/png/ellipse-12@2x.png" },
    featured: true,
    available: true
  },
  {
    id: 2,
    title: "Luxury Penthouse Suite",
    location: "456 Park Ave. New York, NY 10022",
    price: "$5,800/month",
    image: "/luxury-home-14.jpg",
    beds: 3,
    baths: 3,
    sqft: 2500,
    agent: { name: "John Smith", image: "/png/ellipse-11@2x.png" },
    featured: true,
    available: true
  },
  {
    id: 3,
    title: "Cozy Suburban Home",
    location: "123 Oak Street. Houston, TX 77001",
    price: "$1,800/month",
    image: "/luxury-home-15.jpg",
    beds: 4,
    baths: 2,
    sqft: 1800,
    agent: { name: "Sarah Johnson", image: "/png/ellipse-1@2x.png" },
    featured: false,
    available: true
  },
  {
    id: 4,
    title: "Waterfront Condo",
    location: "789 Beach Rd. Miami, FL 33101",
    price: "$3,200/month",
    image: "/luxury-home-16.jpg",
    beds: 2,
    baths: 2,
    sqft: 1500,
    agent: { name: "Michael Brown", image: "/png/ellipse-111@2x.png" },
    featured: false,
    available: true
  },
  {
    id: 5,
    title: "Executive Estate Home",
    location: "555 Beverly Hills, CA 90210",
    price: "$8,500/month",
    image: "/luxury-home-17.jpg",
    beds: 5,
    baths: 4,
    sqft: 4200,
    agent: { name: "Emily Davis", image: "/png/ellipse-12@2x.png" },
    featured: true,
    available: true
  },
  {
    id: 6,
    title: "Modern City Loft",
    location: "888 Manhattan Ave, NY 10001",
    price: "$4,200/month",
    image: "/luxury-home-18.jpg",
    beds: 2,
    baths: 2,
    sqft: 1800,
    agent: { name: "David Wilson", image: "/png/ellipse-11@2x.png" },
    featured: false,
    available: true
  },
  {
    id: 7,
    title: "Mediterranean Villa",
    location: "234 Palm Beach, FL 33401",
    price: "$12,000/month",
    image: "/luxury-home-19.jpg",
    beds: 6,
    baths: 5,
    sqft: 5500,
    agent: { name: "Lisa Anderson", image: "/png/ellipse-1@2x.png" },
    featured: true,
    available: true
  },
  {
    id: 8,
    title: "Downtown Luxury Suite",
    location: "100 Chicago Loop, IL 60601",
    price: "$3,800/month",
    image: "/luxury-home-20.jpg",
    beds: 3,
    baths: 2,
    sqft: 2100,
    agent: { name: "Robert Martinez", image: "/png/ellipse-111@2x.png" },
    featured: false,
    available: true
  }
];

const PropertiesForRent = () => {
  return (
    <section
      className="self-stretch flex flex-col items-center justify-start py-16 px-4 gap-10 bg-slate-50"
      id="Latest Properties for Rent"
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-10 max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <header
          className="flex flex-col items-center justify-start gap-6 max-w-[700px] text-center"
        >
          <div className="flex items-center gap-2">
            <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
            <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Available Now</span>
            <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Latest Properties for Rent
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Take a look at the latest rental properties below. Act fast, these unbelievable rates won't last long!
          </p>
        </header>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {rentalProperties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={property.title}
                  src={property.image}
                />
                {property.featured && (
                  <div className="absolute top-3 left-3 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                {!property.available && (
                  <div className="absolute top-3 right-3 bg-slate-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Rented
                  </div>
                )}
                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Price */}
                <div className="text-primary-600 font-bold text-lg mb-1">
                  {property.price}
                </div>
                
                {/* Title */}
                <h3 className="text-slate-800 font-semibold text-base mb-1 group-hover:text-primary-600 transition-colors">
                  {property.title}
                </h3>
                
                {/* Location */}
                <div className="flex items-center gap-1 text-slate-500 text-sm mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="truncate">{property.location}</span>
                </div>
                
                {/* Features */}
                <div className="flex items-center gap-3 text-slate-500 text-sm mb-4 pb-3 border-b border-slate-100">
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {property.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    {property.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {property.sqft} sqft
                  </span>
                </div>
                
                {/* Agent */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-8 h-8 rounded-full object-cover"
                      alt={property.agent.name}
                      src={property.agent.image}
                    />
                    <span className="text-sm text-slate-600 font-medium">{property.agent.name}</span>
                  </div>
                  <Link
                    to="/properties-grid-view"
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link
            to="/properties-grid-view"
            className="inline-block bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-500/30"
          >
            View All Rentals
          </Link>
          <Link
            to="/contact-us"
            className="inline-block bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
          >
            Contact Agent
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertiesForRent;
