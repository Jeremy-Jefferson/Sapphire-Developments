import React from "react";
import Form from "../components/Form";
import LPFooter from "../components/LPFooter";

const ContactUs = () => {
  const address = "3411 Cummins ST, Houston, TX 77027";
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.789!2d-95.46!3d29.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c9f1c1f1f1f1%3A0x1f1f1f1f1f1f1f1!2s3411%20Cummins%20ST%2C%20Houston%2C%20TX%2077027!5e0!3m2!1sen!2sus!4v1234567890`;

  return (
    <main className="min-h-screen bg-white flex flex-col items-start justify-start pt-20" id="main-content">
      
      {/* Hero Section */}
      <section className="self-stretch bg-slate-900 h-[400px] flex flex-col items-center justify-center mix-blend-normal relative overflow-hidden" aria-labelledby="contact-hero-heading">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="text-center z-10 relative px-6">
          <h1 id="contact-hero-heading" className="text-5xl md:text-7xl font-semibold text-white font-body-large-400 leading-[48px] mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-body-large-400 leading-[28px] max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="self-stretch flex-1 flex flex-col items-center justify-start py-16 lg:py-20 px-6 sm:px-8 lg:px-10 text-center text-primary-800 font-body-large-400 relative z-20">
        <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Left Column - Contact Info (40%) */}
          <div className="lg:col-span-2 text-left flex flex-col gap-6 order-2 lg:order-1">
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-3 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-base text-slate-500 leading-relaxed">
                Have questions about our properties or need assistance? Our team is here to help you find your dream home.
              </p>
            </div>
            
            {/* Contact Details - Clean and Simple */}
            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Phone</p>
                  <p className="text-slate-700 font-medium">1-800-SAP-PHIRE</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Email</p>
                  <p className="text-slate-700 font-medium">contact@sapphiredev.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Address</p>
                  <p className="text-slate-700 font-medium">3411 Cummins ST, Houston, TX 77027</p>
                </div>
              </div>
            </div>

            {/* Social Icons - Subtle */}
            <div className="pt-4">
              <p className="text-sm text-slate-400 font-medium uppercase tracking-wide mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/jeremyejefferson/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-primary-500 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/jeremy-jefferson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-primary-500 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form (60%) - Primary Focus */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-100">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-2 tracking-tight">
                  Send us a Message
                </h2>
                <p className="text-slate-500">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <Form />
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 lg:mt-20 w-full max-w-[1100px]">
          <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-8 tracking-tight text-left">
            Find Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Map */}
            <div className="md:col-span-2 h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
            
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-100 flex flex-col justify-center">
              <h3 className="text-lg font-medium text-slate-900 mb-5">Visit Our Office</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wide">Address</p>
                    <p className="text-slate-600">{address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wide">Office Hours</p>
                    <p className="text-slate-600">Mon - Fri: 9AM - 6PM</p>
                    <p className="text-slate-600">Sat - Sun: 10AM - 4PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wide">Phone</p>
                    <p className="text-slate-600">1-800-SAP-PHIRE</p>
                  </div>
                </div>
              </div>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6 text-center w-full bg-primary-500 text-white py-3.5 px-5 rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 lg:mt-20 w-full max-w-[1100px]">
          <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-8 tracking-tight text-left">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="text-left p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <h3 className="text-base font-medium text-slate-800 mb-2">What are your office hours?</h3>
              <p className="text-sm text-slate-500">Our office is open Monday through Friday from 9:00 AM to 6:00 PM, and Saturday through Sunday from 10:00 AM to 4:00 PM.</p>
            </div>
            <div className="text-left p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <h3 className="text-base font-medium text-slate-800 mb-2">How quickly do you respond?</h3>
              <p className="text-sm text-slate-500">We aim to respond to all inquiries within 24 hours during business days.</p>
            </div>
            <div className="text-left p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <h3 className="text-base font-medium text-slate-800 mb-2">Do you offer virtual tours?</h3>
              <p className="text-sm text-slate-500">Yes! We offer virtual property tours for all our listings. Contact us to schedule one.</p>
            </div>
            <div className="text-left p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <h3 className="text-base font-medium text-slate-800 mb-2">Can I schedule an in-person visit?</h3>
              <p className="text-sm text-slate-500">Absolutely. Contact us to schedule a private viewing of any property you're interested in.</p>
            </div>
          </div>
        </div>
      </section>

      <LPFooter />
    </main>
  );
};

export default ContactUs;
