import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import VacationCards from "./VacationCards";

const VacationPropSection = () => {
  return (
    <section
      className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px]"
      id="Latest Properties"
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%]">
        <header
          className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%] text-center text-21xl text-primary-800 font-body-large-400 lg:max-w-[95%] md:self-stretch md:w-auto"
          id="Latest Vacation Props"
        >
          <h1
            className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit"
            id="Latest Props for Rent"
          >
            Latest Vacation Properties
          </h1>
          <h2
            className="m-0 self-stretch relative text-xl leading-[28px] font-normal font-inherit text-lightslategray"
            id="With emphasis on luxury and relaxation, find your home away from home with our latest vacation properties."
          >
            With emphasis on luxury and relaxation, find your home away from
            home with our latest vacation properties.
          </h2>
        </header>
        <VacationCards />
      </div>
      <Button name="Load More" id="2" variant="primary" size="lg">
        Load More
      </Button>
    </section>
  );
};

export default VacationPropSection;
