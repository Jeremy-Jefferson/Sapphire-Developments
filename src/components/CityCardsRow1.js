import { Link } from "react-router-dom";

const CityCardsRow1 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
      <Link
        className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/public/png/card-1@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch"
        id="Card1"
        to="/properties-grid-view"
      >
        <header
          className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start z-[0] text-left text-5xl text-white font-body-large-400"
          id="Hoston, TX: 15 Listings"
        >
          <h1
            className="m-0 relative leading-[32px] font-semibold font-inherit mix-blend-normal text-inherit"
            id="Houston, TX"
          >
            <p className="m-0">Houston, TX</p>
            <p className="m-0 text-lg">15 Listings</p>
          </h1>
        </header>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/public/png/card-2@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch"
        id="Card2"
        to="/properties-grid-view"
      >
        <header
          className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start z-[0] text-left text-5xl text-white font-body-large-400"
          id="New York, NY: 21 Listings"
        >
          <h1
            className="m-0 relative leading-[32px] mix-blend-normal text-inherit font-inherit"
            id="New York, NY"
          >
            <p className="m-0 font-semibold">New York, NY</p>
            <p className="m-0 text-lg">21 Listings</p>
          </h1>
        </header>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/public/png/card-3@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch"
        id="Card3"
        to="/properties-grid-view"
      >
        <header
          className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start z-[0] text-left text-5xl text-white font-body-large-400"
          id="MIami, FL: 25 Listings"
        >
          <h1
            className="m-0 relative leading-[32px] text-inherit font-inherit"
            id="Miami, FL"
          >
            <p className="m-0 font-semibold">Miami, FL</p>
            <p className="m-0 text-lg">25 Listings</p>
          </h1>
        </header>
      </Link>
    </div>
  );
};

export default CityCardsRow1;
