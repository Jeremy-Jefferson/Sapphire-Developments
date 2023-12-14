import CatagoryCards from "./CatagoryCards";

const PropertiesByCatagory = () => {
  return (
    <section
      className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0"
      id="Props By Area"
    >
      <div
        className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%]"
        id="Properties by Category"
      >
        <header
          className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px] max-w-[95%] text-center text-26xl text-primary-800 font-body-large-400"
          id="Category Header"
        >
          <h1
            className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit"
            id="Props By Area"
          >
            Properties by Category
          </h1>
          <h2
            className="m-0 self-stretch relative text-5xl leading-[28px] font-normal font-inherit text-lightslategray"
            id="Take a look at our wonderful homes, arranged by category. The four categories, rental, residential, vacation, and luxury, are below."
            Subtitle3
          >
            Take a look at our wonderful homes, arranged by category. The four
            categories, rental, residential, vacation, and luxury, are below.
          </h2>
        </header>
        <CatagoryCards />
      </div>
    </section>
  );
};

export default PropertiesByCatagory;
