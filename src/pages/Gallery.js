import React, { useState } from "react";
import { Link } from "react-router-dom";
import PHeader from "../components/PHeader";
import PGFooter from "../components/PGFooter";

const galleryImages = [
  { id: 1, src: "/luxury-home-1.jpg", category: "Interior", title: "Luxury Living Room", location: "Miami, FL", price: "$2,500,000" },
  { id: 2, src: "/luxury-home-2.jpg", category: "Exterior", title: "Modern Villa", location: "Los Angeles, CA", price: "$4,200,000" },
  { id: 3, src: "/luxury-home-3.jpg", category: "Interior", title: "Elegant Kitchen", location: "New York, NY", price: "$3,800,000" },
  { id: 4, src: "/luxury-home-4.jpg", category: "Bedroom", title: "Master Suite", location: "Houston, TX", price: "$1,900,000" },
  { id: 5, src: "/luxury-home-5.jpg", category: "Pool", title: "Private Pool", location: "Miami, FL", price: "$5,500,000" },
  { id: 6, src: "/luxury-home-6.jpg", category: "Interior", title: "Modern Dining", location: "Chicago, IL", price: "$2,100,000" },
  { id: 7, src: "/luxury-home-7.jpg", category: "Apartment", title: "City Apartment", location: "New York, NY", price: "$1,200,000" },
  { id: 8, src: "/luxury-home-8.jpg", category: "Interior", title: "Cozy Living", location: "Los Angeles, CA", price: "$1,800,000" },
  { id: 9, src: "/luxury-home-9.jpg", category: "Interior", title: "Modern Interior", location: "Miami, FL", price: "$2,300,000" },
  { id: 10, src: "/luxury-home-10.jpg", category: "Exterior", title: "Beach House", location: "Miami, FL", price: "$6,800,000" },
  { id: 11, src: "/luxury-home-11.jpg", category: "Garden", title: "Beautiful Garden", location: "Houston, TX", price: "$1,500,000" },
  { id: 12, src: "/luxury-home-12.jpg", category: "Interior", title: "Luxury Interior", location: "Los Angeles, CA", price: "$4,100,000" },
  { id: 13, src: "/luxury-home-13.jpg", category: "Exterior", title: "Mountain Retreat", location: "Aspen, CO", price: "$8,500,000" },
  { id: 14, src: "/luxury-home-14.jpg", category: "Interior", title: "Chef's Kitchen", location: "San Francisco, CA", price: "$3,200,000" },
  { id: 15, src: "/luxury-home-15.jpg", category: "Pool", title: "Resort Style Pool", location: "Las Vegas, NV", price: "$4,500,000" },
  { id: 16, src: "/luxury-home-16.jpg", category: "Exterior", title: "Lakefront Mansion", location: "Lake Tahoe, NV", price: "$12,500,000" },
];

const categories = [
  { name: "All", count: galleryImages.length },
  { name: "Interior", count: galleryImages.filter(img => img.category === "Interior").length },
  { name: "Exterior", count: galleryImages.filter(img => img.category === "Exterior").length },
  { name: "Bedroom", count: galleryImages.filter(img => img.category === "Bedroom").length },
  { name: "Pool", count: galleryImages.filter(img => img.category === "Pool").length },
  { name: "Apartment", count: galleryImages.filter(img => img.category === "Apartment").length },
  { name: "Garden", count: galleryImages.filter(img => img.category === "Garden").length },
];

// Map new luxury images to additional property listings
const additionalProperties = [
  { id: 17, src: "/luxury-home-17.jpg", category: "Apartment", title: "Executive Estate", location: "Beverly Hills, CA", price: "$8,500,000" },
  { id: 18, src: "/luxury-home-18.jpg", category: "Interior", title: "Modern City Loft", location: "Manhattan, NY", price: "$3,200,000" },
  { id: 19, src: "/luxury-home-19.jpg", category: "Pool", title: "Mediterranean Villa", location: "Palm Beach, FL", price: "$12,000,000" },
  { id: 20, src: "/luxury-home-20.jpg", category: "Exterior", title: "Luxury Estate", location: "Malibu, CA", price: "$15,500,000" },
];

