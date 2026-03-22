import { useState, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const RentSale = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [propertyType, setPropertyType] = useState(searchParams.get("type") || "rent");
  
  // State for dropdown selections
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [selectedPropertyType, setSelectedPropertyType] = useState("Select property type");
  const [selectedPriceRange, setSelectedPriceRange] = useState("Select price range");

  const handlePropertyTypeChange = useCallback((type) => {
    setPropertyType(type);
  }, []);

  // City options
  const cities = [
    { value: "Houston" },
    { value: "Las Vegas" },
    { value: "Los Angeles" },
    { value: "Miami" },
    { value: "New York" },
  ];

  // Property type options
  const propertyTypes = [
    { value: "Luxury" },
    { value: "Rental" },
    { value: "Residential" },
    { value: "Vacation" },
  ];

  // Price range options based on property type
  const getPriceRanges = () => {
    if (propertyType === "rent") {
      return [
        { value: "$500-$2,000", min: 500, max: 2000 },
        { value: "$2,000-$5,000", min: 2000, max: 5000 },
        { value: "$5,000-$10,000", min: 5000, max: 10000 },
        { value: "$10,000+", min: 10000, max: Infinity },
      ];
    } else {
      return [
        { value: "$100K-$300K", min: 100000, max: 300000 },
        { value: "$300K-$500K", min: 300000, max: 500000 },
        { value: "$500K-$1M", min: 500000, max: 1000000 },
        { value: "$1M+", min: 1000000, max: Infinity },
      ];
    }
  };

  const onSearchCTAClick = useCallback(() => {
    // Build query params
    const params = new URLSearchParams();
    params.set("type", propertyType);
    if (selectedCity !== "Select City") {
      params.set("city", selectedCity);
    }
    if (selectedPropertyType !== "Select property type") {
      params.set("propertyType", selectedPropertyType);
    }
    if (selectedPriceRange !== "Select price range") {
      const range = getPriceRanges().find(r => r.value === selectedPriceRange);
      if (range) {
        params.set("minPrice", range.min);
        params.set("maxPrice", range.max);
      }
    }
    console.log('Searching properties with params:', params.toString());
    navigate(`/properties-grid-view?${params.toString()}`);
  }, [navigate, propertyType, selectedCity, selectedPropertyType, selectedPriceRange, getPriceRanges]);

  return (
    <main
      className="self-stretch flex flex-col items-center justify-start gap-6 w-full max-w-[1000px] mx-auto"
      id="HeroMain"
    >
      {/* Rent/Sale Toggle */}
      <div
        className="flex items-center justify-center gap-2 p-1.5 bg-white/10 backdrop-blur-sm rounded-full"
        id="Buttons"
        role="tablist"
        aria-label="Property type selection"
      >
        <button 
          onClick={() => handlePropertyTypeChange("rent")}
          className={`px-8 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg ${
            propertyType === "rent" 
              ? "bg-primary-500 text-white" 
              : "bg-white/20 text-white border border-white/40 hover:bg-white/30"
          }`}
          aria-selected={propertyType === "rent"}
          role="tab"
        >
          For Rent
        </button>
        <button 
          onClick={() => handlePropertyTypeChange("sale")}
          className={`px-8 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg ${
            propertyType === "sale" 
              ? "bg-primary-500 text-white" 
              : "bg-white/20 text-white border border-white/40 hover:bg-white/30"
          }`}
          aria-selected={propertyType === "sale"}
          role="tab"
        >
          For Sale
        </button>
      </div>

      {/* Search Form */}
      <div className="self-stretch bg-white rounded-2xl shadow-2xl p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Location */}
          <SelectFilter 
            value={selectedCity} 
            onChange={setSelectedCity}
            options={cities.map(city => ({value: city.value, label: city.value}))}
            placeholder="Select City"
          />

          {/* Property Type */}
          <SelectFilter 
            value={selectedPropertyType} 
            onChange={setSelectedPropertyType}
            options={propertyTypes.map(pt => ({value: pt.value, label: pt.value}))}
            placeholder="Select property type"
          />

          {/* Price Range */}
          <SelectFilter 
            value={selectedPriceRange} 
            onChange={setSelectedPriceRange}
            options={getPriceRanges().map(pr => ({value: pr.value, label: pr.value}))}
            placeholder="Select price range"
          />

          {/* Search Button */}
          <button
            className="h-12 px-6 cursor-pointer font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl w-full"
            onClick={onSearchCTAClick}
          >
            <span className="flex items-center gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

// Simple SelectFilter component (shared from PropertiesGridView style)
const SelectFilter = ({ value, onChange, options, placeholder }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Location
      </label>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-full h-12 text-left py-3 px-4 border border-slate-200 bg-slate-50 rounded-xl hover:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all justify-between flex items-center"
        >
          <span className="block truncate">
            {value || placeholder}
          </span>
          <svg className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                {option.label || option.value}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RentSale;

