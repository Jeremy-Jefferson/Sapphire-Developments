import React, { useState } from "react";
import PHeader from "../components/PHeader";
import PGFooter from "../components/PGFooter";

const galleryImages = [
  { id: 1, src: "/png/card-1@3x.png", category: "Interior", title: "Luxury Living Room" },
  { id: 2, src: "/png/card-2@3x.png", category: "Exterior", title: "Modern Villa" },
  { id: 3, src: "/png/card-3@3x.png", category: "Interior", title: "Elegant Kitchen" },
  { id: 4, src: "/png/card-4@3x.png", category: "Bedroom", title: "Master Suite" },
  { id: 5, src: "/png/card-5@3x.png", category: "Pool", title: "Private Pool" },
  { id: 6, src: "/png/card-11@3x.png", category: "Interior", title: "Modern Dining" },
  { id: 7, src: "/png/Rental 1@2x.png", category: "Apartment", title: "City Apartment" },
  { id: 8, src: "/png/Rental 2@2x.png", category: "Interior", title: "Cozy Living" },
  { id: 9, src: "/png/Rental 3@2x.png", category: "Interior", title: "Modern Interior" },
  { id: 10, src: "/png/category@3x.png", category: "Exterior", title: "Beach House" },
  { id: 11, src: "/png/property-image4@2x.png", category: "Garden", title: "Beautiful Garden" },
  { id: 12, src: "/png/property-image41@2x.png", category: "Interior", title: "Luxury Interior" },
];

const categories = ["All", "Interior", "Exterior", "Bedroom", "Pool", "Apartment", "Garden"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start">
      <PHeader />
      
      {/* Hero Section */}
      <section className="self-stretch bg-slate-900 h-[350px] flex flex-col items-center justify-center mix-blend-normal relative">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-6xl font-semibold text-white font-body-large-400 leading-[48px]">
            Gallery
          </h1>
          <p className="text-xl text-slate-300 mt-4 font-body-large-400 leading-[28px]">
            Explore our beautiful properties
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px] text-center text-primary-800 font-body-large-400">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-[1200px]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded font-semibold transition-all leading-[28px] ${
                activeCategory === category
                  ? "bg-primary-500 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-primary-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px]">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-sm font-medium leading-[28px]">{image.category}</p>
                  <h3 className="text-lg font-semibold leading-[48px]">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-slate-900/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <p className="text-sm leading-[28px]">{selectedImage.category}</p>
              <h3 className="text-xl font-semibold leading-[48px]">{selectedImage.title}</h3>
            </div>
          </div>
          <button 
            className="absolute top-4 right-4 text-white text-2xl w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}

      <PGFooter />
    </div>
  );
};

export default Gallery;
