import { Link } from "react-router-dom";

const categories = [
  {
    id: "residential",
    icon: "/svg/Res House Icon.svg",
    title: "Residential Homes",
    description: "View residential homes for purchase. Discover wonderful family homes.",
    link: "/properties-grid-view",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "rental",
    icon: "/svg/Rent Icon.svg",
    title: "Rental Properties",
    description: "View rental properties. Great places to live temporarily, or rent to own.",
    link: "/properties-grid-view",
    color: "from-green-500 to-green-600"
  },
  {
    id: "vacation",
    icon: "/svg/Vacation.svg",
    title: "Vacation Homes",
    description: "View vacation properties. Gorgeous getaways to feel at home away from home.",
    link: "/properties-grid-view",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "luxury",
    icon: "/Luxury.svg",
    title: "Luxury Properties",
    description: "View luxury properties. Lavish mansions and estates.",
    link: "/properties-grid-view",
    color: "from-amber-500 to-amber-600"
  }
];

const CatagoryCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px]">
      {categories.map((category) => (
        <div
          key={category.id}
          className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
        >
          {/* Icon Container */}
          <div className={`h-32 bg-gradient-to-r ${category.color} flex items-center justify-center`}>
            <img
              className="w-16 h-16 object-contain filter brightness-0 invert"
              alt={category.title}
              src={category.icon}
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col items-center text-center gap-4">
            <h2 className="text-xl font-semibold text-slate-800 group-hover:text-primary-600 transition-colors">
              {category.title}
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              {category.description}
            </p>
            <Link to={category.link} className="w-full">
              <button className="w-full px-6 py-3 rounded-full border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                Read More
              </button>
            </Link>
          </div>

          {/* Hover overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      ))}
    </div>
  );
};

export default CatagoryCards;
