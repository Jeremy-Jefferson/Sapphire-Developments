import { Link } from "react-router-dom";

const PGCards = ({ onFavorite, onShare, onAddToCompare, favorites = [] }) => {
  const properties = [
    { id: 1, price: "$2,660,840", address: "2166 Marlin Ct. Miami, FL 33134", beds: 4, baths: 4, sqft: "2,096", image: "/luxury-home-1.jpg", agent: "Jenny Wilson" },
    { id: 2, price: "$890,693", address: "3455 Marvel Dr. Houston, TX 77445", beds: 4, baths: 3, sqft: "1,850", image: "/luxury-home-2.jpg", agent: "Jenny Wilson" },
    { id: 3, price: "$1,245,000", address: "789 Palm Beach Blvd, FL 33401", beds: 5, baths: 4, sqft: "2,400", image: "/luxury-home-3.jpg", agent: "Jenny Wilson" },
    { id: 4, price: "$3,500,000", address: "456 Ocean Dr. Malibu, CA 90265", beds: 6, baths: 5, sqft: "3,200", image: "/luxury-home-4.jpg", agent: "Jenny Wilson" },
    { id: 5, price: "$725,000", address: "1234 Forest Lane, TX 77001", beds: 3, baths: 2, sqft: "1,650", image: "/luxury-home-5.jpg", agent: "Jenny Wilson" },
    { id: 6, price: "$1,850,000", address: "567 Mountain View, CA 94040", beds: 5, baths: 4, sqft: "2,800", image: "/luxury-home-6.jpg", agent: "Jenny Wilson" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
      {properties.map((property) => (
        <Link 
          to={`/properties?id=${property.id}`}
          key={property.id}
          className="block bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
        >
          {/* Image - Taller crop with elegant presentation */}
          <div className="relative h-64 md:h-72 overflow-hidden">
            <img 
              src={property.image}
              alt={property.address}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Content - Refined spacing and hierarchy */}
          <div className="p-6 md:p-7">
            {/* Price - Most visually dominant */}
            <p className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight mb-2">
              {property.price}
            </p>
            
            {/* Address - Clear but secondary */}
            <p className="text-slate-700 font-light text-base md:text-lg mb-5 leading-relaxed">
              {property.address}
            </p>
            
            {/* Specs - Compact and typographic */}
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-5 pb-5 border-b border-slate-50">
              <span className="font-medium text-slate-600">{property.beds} Beds</span>
              <span className="text-slate-300">·</span>
              <span className="font-medium text-slate-600">{property.baths} Baths</span>
              <span className="text-slate-300">·</span>
              <span className="font-medium text-slate-600">{property.sqft} ft²</span>
            </div>
            
            {/* Agent - Subtle and low emphasis */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400 font-light">Listed by {property.agent}</span>
              <span className="text-slate-500 font-light text-sm group-hover:text-slate-800 transition-colors">
                View Property <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PGCards;
