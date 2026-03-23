import Form from "./Form";

const ContactSection = () => {
  return (
    <section
      className="self-stretch bg-gradient-to-b from-slate-50 to-white flex flex-row flex-wrap items-start justify-center py-20 px-4 text-center text-slate-800 font-body-large-400"
      id="Contact"
    >
      <div className="flex-1 flex flex-col items-center justify-start py-0 px-2.5 box-border gap-10 max-w-[900px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-6 max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="flex items-center gap-3">
            <span className="w-10 h-1 bg-primary-500 rounded-full"></span>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <span className="w-10 h-1 bg-primary-500 rounded-full"></span>
          </div>
          <h1
            className="m-0 self-stretch relative text-4xl md:text-5xl font-bold text-slate-800 leading-tight tracking-tight text-center"
            id="Contact Us"
          >
            Ready to Find Your Dream Home?
          </h1>
          <h2
            className="m-0 self-stretch relative text-lg md:text-xl leading-relaxed font-normal text-slate-500 text-center max-w-2xl"
            id="Sapphire Developments is committed to assisting you in finding your perfect property, contact us for a personalized real estate experience."
          >
            Have questions? Our team is here to help you find the perfect property. Reach out today for a personalized consultation.
          </h2>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default ContactSection;
