import CityCardsRow1 from "./CityCardsRow1";
import CityCardRow2 from "./CityCardRow2";

const CityCardWrapper = () => {
  return (
    <div
      className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]"
      id="Cards"
    >
      <CityCardsRow1 />
      <CityCardRow2 />
    </div>
  );
};

export default CityCardWrapper;
