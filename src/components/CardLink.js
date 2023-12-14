import { useMemo } from "react";
import { Link } from "react-router-dom";

const CardLink = ({ location1, propBackgroundImage }) => {
  const card1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <Link
      className="cursor-pointer [text-decoration:none] flex-1 rounded-md h-[426px] flex flex-col items-center justify-end p-6 box-border bg-[url('/public/png/card-11@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px]"
      to="/properties-grid-view"
      style={card1Style}
    >
      <footer className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
        <fieldset className="flex flex-row items-start justify-end gap-[8px] text-left text-base text-white font-body-large-400">
          <img className="relative w-6 h-6" alt="" src="/svg/pin(icon).svg" />
          <small className="relative leading-[24px] font-medium">
            {location1}
          </small>
        </fieldset>
        <fieldset className="flex flex-row items-start justify-end gap-[8px] text-left text-base text-white font-body-large-400">
          <img className="relative w-6 h-6" alt="" src="/svg/arrowsout1.svg" />
          <small className="relative leading-[24px] font-medium">12000</small>
        </fieldset>
      </footer>
    </Link>
  );
};

export default CardLink;
