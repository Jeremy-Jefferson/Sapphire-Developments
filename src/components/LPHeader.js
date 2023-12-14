import Logo from "./Logo";
import Navigation1 from "./Navigation1";

const LPHeader = () => {
  return (
    <header
      className="self-stretch bg-white h-[98px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] z-[2] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border"
      id="Top Header (Nav)"
    >
      <header
        className="flex-1 flex flex-row items-center justify-between"
        id="HEADER"
      >
        <Logo />
        <header
          className="shrink-0 flex flex-row items-center justify-center sm:flex"
          id="NAV"
          NAV="1"
        >
          <Navigation1 />
        </header>
      </header>
    </header>
  );
};

export default LPHeader;
