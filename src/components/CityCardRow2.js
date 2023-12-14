import { Link } from "react-router-dom";

const CityCardRow2 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
      <Link
        className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/public/png/card-4@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch"
        id="Card4"
        to="/properties-grid-view"
      >
        <header
          className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start mix-blend-normal z-[0] text-left text-5xl text-white font-body-large-400"
          id="Las Vegas, NV: 18 Listings"
        >
          <h1
            className="m-0 relative leading-[32px] text-inherit font-inherit"
            id="Las Vegas, NV"
          >
            <p className="m-0 font-semibold">Las Vegas, NV</p>
            <p className="m-0 text-lg">18 Listings</p>
          </h1>
        </header>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/public/png/card-5@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch"
        id="Card5"
        to="/properties-grid-view"
      >
        <header
          className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start z-[0] text-left text-5xl text-white font-body-large-400"
          id="Los Angeles, CA: 32 Listings"
        >
          <h1
            className="m-0 relative leading-[32px] text-inherit font-inherit"
            id="Los Angeles, CA"
          >
            <p className="m-0 font-semibold">Los Angeles, CA</p>
            <p className="m-0 text-lg">32 Listings</p>
          </h1>
        </header>
      </Link>
    </div>
  );
};

export default CityCardRow2;
