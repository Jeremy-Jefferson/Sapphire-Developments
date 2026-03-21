import Contact2 from "./Contact2";
import { Link } from "react-router-dom";

const PGFooter = () => {
  return (
    <section
      className="w-full overflow-hidden flex flex-row items-start justify-start p-[50px] box-border md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col"
      id="Footer"
    >
      <footer className="flex-1 shrink-0 flex flex-row items-start justify-between mix-blend-normal text-left text-5xl text-gray-black font-header-heading-4 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
        <Contact2 />
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
            <Link to="/" className="relative leading-[24px] text-gray-500 hover:text-primary-500 no-underline">Home</Link>
            <Link to="/" className="relative leading-[24px] text-gray-500 hover:text-primary-500 no-underline">Become a Host</Link>
            <Link to="/" className="relative leading-[24px] text-gray-500 hover:text-primary-500 no-underline">Pricing</Link>
            <Link to="/" className="relative leading-[24px] text-gray-500 hover:text-primary-500 no-underline">Blog</Link>
            <Link to="/" className="relative leading-[24px] text-gray-500 hover:text-primary-500 no-underline">Contact</Link>
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
            <Link to="/" className="relative leading-[24px] text-gray-500 hover:text-primary-500 no-underline">About Us</Link>
            <Link to="/" className="relative leading-[24px] text-gray-500 hover:text-primary-500 no-underline">Press</Link>
            <Link to="/" className="relative leading-[24px] text-gray-500 hover:text-primary-500 no-underline">Contact</Link>
            <Link to="/" className="relative leading-[24px] text-gray-500 hover:text-primary-500 no-underline">Careers</Link>
            <Link to="/" className="relative leading-[24px] text-gray-500 hover:text-primary-500 no-underline">Blog</Link>
          </article>
        </div>
        <div
          className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px] mix-blend-normal"
          id="Terms and policies"
        >
          <h3
            className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mix-blend-normal"
            id={`Team & Policies`}
          >
            Team and policies
          </h3>
          <article className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] mix-blend-normal text-left text-5xl text-gray-500 font-header-heading-4">
            <Link to="/" className="relative leading-[24px] mix-blend-normal text-gray-500 hover:text-primary-500 no-underline">Terms of Services</Link>
            <Link to="/" className="relative leading-[24px] mix-blend-normal text-gray-500 hover:text-primary-500 no-underline">Privacy Policy</Link>
            <Link to="/" className="relative leading-[24px] mix-blend-normal text-gray-500 hover:text-primary-500 no-underline">Security</Link>
          </article>
        </div>
      </footer>
    </section>
  );
};

export default PGFooter;
