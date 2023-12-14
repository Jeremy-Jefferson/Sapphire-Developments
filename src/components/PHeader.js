import Logo from "./Logo";
import Navigation2 from "./Navigation2";

const PHeader = () => {
  return (
    <header
      className="self-stretch bg-white h-[98px] flex flex-row items-center justify-center py-[22px] px-20 box-border mix-blend-normal sticky w-full top-[0] [background:white] z-[2] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border"
      id="Header (Top Nav)2"
    >
      <header
        className="flex-1 flex flex-row items-center justify-between mix-blend-normal"
        id="HEADER"
      >
        <Logo />
        <div
          className="shrink-0 flex flex-row items-center justify-center sm:flex"
          id="NAV"
          NAV="1"
        >
          <Navigation2 />
        </div>
      </header>
    </header>
  );
};

export default PHeader;
