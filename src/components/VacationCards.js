import CardLink from "./CardLink";

const VacationCards = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] opacity-[0.75]">
      <CardLink
        location1="Houston, TX"
        propBackgroundImage="url('/png/card-11@3x.png')"
      />
      <CardLink
        location1="New York, NY"
        propBackgroundImage="url('/png/card-21@3x.png')"
      />
      <CardLink
        location1="Los Angeles, CA"
        propBackgroundImage="url('/png/card-31@3x.png')"
      />
      <CardLink
        location1="Miami, FL"
        propBackgroundImage="url('/png/card-41@3x.png')"
      />
    </div>
  );
};

export default VacationCards;
