import Contact from "./Contact";

const LPFooter = () => {
  return (
    <section
      className="self-stretch flex flex-row items-start justify-start p-[50px] md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col"
      id="Footer"
    >
      <footer className="flex-1 shrink-0 flex flex-row items-start justify-between mix-blend-normal text-left text-5xl text-gray-black font-header-heading-4 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
        <Contact />
        <div
          className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px] mix-blend-normal"
          id="Features"
        >
          <h3
            className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit"
            id="Features"
          >
            Features
          </h3>
          <article className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-left text-5xl text-gray-500 font-header-heading-4">
            <span className="relative leading-[24px]">Home</span>
            <span className="relative leading-[24px]">Become a Host</span>
            <span className="relative leading-[24px]">Pricing</span>
            <span className="relative leading-[24px]">Blog</span>
            <div className="relative leading-[24px]">Contact</div>
          </article>
        </div>
        <div
          className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px] mix-blend-normal"
          id="Company"
        >
          <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mix-blend-normal">
            Company
          </h3>
          <article className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] mix-blend-normal text-left text-5xl text-gray-500 font-header-heading-4">
            <span className="relative leading-[24px]">About Us</span>
            <span className="relative leading-[24px]">Press</span>
            <span className="relative leading-[24px]">Contact</span>
            <span className="relative leading-[24px]">Careers</span>
            <span className="relative leading-[24px]">Blog</span>
          </article>
        </div>
        <div
          className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px] mix-blend-normal"
          id="Terms and Policies"
        >
          <h3
            className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mix-blend-normal"
            id={`Team & Policies`}
          >
            Team and policies
          </h3>
          <article className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] mix-blend-normal text-left text-5xl text-gray-500 font-header-heading-4">
            <span className="relative leading-[24px] mix-blend-normal">
              Terms of servies
            </span>
            <span className="relative leading-[24px] mix-blend-normal">
              Privacy Policy
            </span>
            <span className="relative leading-[24px] mix-blend-normal">
              Security
            </span>
          </article>
        </div>
      </footer>
    </section>
  );
};

export default LPFooter;
