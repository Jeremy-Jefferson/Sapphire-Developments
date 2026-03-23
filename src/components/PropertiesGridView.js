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

  // Stats for the properties page
  const stats = [
    { number: "500+", label: "Properties Available" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Expert Agents" },
    { number: "15+", label: "Years Experience" }
  ];

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
    { value: "popular", label: "Popular properties" },
    { value: "newest", label: "Latest properties" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
  ];

  const propertyStatuses = [
    { value: "all", label: "Any Status" },
    { value: "active", label: "Active" },
    { value: "pending", label: "Pending" },
    { value: "sold", label: "Sold" },
  ];

  // Handle favorite toggle
  const handleFavorite = (propertyId) => {
    setFavorites((prev) => {
      if (prev.includes(propertyId)) {
        // message.success("Removed from favorites");
        return prev.filter((id) => id !== propertyId);
      } else {
        // message.success("Added to favorites");
        return [...prev, propertyId];
      }
    });
  };

  // Handle share
  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      // message.success("Link copied to clipboard!");
      console.log("Link copied to clipboard!");
    }).catch(() => {
      // message.error("Failed to copy link");
      console.error("Failed to copy link");
    });
  };

  // Handle add to compare
  const handleAddToCompare = () => {
    // message.info("Added to comparison list");
    console.log("Added to comparison list");
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle search
  const handleSearch = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  // Clear all filters
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
    <main
      className="bg-white w-full min-h-screen flex flex-col items-start justify-start pt-20"
      id="Properties Grid View"
    >
      
      {/* Hero Section */}
      <section
        className="self-stretch h-[400px] flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 58, 138, 0.8) 100%), url('/png/category@3x.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        </div>
        <div
          className="flex flex-col items-center justify-start gap-[12px] z-10 px-4 text-center"
        >
          <h1
            className="m-0 relative text-5xl md:text-6xl font-bold text-white leading-[48px]"
          >
            Properties
          </h1>
          <h1 className="m-0 relative text-xl text-slate-300">
            <span>Home / </span>
            <span className="font-medium text-white">Properties</span>
          </h1>
        </div>
      </section>

      {/* Stats Section */}
      <section className="self-stretch bg-slate-900 py-8 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Type Tabs */}
      <section className="self-stretch bg-slate-50 py-6 px-4 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="border-b border-slate-200">
            <nav className="-mb-px flex space-x-8">
              {propertyTypes.map((type) => (
                <button
                  key={type.key}
                  onClick={() => setPropertyType(type.key)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap focus:outline-none transition-colors ${
                    propertyType === type.key
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="self-stretch bg-white py-6 px-4 shadow-md">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="flex-1 w-full relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by location, property name..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              />
            </div>
            
            {/* Location Filter */}
            <SelectFilter 
              value={selectedLocation} 
              onChange={setSelectedLocation}
              options={[{value: "all", label: "All Locations"}, ...locationOptions.map(loc => ({value: loc, label: loc})) ]} 
              placeholder="Location"
              className="w-full md:w-48"
            />
            
            {/* Price Filter */}
            <SelectFilter 
              value={selectedPrice} 
              onChange={setSelectedPrice}
              options={priceRanges} 
              placeholder="Price"
              className="w-full md:w-48"
            />
            
            {/* Bedrooms Filter */}
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
              className="w-full md:w-32"
            />
            
            {/* More Filters Toggle */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all w-full md:w-auto font-medium"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </button>
          </div>
          
          {/* Extended Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-slate-500 font-medium">More filters:</span>
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
                  className="w-32"
                />
                <SelectFilter
                  value={propertyType}
                  onChange={setPropertyType}
                  options={propertyStatuses}
                  placeholder="Status"
                  className="w-40"
                />
                <button 
                  onClick={clearFilters} 
                  className="text-primary-500 hover:text-primary-600 font-medium underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sort and Results Info */}
      <section
        className="self-stretch flex flex-col items-center justify-start pt-8 px-4 pb-4 gap-4"
      >
        <div className="w-full max-w-[1200px] flex flex-wrap items-center justify-between gap-4">
          <div className="text-slate-500">
            Showing <span className="font-semibold text-slate-700">6</span> properties
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 px-4 py-2 text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
            >
              {sortOptions.find(opt => opt.value === sortBy)?.label || "Default Order"}
              <svg className={`h-4 w-4 transition-transform ${showSort ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showSort && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-lg z-10 py-1">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setShowSort(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-1 focus:ring-primary-500 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section
        className="self-stretch flex flex-col items-center justify-start pb-8 px-4"
      >
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-row flex-wrap items-start justify-center gap-5">
            <PGCards 
              onFavorite={handleFavorite} 
              onShare={handleShare}
              onAddToCompare={handleAddToCompare}
              favorites={favorites}
            />
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section
        className="self-stretch flex flex-col items-center justify-start pb-16 px-4"
      >
        <nav className="flex flex-wrap items-center justify-center gap-1 bg-white p-2 rounded-lg shadow-sm border">
          <button 
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => handlePageChange(1)}
            className={`flex items-center justify-center w-10 h-10 rounded-lg mx-1 font-medium transition-all ${
              currentPage === 1 
                ? 'bg-primary-500 text-white shadow-md' 
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            1
          </button>
          <button 
            onClick={() => handlePageChange(2)}
            className={`flex items-center justify-center w-10 h-10 rounded-lg mx-1 font-medium transition-all ${
              currentPage === 2 
                ? 'bg-primary-500 text-white shadow-md' 
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            2
          </button>
          <button 
            onClick={() => handlePageChange(3)}
            className={`flex items-center justify-center w-10 h-10 rounded-lg mx-1 font-medium transition-all ${
              currentPage === 3 
                ? 'bg-primary-500 text-white shadow-md' 
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            3
          </button>
          <span className="flex items-center px-3 py-2 text-sm text-slate-500">...</span>
          <span className="flex items-center px-3 py-2 text-sm text-slate-500 font-medium">54</span>
          <button 
            onClick={() => handlePageChange(Math.min(54, currentPage + 1))}
            disabled={currentPage === 54}
            className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </nav>
      </section>

      {/* CTA Section */}
      <section className="self-stretch bg-gradient-to-r from-slate-800 to-slate-900 py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let our expert agents help you find your perfect property. We have access to exclusive listings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all border border-primary-500">
              Contact an Agent
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/30 transition-all backdrop-blur-sm">
              Browse Gallery
            </button>
          </div>
        </div>
      </section>

      <LPFooter />
    </main>
  );
};

// Simple SelectFilter component (Tailwind only)
const SelectFilter = ({ value, onChange, options, placeholder, className = "" }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left py-3 px-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all pr-8 ${className}`}
      >
        <span className="block truncate">
          {(options.find(opt => opt.value === value)?.label) || placeholder}
        </span>
        <svg className={`absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-20 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 focus:outline-none focus:bg-slate-50 first:rounded-t-xl last:rounded-b-xl"
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

