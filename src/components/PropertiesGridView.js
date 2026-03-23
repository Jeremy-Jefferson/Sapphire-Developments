import { useState, useEffect } from "react";
import PGCards from "./PGCards";
import LPFooter from "./LPFooter";
import { useSearchParams } from "react-router-dom";

const PropertiesGridView = () => {
  const [searchParams] = useSearchParams();
  const [favorites, setFavorites] = useState([]);
  const [propertyType, setPropertyType] = useState(searchParams.get("type") || "all");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");
  const [bathrooms, setBathrooms] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const propertyTypes = [
    { key: "all", label: "All Properties" },
    { key: "sale", label: "For Sale" },
    { key: "rent", label: "For Rent" },
  ];

  const locationOptions = [
    "Miami, FL",
    "Los Angeles, CA",
    "New York, NY",
    "Houston, TX",
    "Chicago, IL",
  ];

  const priceRanges = [
    { value: "all", label: "Any Price" },
    { value: "0-500000", label: "Under $500K" },
    { value: "500000-1000000", label: "$500K - $1M" },
    { value: "1000000-2000000", label: "$1M - $2M" },
    { value: "2000000-5000000", label: "$2M - $5M" },
    { value: "5000000+", label: "$5M+" },
  ];

  const sortOptions = [
    { value: "default", label: "Default Order" },
    { value: "popular", label: "Popular" },
    { value: "newest", label: "Latest" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
  ];

  const propertyStatuses = [
    { value: "all", label: "Any Status" },
    { value: "active", label: "Active" },
    { value: "pending", label: "Pending" },
    { value: "sold", label: "Sold" },
  ];

  const handleFavorite = (propertyId) => {
    setFavorites((prev) => {
      if (prev.includes(propertyId)) {
        return prev.filter((id) => id !== propertyId);
      } else {
        return [...prev, propertyId];
      }
    });
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      console.log("Link copied to clipboard!");
    }).catch(() => {
      console.error("Failed to copy link");
    });
  };

  const handleAddToCompare = () => {
    console.log("Added to comparison list");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLocation("all");
    setSelectedPrice("all");
    setBedrooms("all");
    setBathrooms("all");
    setPropertyType("all");
    setSortBy("default");
    setCurrentPage(1);
  };

  return (
    <main className="bg-white w-full min-h-screen pt-20">
       
      {/* Hero Section - Refined */}
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/luxury-home-1.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
            Exceptional Properties
          </h1>
          <p className="text-lg text-white/80 font-light">
            Discover luxury homes tailored to your lifestyle
          </p>
        </div>
      </section>

      {/* Property Type Tabs */}
      <section className="bg-white py-4 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <nav className="flex space-x-8">
            {propertyTypes.map((type) => (
              <button
                key={type.key}
                onClick={() => setPropertyType(type.key)}
                className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  propertyType === type.key
                    ? 'border-slate-900 text-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {type.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Search and Filter Bar - Refined */}
      <section className="bg-slate-50 py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input - Prominent */}
            <div className="flex-1 w-full relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by location or property name..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-300 bg-white"
              />
            </div>
            
            {/* Location Filter - Subtle */}
            <SelectFilter 
              value={selectedLocation} 
              onChange={setSelectedLocation}
              options={[{value: "all", label: "All Locations"}, ...locationOptions.map(loc => ({value: loc, label: loc})) ]} 
              placeholder="Location"
              className="w-full md:w-40"
            />
            
            {/* Price Filter - Subtle */}
            <SelectFilter 
              value={selectedPrice} 
              onChange={setSelectedPrice}
              options={priceRanges} 
              placeholder="Price"
              className="w-full md:w-40"
            />
            
            {/* Bedrooms Filter - Subtle */}
            <SelectFilter 
              value={bedrooms} 
              onChange={setBedrooms}
              options={[
                {value: "all", label: "Beds"},
                {value: "1", label: "1+"},
                {value: "2", label: "2+"},
                {value: "3", label: "3+"},
                {value: "4", label: "4+"},
                {value: "5", label: "5+"}
              ]}
              placeholder="Beds"
              className="w-full md:w-28"
            />
            
            {/* More Filters Toggle */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3.5 border border-slate-200 rounded-lg hover:bg-slate-100 focus:outline-none transition-all w-full md:w-auto font-medium text-slate-600 bg-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </button>
          </div>
          
          {/* Extended Filters - Clean */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap gap-4 items-center">
              <span className="text-slate-500 text-sm">More filters:</span>
              <SelectFilter
                value={bathrooms}
                onChange={setBathrooms}
                options={[
                  {value: "all", label: "Baths"},
                  {value: "1", label: "1+"},
                  {value: "2", label: "2+"},
                  {value: "3", label: "3+"},
                  {value: "4", label: "4+"}
                ]}
                placeholder="Baths"
                className="w-28"
              />
              <SelectFilter
                value={propertyType}
                onChange={setPropertyType}
                options={propertyStatuses}
                placeholder="Status"
                className="w-36"
              />
              <button 
                onClick={clearFilters} 
                className="text-slate-500 hover:text-slate-700 text-sm underline focus:outline-none"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Sort and Results Info */}
      <section className="py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="text-slate-500 text-sm">
            Showing <span className="font-semibold text-slate-700">6</span> properties
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 px-4 py-2 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 focus:outline-none transition-all text-sm"
            >
              {sortOptions.find(opt => opt.value === sortBy)?.label || "Sort"}
              <svg className={`h-4 w-4 transition-transform ${showSort ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showSort && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-sm z-10 py-1">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setShowSort(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 focus:outline-none"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Properties Grid - Centered */}
      <section className="py-10 px-6 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <PGCards 
              onFavorite={handleFavorite} 
              onShare={handleShare}
              onAddToCompare={handleAddToCompare}
              favorites={favorites}
            />
          </div>
        </div>
      </section>

      {/* Pagination - Improved */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-center gap-2">
            <button 
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="flex items-center justify-center w-12 h-12 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {[1, 2, 3].map((page) => (
              <button 
                key={page}
                onClick={() => handlePageChange(page)}
                className={`flex items-center justify-center w-12 h-12 rounded-lg font-medium text-sm transition-all ${
                  currentPage === page 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {page}
              </button>
            ))}
            
            <span className="flex items-center px-2 text-sm text-slate-400">...</span>
            
            <button 
              onClick={() => handlePageChange(54)}
              className="flex items-center justify-center w-12 h-12 rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-sm transition-all"
            >
              54
            </button>
            
            <button 
              onClick={() => handlePageChange(Math.min(54, currentPage + 1))}
              disabled={currentPage === 54}
              className="flex items-center justify-center w-12 h-12 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      </section>

      {/* CTA Section - Client-facing */}
      <section className="bg-slate-900 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-px bg-white/20 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-light text-white mb-5">
            Can't find what you're looking for?
          </h2>
          <p className="text-white/60 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Our team has access to exclusive listings. Schedule a consultation to find your perfect property.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-white text-slate-900 font-semibold text-sm tracking-widest uppercase hover:bg-slate-100 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="px-8 py-3 border border-white/30 text-white font-light text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300">
              Browse Properties
            </button>
          </div>
        </div>
      </section>

      <LPFooter />
    </main>
  );
};

// Simple SelectFilter component - Refined styling
const SelectFilter = ({ value, onChange, options, placeholder, className = "" }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left py-3 px-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-300 transition-all pr-8 bg-white text-sm ${className}`}
      >
        <span className="block truncate text-slate-600">
          {(options.find(opt => opt.value === value)?.label) || placeholder}
        </span>
        <svg className={`absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 mt-1 w-full min-w-[160px] bg-white border border-slate-200 rounded-lg shadow-sm z-20 py-1 max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                value === option.value
                  ? 'bg-slate-100 text-slate-900 font-medium'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertiesGridView;
