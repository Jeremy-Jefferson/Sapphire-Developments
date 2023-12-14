import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const CatagoryCards = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px]">
      <div
        className="relative rounded-3xs bg-white shadow-[0px_25px_50px_rgba(59,_77,_129,_0.25)] w-[312px] h-[322px] min-w-[300px] max-w-[340px]"
        id="Residential"
      >
        <article className="absolute top-[calc(50%_-_127px)] left-[calc(50%_-_134px)] h-[255px] flex flex-col items-center justify-between">
          <img
            className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
            alt=""
            src="/svg/Res House Icon.svg"
          />
          <article
            className="shrink-0 flex flex-col items-center justify-center gap-[24px] text-center text-5xl text-gray-700 font-body-large-400"
            id="Residential Property Desc."
          >
            <h1
              className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit"
              id="Residential Homes"
            >
              Residential Homes
            </h1>
            <p
              className="m-0 relative text-base leading-[24px] text-lightslategray flex items-end justify-center w-[268px]"
              id="Residential paragraph"
            >{`View residential homes for purchase. Discover wonderful family homes. `}</p>
            <Button
              className="relative"
              name="Read More"
              id="1"
              variant="outline-primary"
              size="sm"
            >
              Read More
            </Button>
          </article>
        </article>
      </div>
      <div
        className="relative rounded-3xs bg-white shadow-[0px_25px_50px_rgba(59,_77,_129,_0.25)] w-[312px] h-[322px] min-w-[300px] max-w-[340px]"
        id="Rental"
      >
        <article
          className="absolute top-[calc(50%_-_127px)] left-[calc(50%_-_134px)] h-[255px] flex flex-col items-center justify-between"
          id="Rental Props"
        >
          <img
            className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
            alt=""
            src="/svg/Rent Icon.svg"
          />
          <article
            className="shrink-0 flex flex-col items-center justify-center gap-[24px] text-center text-5xl text-gray-700 font-body-large-400"
            id="Rental Property Desc."
          >
            <h1
              className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit"
              id="Rental Properties"
            >
              Rental Properties
            </h1>
            <p
              className="m-0 relative text-base leading-[24px] text-lightslategray flex items-end justify-center w-[268px]"
              id="View rental poperties"
            >
              View rental properties. Great places to live temporarily, or rent
              to own.
            </p>
            <Button
              className="relative"
              name="Read More"
              id="2"
              variant="outline-primary"
              size="sm"
            >
              Read More
            </Button>
          </article>
        </article>
      </div>
      <div
        className="relative rounded-3xs bg-white shadow-[0px_25px_50px_rgba(59,_77,_129,_0.25)] w-[312px] h-[322px] min-w-[300px] max-w-[340px]"
        id="Vacation"
      >
        <article
          className="absolute top-[calc(50%_-_136px)] left-[calc(50%_-_134px)] h-[272px] flex flex-col items-center justify-between"
          id="Vacation"
        >
          <img
            className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
            alt=""
            src="/svg/Vacation.svg"
          />
          <article
            className="shrink-0 flex flex-col items-center justify-center gap-[24px] text-center text-5xl text-gray-700 font-body-large-400"
            id="Vacation Property Desc."
          >
            <h1
              className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit"
              id="Vacation Homes"
            >
              Vacation Homes
            </h1>
            <p
              className="m-0 relative text-base leading-[24px] text-lightslategray flex items-end justify-center w-[268px]"
              id="View Vacation Properties"
            >
              View vacation properties. Gorgeous getaways to feel at home away
              from home
            </p>
            <Button
              className="relative"
              name="Read More"
              id="3"
              variant="outline-primary"
              size="sm"
            >
              Read More
            </Button>
          </article>
        </article>
      </div>
      <div
        className="relative rounded-3xs bg-white shadow-[0px_25px_50px_rgba(59,_77,_129,_0.25)] w-[312px] h-[322px] min-w-[300px] max-w-[340px]"
        id="Luxury"
      >
        <article
          className="absolute top-[calc(50%_-_127px)] left-[calc(50%_-_134px)] h-[255px] flex flex-col items-center justify-between"
          id="Luxury"
        >
          <img
            className="max-w-full overflow-hidden h-[79px] shrink-0"
            alt=""
            src="/Luxury.svg"
          />
          <article
            className="shrink-0 flex flex-col items-center justify-center gap-[24px] text-center text-5xl text-gray-700 font-body-large-400"
            id="Luxury Property Desc."
          >
            <h1
              className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit"
              id="Luxury Properties"
            >
              Luxury Properties
            </h1>
            <p
              className="m-0 relative text-base leading-[24px] text-lightslategray flex items-end justify-center w-[268px]"
              id="View Luxury Properties"
            >
              View luxury properties. Lavish mansions and estates.
            </p>
            <Button
              className="relative"
              name="Read More"
              id="4"
              variant="outline-primary"
              size="sm"
            >
              Read More
            </Button>
          </article>
        </article>
      </div>
    </div>
  );
};

export default CatagoryCards;
