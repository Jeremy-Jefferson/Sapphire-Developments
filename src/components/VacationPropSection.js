import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import VacationCards from "./VacationCards";

const vacationProperties = [
  {
    id: 8,
    location: "Santorini, Greece",
    title: "Sunset View Cave House",
    price: "$680/night",
    rating: 4.8,
    reviews: 178,
    image: "/luxury-home-10.jpg",
    features: ["4 Beds", "3 Baths", "2,500 sqft"],
    featured: true
  },
  {
    id: 2,
    location: "Malibu, CA",
    title: "Luxury Beach House",
    price: "$650/night",
    rating: 4.8,
    reviews: 96,
    image: "/luxury-home-2.jpg",
    features: ["5 Beds", "4 Baths", "3,200 sqft"],
    featured: true
  },
  {
    id: 3,
    location: "Aspen, CO",
    title: "Mountain Retreat",
    price: "$550/night",
    rating: 4.7,
    reviews: 84,
    image: "/luxury-home-3.jpg",
    features: ["4 Beds", "3 Baths", "2,800 sqft"],
    featured: false
  },
  {
    id: 4,
    location: "Hawaii - Maui",
    title: "Tropical Paradise Villa",
    price: "$850/night",
    rating: 5.0,
    reviews: 215,
    image: "/luxury-home-4.jpg",
    features: ["6 Beds", "5 Baths", "4,500 sqft"],
    featured: true
  },
  {
    id: 5,
    location: "Lake Tahoe, NV",
    title: "Luxury Lakefront Cabin",
    price: "$480/night",
    rating: 4.9,
    reviews: 156,
    image: "/luxury-home-5.jpg",
    features: ["4 Beds", "3 Baths", "3,000 sqft"],
    featured: false
  },
  {
    id: 6,
    location: "Amalfi Coast, Italy",
    title: "Cliffside Mediterranean Villa",
    price: "$1,200/night",
    rating: 4.9,
    reviews: 89,
    image: "/luxury-home-6.jpg",
    features: ["5 Beds", "4 Baths", "3,800 sqft"],
    featured: true
  },
  {
    id: 7,
    location: "Bora Bora",
    title: "Overwater Bungalow Suite",
    price: "$1,500/night",
    rating: 5.0,
    reviews: 312,
    image: "/luxury-home-7.jpg",
    features: ["2 Beds", "2 Baths", "1,800 sqft"],
    featured: true
  },
  {
    id: 8,
    location: "Santorini, Greece",
    title: "Sunset View Cave House",
    price: "$680/night",
    rating: 4.8,
    reviews: 178,
    image: "/luxury-home-8.jpg",
    features: ["3 Beds", "2 Baths", "1,900 sqft"],
    featured: false
  },
  {
    id: 4,
    location: "Las Vegas, NV",
    title: "Desert Paradise",
    price: "$280/night",
    rating: 4.6,
    reviews: 156,
    image: "/png/card-41@3x.png",
    features: ["3 Beds", "2 Baths", "1,800 sqft"],
    featured: false
  }
];

const VacationPropSection = () => {
  return (
    <section
      className="self-stretch flex flex-col items-center justify-start py-16 px-4 gap-10"
      id="Latest Vacation Properties"
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-10 max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <header
          className="flex flex-col items-center justify-start gap-6 max-w-[700px] text-center"
        >
          <div className="flex items-center gap-2">
            <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
            <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Explore</span>
            <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Latest Vacation Properties
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            With emphasis on luxury and relaxation, find your home away from home with our handpicked vacation rentals.
          </p>
        </header>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {vacationProperties.map((property) => (
            <Link
              key={property.id}
              to="/properties-grid-view"
              className="group cursor-pointer relative overflow-hidden rounded-2xl h-[400px] bg-slate-100"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${property.image}')` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              
              {/* Featured Badge */}
              {property.featured && (
                <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                {/* Price */}
                <div className="text-primary-400 font-bold text-xl mb-1">
                  {property.price}
                </div>
                
                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-1">
                  {property.title}
                </h3>
                
                {/* Location */}
                <div className="flex items-center gap-1 text-slate-300 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {property.location}
                </div>
                
                {/* Features */}
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-3">
                  {property.features.map((feature, idx) => (
                    <span key={idx} className="flex items-center gap-1">
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-2 pt-3 border-t border-white/20">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white font-medium">{property.rating}</span>
                  </div>
                  <span className="text-slate-400 text-sm">({property.reviews} reviews)</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link
            to="/properties-grid-view"
            className="inline-block bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-500/30"
          >
            View All Properties
          </Link>
          <Link
            to="/contact-us"
            className="inline-block bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VacationPropSection;
