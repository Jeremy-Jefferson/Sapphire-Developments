import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import RentalCards from "./RentalCards";

const PropertiesForRent = () => {
  return (
    <section
      className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px] text-left text-[14.51px] text-gray-700 font-body-large-400"
      id="Latest Properties"
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%] md:pl-[60px] md:pr-[60px] md:box-border">
        <header
          className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%] text-center text-21xl text-primary-800 font-body-large-400 lg:max-w-[95%] md:self-stretch md:w-auto"
          id="Latest Properties for Rent"
        >
          <h1
            className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit"
            id="Latest Props for Rent"
          >
            Latest Properties for Rent
          </h1>
          <h2
            className="m-0 self-stretch relative text-xl leading-[28px] font-normal font-inherit text-lightslategray"
            id="Take a look at the latest rental properties below. Act fast, these unbelievable rates won't last long!"
          >
            Take a look at the latest rental properties below. Act fast, these
            unbelievable rates won't last long!
          </h2>
        </header>
        <RentalCards />
      </div>
      <Button name="Load More" id="1" variant="primary" size="lg">
        Load More
      </Button>
    </section>
  );
};

export default PropertiesForRent;
