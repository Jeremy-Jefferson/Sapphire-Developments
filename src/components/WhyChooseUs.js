import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🏠",
      title: "Wide Range of Properties",
      description: "From luxury estates to affordable apartments, we have properties for every budget and lifestyle."
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      description: "We offer the best deals in the market with transparent pricing and no hidden fees."
    },
    {
      icon: "🤝",
      title: "Expert Guidance",
      description: "Our experienced agents guide you through every step of your property journey."
    },
    {
      icon: "⏰",
      title: "24/7 Support",
      description: "We're always available to answer your questions and help you find your dream home."
    },
    {
      icon: "✓",
      title: "Verified Listings",
      description: "All our properties are verified and meet our high standards of quality."
    },
    {
      icon: "📋",
      title: "Easy Process",
      description: "Streamlined documentation and smooth transactions for a hassle-free experience."
    }
  ];

  return (
    <section className="self-stretch bg-white flex flex-col items-center justify-start py-[80px] px-[50px] gap-[60px]">
      <div className="max-w-[1200px] w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Us</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Discover the Sapphire Developments difference and find your perfect home with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-slate-100"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of properties and find the perfect one for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/properties"
              className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              View Properties
            </Link>
            <Link
              to="/contact-us"
              className="inline-block bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
