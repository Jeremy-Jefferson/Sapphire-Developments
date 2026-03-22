import Logo from "./Logo";
import Navigation1 from "./Navigation1";
import MobileNav from "./MobileNav";

const LPHeader = () => {
  return (
    <header
      className="self-stretch bg-white h-auto min-h-[80px] flex flex-row items-center justify-center py-4 px-4 md:px-8 lg:px-20 box-border sticky w-full top-[0] z-[100] shadow-sm"
      id="Top Header (Nav)"
    >
      <div
        className="flex-1 flex flex-row items-center justify-between max-w-[1400px] w-full"
        id="HEADER"
      >
        <Logo />
        <div
          className="shrink-0 flex flex-row items-center justify-center"
          id="NAV"
        >
          {/* Desktop Navigation - shows on lg screens and above */}
          <div className="hidden lg:block">
            <Navigation1 />
          </div>
          {/* Mobile Navigation - shows on screens smaller than lg */}
          <div className="lg:hidden">
            <MobileNav variant="landing" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default LPHeader;
