import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Dropdown, Menu, Button as AntButton, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
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
    message.loading({ content: 'Searching properties...', key: 'search' });
    setTimeout(() => {
      navigate(`/properties-grid-view?${params.toString()}`);
    }, 1000);
  }, [navigate, propertyType, selectedCity, selectedPropertyType, selectedPriceRange]);

  // Create menus with click handlers
  const cityMenu = (
    <Menu>
      {cities.map((option, index) => (
        <Menu.Item 
          key={index}
          onClick={() => setSelectedCity(option.value)}
        >
          {option.value}
        </Menu.Item>
      ))}
    </Menu>
  );

  const propertyTypeMenu = (
    <Menu>
      {propertyTypes.map((option, index) => (
        <Menu.Item 
          key={index}
          onClick={() => setSelectedPropertyType(option.value)}
        >
          {option.value}
        </Menu.Item>
      ))}
    </Menu>
  );

  const priceMenu = (
    <Menu>
      {getPriceRanges().map((option, index) => (
        <Menu.Item 
          key={index}
          onClick={() => setSelectedPriceRange(option.value)}
        >
          {option.value}
        </Menu.Item>
      ))}
    </Menu>
  );

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
        <Button 
          name="Rent" 
          variant={propertyType === "rent" ? "primary" : "outline-light"}
          onClick={() => handlePropertyTypeChange("rent")}
          className={`px-8 py-2.5 rounded-full font-semibold transition-all duration-300 ${propertyType === "rent" ? "shadow-lg bg-primary-500 border-primary-500" : "text-white border-2 border-white/40 hover:bg-white/10 hover:border-white"}`}
          aria-selected={propertyType === "rent"}
          role="tab"
        >
          For Rent
        </Button>
        <Button 
          name="Sale" 
          variant={propertyType === "sale" ? "primary" : "outline-light"}
          onClick={() => handlePropertyTypeChange("sale")}
          className={`px-8 py-2.5 rounded-full font-semibold transition-all duration-300 ${propertyType === "sale" ? "shadow-lg bg-primary-500 border-primary-500" : "text-white border-2 border-white/40 hover:bg-white/10 hover:border-white"}`}
          aria-selected={propertyType === "sale"}
          role="tab"
        >
          For Sale
        </Button>
      </div>

      {/* Search Form */}
      <div className="self-stretch bg-white rounded-2xl shadow-2xl p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Location */}
          <div className="flex flex-col items-start justify-start gap-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Location
            </label>
            <Dropdown
              overlay={cityMenu}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <AntButton className="w-full h-12 justify-between flex items-center bg-slate-50 border-slate-200 hover:border-primary-400">
                {selectedCity} <DownOutlined className="text-slate-400" />
              </AntButton>
            </Dropdown>
          </div>

          {/* Property Type */}
          <div className="flex flex-col items-start justify-start gap-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Property Type
            </label>
            <Dropdown
              overlay={propertyTypeMenu}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <AntButton className="w-full h-12 justify-between flex items-center bg-slate-50 border-slate-200 hover:border-primary-400">
                {selectedPropertyType} <DownOutlined className="text-slate-400" />
              </AntButton>
            </Dropdown>
          </div>

          {/* Price Range */}
          <div className="flex flex-col items-start justify-start gap-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Price Range
            </label>
            <Dropdown
              overlay={priceMenu}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <AntButton className="w-full h-12 justify-between flex items-center bg-slate-50 border-slate-200 hover:border-primary-400">
                {selectedPriceRange} <DownOutlined className="text-slate-400" />
              </AntButton>
            </Dropdown>
          </div>

          {/* Search Button */}
          <Button
            className="h-12 px-6 cursor-pointer font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary-500 to-primary-600 border-0"
            name="Search"
            variant="primary"
            size="lg"
            onClick={onSearchCTAClick}
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </span>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default RentSale;
