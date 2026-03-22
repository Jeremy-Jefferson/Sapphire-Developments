import React from "react";
import PHeader from "../components/PHeader";
import Contact from "../components/Contact";
import Form from "../components/Form";
import PGFooter from "../components/PGFooter";

const ContactUs = () => {
  const address = "3411 Cummins ST, Houston, TX 77027";
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.789!2d-95.46!3d29.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c9f1c1f1f1f1%3A0x1f1f1f1f1f1f1f1!2s3411%20Cummins%20ST%2C%20Houston%2C%20TX%2077027!5e0!3m2!1sen!2sus!4v1234567890`;

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-start" id="main-content">
      <PHeader />
      
      {/* Hero Section */}
      <section className="self-stretch bg-slate-900 h-[400px] flex flex-col items-center justify-center mix-blend-normal relative overflow-hidden" aria-labelledby="contact-hero-heading">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="text-center z-10 relative">
          <h1 id="contact-hero-heading" className="text-5xl md:text-7xl font-semibold text-white font-body-large-400 leading-[48px] mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-body-large-400 leading-[28px] max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="self-stretch flex-1 flex flex-col items-center justify-start py-[60px] px-[50px] gap-[60px] text-center text-primary-800 font-body-large-400 -mt-20 relative z-20">
        <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="text-left flex flex-col gap-8 bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div>
              <h2 className="text-3xl font-semibold text-slate-800 leading-[48px] mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-slate-500 leading-[28px]">
                Have questions about our properties or need assistance? Our team is here to help you find your dream home.
              </p>
            </div>
            
            {/* Contact Card */}
            <div className="bg-primary-50 rounded-xl p-6">
              <Contact />
            </div>

            {/* Additional Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl shrink-0">
                  💬
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Live Chat</h4>
                  <p className="text-slate-500 text-sm">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl shrink-0">
                  📱
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">WhatsApp</h4>
                  <p className="text-slate-500 text-sm">+1 (555) 000-0000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-800 leading-[48px] mb-2">
              Send us a Message
            </h2>
            <p className="text-slate-500 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
            <Form />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 w-full max-w-[1200px]">
          <h2 className="text-3xl font-semibold text-slate-800 leading-[48px] mb-8">
            Find Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Map */}
            <div className="md:col-span-2 h-[450px] rounded-2xl overflow-hidden shadow-lg">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Visit Our Office</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Address</p>
                    <p className="text-slate-500">{address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                    🕐
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Office Hours</p>
                    <p className="text-slate-500">Mon - Fri: 9AM - 6PM</p>
                    <p className="text-slate-500">Sat - Sun: 10AM - 4PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Phone</p>
                    <p className="text-slate-500">1-800-SAP-PHIRE</p>
                  </div>
                </div>
              </div>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6 text-center w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 w-full max-w-[1200px]">
          <h2 className="text-3xl font-semibold text-slate-800 leading-[48px] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-left p-6 bg-slate-50 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">What are your office hours?</h3>
              <p className="text-slate-500">Our office is open Monday through Friday from 9:00 AM to 6:00 PM, and Saturday through Sunday from 10:00 AM to 4:00 PM.</p>
            </div>
            <div className="text-left p-6 bg-slate-50 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">How quickly do you respond?</h3>
              <p className="text-slate-500">We aim to respond to all inquiries within 24 hours during business days.</p>
            </div>
            <div className="text-left p-6 bg-slate-50 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Do you offer virtual tours?</h3>
              <p className="text-slate-500">Yes! We offer virtual property tours for all our listings. Contact us to schedule one.</p>
            </div>
            <div className="text-left p-6 bg-slate-50 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Can I schedule an in-person visit?</h3>
              <p className="text-slate-500">Absolutely. Contact us to schedule a private viewing of any property you're interested in.</p>
            </div>
          </div>
        </div>
      </section>

      <PGFooter />
    </main>
  );
};

export default ContactUs;
