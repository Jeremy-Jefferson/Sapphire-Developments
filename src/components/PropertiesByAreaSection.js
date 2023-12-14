import CityCardWrapper from "./CityCardWrapper";

const PropertiesByAreaSection = () => {
  return (
    <section
      className="self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px] text-center text-26xl text-primary-800 font-body-large-400"
      id="Props By Area"
    >
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto">
        <h1
          className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit"
          id="Props by Area"
        >
          Properties by City
        </h1>
        <h2
          className="m-0 self-stretch relative text-5xl leading-[28px] font-normal font-inherit text-lightslategray"
          id="Take a look at our gorgeous properties, grouped by city. Find your city below."
        >
          Take a look at our gorgeous properties, grouped by city. Find your
          city below.
        </h2>
      </div>
      <div
        className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-[95%]"
        id="Cardss"
        Cards
      >
        <CityCardWrapper />
      </div>
    </section>
  );
};

export default PropertiesByAreaSection;
