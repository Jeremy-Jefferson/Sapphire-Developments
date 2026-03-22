import { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button, message, Input, Select, Tabs } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  HeartOutlined,
  ShareAltOutlined,
  PlusOutlined,
  HeartFilled,
  SearchOutlined,
  FilterOutlined,
  HomeOutlined,
  BuildOutlined,
} from "@ant-design/icons";
import PHeader from "./PHeader";
import PGCards from "./PGCards";
import PGFooter from "./PGFooter";
import { useSearchParams } from "react-router-dom";

const { Option } = Select;
const { TabPane } = Tabs;

const propertyTypes = [
  { key: "all", label: "All Properties", icon: <HomeOutlined /> },
  { key: "sale", label: "For Sale", icon: <BuildOutlined /> },
  { key: "rent", label: "For Rent", icon: <HomeOutlined /> },
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

const propertyStatuses = [
  { value: "all", label: "Any Status" },
  { value: "active", label: "Active" },
  { value: "pending", label: "Pending" },
  { value: "sold", label: "Sold" },
];

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

  // Stats for the properties page
  const stats = [
    { number: "500+", label: "Properties Available" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Expert Agents" },
    { number: "15+", label: "Years Experience" }
  ];

  // Handle favorite toggle
  const handleFavorite = (propertyId) => {
    setFavorites((prev) => {
      if (prev.includes(propertyId)) {
        message.success("Removed from favorites");
        return prev.filter((id) => id !== propertyId);
      } else {
        message.success("Added to favorites");
        return [...prev, propertyId];
      }
    });
  };

  // Handle share
  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      message.success("Link copied to clipboard!");
    }).catch(() => {
      message.error("Failed to copy link");
    });
  };

  // Handle add to compare
  const handleAddToCompare = () => {
    message.info("Added to comparison list");
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
      className="bg-white w-full min-h-screen flex flex-col items-start justify-start"
      id="Properties Grid View"
    >
      <PHeader />
      
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
          <Tabs 
            activeKey={propertyType} 
            onChange={setPropertyType}
            className="property-tabs"
          >
            {propertyTypes.map((type) => (
              <TabPane 
                tab={
                  <span className="flex items-center gap-2 px-4">
                    {type.icon}
                    {type.label}
                  </span>
                } 
                key={type.key}
              />
            ))}
          </Tabs>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="self-stretch bg-white py-6 px-4 shadow-md">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="flex-1 w-full">
              <Input
                size="large"
                placeholder="Search by location, property name..."
                prefix={<SearchOutlined className="text-slate-400" />}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full"
              />
            </div>
            
            {/* Location Filter */}
            <Select
              size="large"
              value={selectedLocation}
              onChange={setSelectedLocation}
              className="w-full md:w-48"
              placeholder="Location"
            >
              <Option value="all">All Locations</Option>
              {locationOptions.map((loc) => (
                <Option key={loc} value={loc}>{loc}</Option>
              ))}
            </Select>
            
            {/* Price Filter */}
            <Select
              size="large"
              value={selectedPrice}
              onChange={setSelectedPrice}
              className="w-full md:w-48"
              placeholder="Price"
            >
              {priceRanges.map((range) => (
                <Option key={range.value} value={range.value}>{range.label}</Option>
              ))}
            </Select>
            
            {/* Bedrooms Filter */}
            <Select
              size="large"
              value={bedrooms}
              onChange={setBedrooms}
              className="w-full md:w-32"
              placeholder="Beds"
            >
              <Option value="all">Beds</Option>
              <Option value="1">1+</Option>
              <Option value="2">2+</Option>
              <Option value="3">3+</Option>
              <Option value="4">4+</Option>
              <Option value="5">5+</Option>
            </Select>
            
            {/* More Filters Toggle */}
            <Button 
              size="large"
              icon={<FilterOutlined />}
              onClick={() => setShowFilters(!showFilters)}
              className="w-full md:w-auto"
            >
              Filters
            </Button>
          </div>
          
          {/* Extended Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-slate-500 font-medium">More filters:</span>
                <Select
                  size="medium"
                  value={bathrooms}
                  onChange={setBathrooms}
                  className="w-32"
                  placeholder="Baths"
                >
                  <Option value="all">Baths</Option>
                  <Option value="1">1+</Option>
                  <Option value="2">2+</Option>
                  <Option value="3">3+</Option>
                  <Option value="4">4+</Option>
                </Select>
                <Select
                  size="medium"
                  value={propertyStatuses.find(s => s.value === propertyType)?.value || "all"}
                  onChange={(val) => setPropertyType(val)}
                  className="w-40"
                  placeholder="Status"
                >
                  {propertyStatuses.map((status) => (
                    <Option key={status.value} value={status.value}>{status.label}</Option>
                  ))}
                </Select>
                <Button type="link" onClick={clearFilters} className="text-primary-500">
                  Clear all filters
                </Button>
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
          
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Sort by:</span>
            <Dropdown
              overlay={
                <Menu onClick={({ key }) => setSortBy(key)}>
                  <Menu.Item key="default">Default Order</Menu.Item>
                  <Menu.Item key="popular">Popular properties</Menu.Item>
                  <Menu.Item key="newest">Latest properties</Menu.Item>
                  <Menu.Item key="price-asc">Price: Low to High</Menu.Item>
                  <Menu.Item key="price-desc">Price: High to Low</Menu.Item>
                </Menu>
              }
              trigger={["click"]}
            >
              <Button className="cursor-pointer flex items-center gap-2">
                {sortBy === "default" ? "Default Order" : 
                 sortBy === "popular" ? "Popular properties" :
                 sortBy === "newest" ? "Latest properties" :
                 sortBy === "price-asc" ? "Price: Low to High" : 
                 sortBy === "price-desc" ? "Price: High to Low" : "Default Order"}
                <DownOutlined />
              </Button>
            </Dropdown>
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
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button 
            size="middle" 
            type="default" 
            icon={<ArrowLeftOutlined />} 
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          />
          <Button 
            size="middle" 
            type={currentPage === 1 ? "primary" : "default"} 
            onClick={() => handlePageChange(1)}
          >
            1
          </Button>
          <Button 
            size="middle" 
            type={currentPage === 2 ? "primary" : "default"} 
            onClick={() => handlePageChange(2)}
          >
            2
          </Button>
          <Button 
            size="middle" 
            type={currentPage === 3 ? "primary" : "default"} 
            onClick={() => handlePageChange(3)}
          >
            3
          </Button>
          <Button size="middle" type="default" disabled>
            ...
          </Button>
          <Button size="middle" type="default" disabled>
            54
          </Button>
          <Button 
            size="middle" 
            type="primary" 
            icon={<ArrowRightOutlined />} 
            onClick={() => handlePageChange(Math.min(54, currentPage + 1))}
            disabled={currentPage === 54}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="self-stretch bg-gradient-to-r from-slate-800 to-slate-900 py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let our expert agents help you find your perfect property. We have access to exclusive listings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button type="primary" size="large" className="bg-primary-500 border-primary-500 hover:bg-primary-600">
              Contact an Agent
            </Button>
            <Button size="large" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              Browse Gallery
            </Button>
          </div>
        </div>
      </section>

      <PGFooter />
    </main>
  );
};

export default PropertiesGridView;
