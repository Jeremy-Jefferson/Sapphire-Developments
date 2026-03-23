import CityCardWrapper from "./CityCardWrapper";

const PropertiesByAreaSection = () => {
  return (
    <section
      className="self-stretch flex-1 flex flex-col items-center justify-start py-20 px-4 gap-10 bg-slate-50"
      id="Props By Area"
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-10 max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <header className="flex flex-col items-center justify-start gap-6 max-w-[700px] text-center">
          <div className="flex items-center gap-3">
            <span className="w-10 h-1 bg-primary-500 rounded-full"></span>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Locations</span>
            <span className="w-10 h-1 bg-primary-500 rounded-full"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight tracking-tight">
            Properties by City
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Take a look at our gorgeous properties, grouped by city. Find your perfect location below.
          </p>
        </header>
        
        <div
          className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center gap-6 max-w-[1300px] w-full"
          id="Cards"
        >
          <CityCardWrapper />
        </div>
      </div>
    </section>
  );
};

export default PropertiesByAreaSection;
