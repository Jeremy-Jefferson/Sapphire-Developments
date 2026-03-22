import LogoIcon from "./LogoIcon";

const Contact2 = () => {
  return (
    <div
      className="h-[307px] shrink-0 flex flex-col items-start justify-between mix-blend-normal"
      id="Contact"
    >
      <LogoIcon imageDimensions="/png/logo11@2x.png" />
      <article className="w-[285px] h-40 flex flex-col items-start justify-between text-center text-5xl text-gray-300 font-header-heading-4">
        <span className="relative leading-[32px] font-semibold text-white">
          Contact Us:
        </span>
        <span className="relative text-left text-gray-300">1-800-SAP-PHIRE</span>
        <span className="relative text-left mix-blend-normal text-gray-300">
          <p className="m-0">3411 Cummins ST</p>
          <p className="m-0">Houston, TX 77027</p>
        </span>
        <span className="relative text-3xl text-gray-300">contact@sapphiredev.com</span>
      </article>
      <div className="w-[120px] h-14 flex flex-row items-center justify-center gap-4">
        <button
          className="cursor-pointer [border:none] p-3.5 bg-white/10 rounded flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
          id="LinedIn"
          aria-label="LinkedIn"
        >
          <a
            className="[text-decoration:none] relative w-5 h-5 overflow-hidden shrink-0"
            id="LinkedIn"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/jeremyejefferson/" rel="noopener noreferrer"
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/svg/vector11.svg"
            />
          </a>
        </button>
        <button
          className="cursor-pointer [border:none] p-3.5 bg-white/10 rounded w-12 h-12 flex flex-col items-center justify-center box-border hover:bg-white/20 transition-colors"
          id="GitHub"
          aria-label="GitHub"
        >
          <a
            className="[text-decoration:none] relative w-[30px] h-[30px]"
            id="Github"
            aria-label="GitHub"
            href="https://github.com/jeremy-jefferson" rel="noopener noreferrer"
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/png/github2@2x.png"
            />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact2;
