import React from 'react';
import ContactHome from '../Comonent/ContactHome';

const Contact = () => {
  const locationUrl =
    "https://www.google.com/maps/place/Deal+Acres/@29.136806,75.7405534,554m/data=!3m1!1e3!4m14!1m7!3m6!1s0x391233cd232953c3:0xda346fcf716d099c!2sDeal+Acres!8m2!3d29.136806!4d75.7431337!16s%2Fg%2F11smmdtm40!3m5!1s0x391233cd232953c3:0xda346fcf716d099c!8m2!3d29.136806!4d75.7431337!16s%2Fg%2F11smmdtm40?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="bg-[#d8e4d0ba] pt-12 px-4 sm:px-6 lg:px-8">
      <ContactHome />

<h2 className=" mt-[3%] text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-green-900 mb-4 relative inline-block">
    Our Location
    <span className="block w-16 h-1 bg-green-600 mx-auto mt-2 rounded"></span>
  </h2>
  <p className="text-lg text-gray-700 font-medium tracking-wide py-[2%]">
    Visit Our Office
  </p>
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
        {/* Google Maps Embed */}
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.568665986276!2d75.6167478150694!3d29.15179728200066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39128d5115eaa2ef%3A0x2b7e5e623a321b0f!2sHisar%2C%20Haryana+125601!5e0!3m2!1sen!2sin!4v1691932394100!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>

        {/* Clickable Overlay */}
        <a
          href={locationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        >
          <span className="sr-only">Open Google Maps</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
