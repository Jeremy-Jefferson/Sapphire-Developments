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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {properties.map((property) => (
        <div 
          key={property.id}
          className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
        >
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <img 
              src={property.image}
              alt={property.address}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Status Badge */}
            <div className="absolute top-3 left-3 bg-slate-900/80 text-white px-2 py-1 rounded text-xs font-medium">
              For Sale
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Price - Primary emphasis */}
            <p className="text-xl font-semibold text-slate-900 mb-2">
              {property.price}
            </p>
            
            {/* Address */}
            <p className="text-slate-600 font-light text-sm mb-4 leading-relaxed">
              {property.address}
            </p>
            
            {/* Specs - Clean horizontal layout */}
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 pb-4 border-b border-slate-100">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {property.beds} beds
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                {property.baths} baths
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                {property.sqft} ft²
              </span>
            </div>
            
            {/* Agent - Subtle */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">{property.agent}</span>
              <button className="text-sm text-slate-600 font-medium hover:text-slate-900 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PGCards;
