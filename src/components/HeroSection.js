import RentSale from "./RentSale";

const HeroSection = () => {
  return (
    <section
      className="self-stretch flex flex-col items-center justify-start py-[120px] px-[30px] bg-slate-900 relative overflow-hidden"
      id="Hero Section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl opacity-20"></div>

      <div
        className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%] relative z-10"
        id="Hero Contents"
      >
        <header
          className="self-stretch flex flex-col items-center justify-center mix-blend-normal text-center text-white font-header-heading-4 md:max-w-full"
          id="Find Your Dream Home"
        >
          <h1
            className="m-0 self-stretch relative leading-[72px] font-semibold text-4xl md:text-5xl lg:text-6xl"
            id="Find Your Dream Home"
            Title="1"
          >
            <p className="font-bold">Find Your Dream Home</p>
            <p className="text-xl md:text-2xl font-normal mt-4 text-slate-200">
              Your dream home is just a click away. Find the home that fits your lifestyle below:
            </p>
          </h1>
        </header>
        <RentSale />
      </div>
    </section>
  );
};

export default HeroSection;
