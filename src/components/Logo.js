const Logo = () => {
  return (
    <div className="relative w-[199px] h-14" id="LOGO">
      <img
        className="absolute h-full w-[97.19%] top-[0%] right-[2.81%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/png/logo@2x.png"
      />
      <img
        className="absolute h-[20.89%] w-[5.98%] top-[0%] right-[0%] bottom-[79.11%] left-[94.02%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/png/copyright@2x.png"
      />
    </div>
  );
};

export default Logo;
