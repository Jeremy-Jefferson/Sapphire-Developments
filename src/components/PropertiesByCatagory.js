import CatagoryCards from "./CatagoryCards";

const PropertiesByCatagory = () => {
  return (
    <section
      className="self-stretch bg-gradient-to-b from-primary-50 to-white flex flex-col items-center justify-start py-20 px-4"
      id="Props By Category"
    >
      <div
        className="self-stretch flex flex-col items-center justify-start gap-10 max-w-[1200px] mx-auto w-full"
        id="Properties by Category"
      >
        {/* Header */}
        <header
          className="flex flex-col items-center justify-start gap-6 max-w-[700px] text-center"
          id="Category Header"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-1 bg-primary-500 rounded-full"></span>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Browse</span>
            <span className="w-10 h-1 bg-primary-500 rounded-full"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight tracking-tight">
            Properties by Category
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Take a look at our wonderful homes, arranged by category. The four categories - rental, residential, vacation, and luxury - are below.
          </p>
        </header>
        
        <CatagoryCards />
      </div>
    </section>
  );
};

export default PropertiesByCatagory;
