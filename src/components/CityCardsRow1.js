import { Link } from "react-router-dom";

const cities = [
  {
    id: "houston",
    name: "Houston, TX",
    listings: 15,
    image: "/png/card-1@3x.png"
  },
  {
    id: "new-york",
    name: "New York, NY",
    listings: 21,
    image: "/png/card-2@3x.png"
  },
  {
    id: "miami",
    name: "Miami, FL",
    listings: 25,
    image: "/png/card-3@3x.png"
  }
];

const CityCardsRow1 = () => {
  return (
    <div className="self-stretch grid md:grid-cols-3 gap-6 w-full">
      {cities.map((city) => (
        <Link
          key={city.id}
          className="city-card-overlay group relative rounded-2xl h-[280px] overflow-hidden bg-cover bg-center property-card"
          id={`Card-${city.id}`}
          to="/properties-grid-view"
          style={{ backgroundImage: `url('${city.image}')` }}
        >
          {/* Enhanced Gradient Overlay - Better text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-300" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
              {city.name}
            </h2>
            <p className="text-white/80 text-lg font-medium">
              {city.listings} Listings
            </p>
          </div>

          {/* Arrow indicator - Enhanced */}
          <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CityCardsRow1;
