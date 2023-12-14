import Form from "./Form";

const ContactSection = () => {
  return (
    <section
      className="self-stretch bg-primary-50 flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px] text-center text-21xl text-primary-800 font-body-large-400"
      id="Contact"
    >
      <div className="flex-1 flex flex-col items-center justify-start py-0 px-2.5 box-border gap-[40px] max-w-[900px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
          <h1
            className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit"
            id="Contact Us"
          >
            Contact Us
          </h1>
          <h2
            className="m-0 self-stretch relative text-xl leading-[28px] font-normal font-inherit text-lightslategray"
            id="Sapphire Developments is committed to assisting you in finding your perfect property, contact us for a personalized real estate experience."
          >
            Sapphire Developments is committed to assisting you in finding your
            perfect property, contact us for a personalized real estate
            experience.
          </h2>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default ContactSection;
