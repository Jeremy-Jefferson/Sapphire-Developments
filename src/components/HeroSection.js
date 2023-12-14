import RentSale from "./RentSale";

const HeroSection = () => {
  return (
    <section
      className="self-stretch flex flex-col items-center justify-start py-[120px] px-[30px] bg-[url('/public/png/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top]"
      id="Hero Section"
    >
      <div
        className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%]"
        id="Hero Contents"
      >
        <header
          className="self-stretch flex flex-col items-center justify-start mix-blend-normal text-center text-45xl text-white font-header-heading-4 md:max-w-full"
          id="Find Your Dream Home"
        >
          <h1
            className="m-0 self-stretch relative leading-[72px] mix-blend-normal text-inherit font-inherit"
            id="Find Your Dream Home"
            Title="1"
          >
            <p className="m-0 font-semibold">Find Your Dream Home</p>
            <p className="m-0 text-13xl">
              {" "}
              Your dream home is just a click away, find the home that fits your
              lifestyle below:
            </p>
          </h1>
        </header>
        <RentSale />
      </div>
    </section>
  );
};

export default HeroSection;
