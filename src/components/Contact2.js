import LogoIcon from "./LogoIcon";

const Contact2 = () => {
  return (
    <div
      className="h-[307px] shrink-0 flex flex-col items-start justify-between mix-blend-normal"
      id="Contact"
    >
      <LogoIcon imageDimensions="/png/logo11@2x.png" />
      <article className="w-[285px] h-40 flex flex-col items-start justify-between text-center text-5xl text-gray-500 font-header-heading-4">
        <span className="relative leading-[32px] font-semibold text-gray-black">
          Contact Us:
        </span>
        <span className="relative text-left">1-800-SAP-PHIRE</span>
        <span className="relative text-left mix-blend-normal">
          <p className="m-0">{`5874 Sapphire Dr. `}</p>
          <p className="m-0">Houston, TX 75874</p>
        </span>
        <span className="relative text-3xl">contact@sapphiredev.com</span>
      </article>
      <div className="w-[285px] h-14 flex flex-row items-center justify-between">
        <button
          className="cursor-pointer [border:none] p-3.5 bg-primary-50 rounded flex flex-col items-center justify-center"
          preload
        >
          <a
            className="[text-decoration:none] relative w-5 h-5"
            id="FB Icon"
            href="https://www.facebook.com/jeremyejefferson/"
            target="_blank"
          >
            <img
              className="absolute h-[108.5%] w-6/12 top-[-4%] right-[25%] bottom-[-4.5%] left-[25%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/svg/vector.svg"
            />
          </a>
        </button>
        <button
          className="cursor-pointer [border:none] p-3.5 bg-primary-50 rounded flex flex-col items-center justify-center"
          id="LinedIn"
        >
          <a
            className="[text-decoration:none] relative w-5 h-5 overflow-hidden shrink-0"
            id="LinkedIn"
            href="https://www.linkedin.com/in/jeremyejefferson/"
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/svg/vector11.svg"
            />
          </a>
        </button>
        <button
          className="cursor-pointer [border:none] p-3.5 bg-primary-50 rounded flex flex-col items-center justify-center"
          id="IG"
        >
          <a
            className="[text-decoration:none] relative w-5 h-5 overflow-hidden shrink-0"
            href="https://www.instagram.com/jeremyejefferson/"
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/svg/vector21.svg"
            />
          </a>
        </button>
        <button
          className="cursor-pointer [border:none] p-3.5 bg-primary-50 rounded w-12 h-12 flex flex-col items-center justify-center box-border"
          id="GitHub"
        >
          <a
            className="[text-decoration:none] relative w-[30px] h-[30px]"
            id="Github"
            href="https://github.com/jeremy-jefferson"
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