// Combine all properties for properties page
const allProperties = [...galleryImages, ...additionalProperties];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [searchQuery, setSearchQuery] = useState("");

  const filteredImages = galleryImages.filter(img => {
    const matchesCategory = activeCategory === "All" || img.category === activeCategory;
    const matchesSearch = img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentIndex = selectedImage ? filteredImages.indexOf(selectedImage) : -1;

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-start" id="main-content">
      <PHeader />
      
      {/* Hero Section */}
      <section className="self-stretch bg-slate-900 h-[350px] flex flex-col items-center justify-center relative overflow-hidden" aria-labelledby="gallery-hero-heading">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        </div>
        <div className="text-center z-10 px-4">
          <h1 id="gallery-hero-heading" className="text-5xl md:text-6xl font-semibold text-white leading-[48px]">
            Gallery
          </h1>
          <p className="text-xl text-slate-300 mt-4 leading-[28px]">
            Explore our beautiful properties
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="self-stretch bg-slate-50 py-6 px-4 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-800">50+</div>
              <div className="text-sm text-slate-500">Properties</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">12</div>
              <div className="text-sm text-slate-500">Locations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">100+</div>
              <div className="text-sm text-slate-500">Photos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">24/7</div>
              <div className="text-sm text-slate-500">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="self-stretch flex-1 flex flex-col items-center justify-start py-12 px-4 gap-8">
        {/* Search and Filter Bar */}
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-primary-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${viewMode === "list" ? "bg-primary-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                  activeCategory === cat.name
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-primary-50 hover:border-primary-300"
                }`}
              >
                {cat.name}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === cat.name ? "bg-white/20" : "bg-slate-100"
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-slate-500 mb-4">
            Showing <span className="font-semibold text-slate-700">{filteredImages.length}</span> photos
          </div>
        </div>

        {/* Gallery Grid */}
        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1200px] w-full">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="relative group cursor-pointer overflow-hidden rounded-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-primary-300 text-sm font-medium">{image.category}</p>
                  <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-slate-300 text-sm">{image.location}</span>
                    <span className="text-primary-400 font-semibold">{image.price}</span>
                  </div>
                </div>
                {/* View Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="flex flex-col gap-4 max-w-[800px] w-full">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="relative group cursor-pointer overflow-hidden rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
                onClick={() => setSelectedImage(image)}
              >
                <div className="md:w-80 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-center">
                  <p className="text-primary-600 text-sm font-medium mb-1">{image.category}</p>
                  <h3 className="text-slate-800 text-xl font-semibold mb-2">{image.title}</h3>
                  <div className="flex items-center gap-4 text-slate-500 text-sm">
                    <span className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {image.location}
                    </span>
                    <span className="text-primary-600 font-semibold text-lg">{image.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No images found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
              className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="self-stretch bg-gradient-to-r from-slate-800 to-slate-900 py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to See These Properties in Person?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Schedule a private viewing with one of our expert agents today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/properties"
              className="inline-block bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-600 hover:scale-105 transition-all duration-300"
            >
              Browse Properties
            </Link>
            <Link 
              to="/contact-us"
              className="inline-block bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-slate-900/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <button 
              className="absolute left-4 text-white text-2xl w-12 h-12 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {currentIndex < filteredImages.length - 1 && (
            <button 
              className="absolute right-4 text-white text-2xl w-12 h-12 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between mt-4 text-white">
              <div>
                <p className="text-primary-300 text-sm">{selectedImage.category}</p>
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <div className="flex items-center gap-4 mt-1 text-slate-300">
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {selectedImage.location}
                  </span>
                  <span className="text-primary-400 font-semibold text-lg">{selectedImage.price}</span>
                </div>
              </div>
              <div className="text-slate-400 text-sm">
                {currentIndex + 1} / {filteredImages.length}
              </div>
            </div>
          </div>
          <button 
            className="absolute top-4 right-4 text-white text-2xl w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <PGFooter />
    </main>
  );
};

export default Gallery;
