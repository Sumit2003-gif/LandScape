import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Choose = () => {
  const features = [
    "On Time, Every Time",
    "Experienced Team Members",
    "Eco-Friendly",
    "Trusted and Insured",
  ];

  const testimonials = [
    {
      text: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
      author: "Tilli Anderson, Noe Valley",
    },
    {
      text: "They delivered beyond expectations. Highly recommended!",
      author: "James Parker, San Diego",
    },
    {
      text: "Professional and reliable — exactly what I needed.",
      author: "Maria Lopez, Austin",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#f3f7f1] pt-12 sm:pt-16 md:pt-20">
      {/* WHY CHOOSE US SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-20">
        {/* Heading + Paragraph */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 sm:gap-8 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#283523] leading-snug sm:leading-tight">
            Why Choose Us
          </h1>
          <p className="text-[#283523ef] text-justify text-base sm:text-lg leading-relaxed md:w-[85%]">
            I'm a paragraph. Click here to add your own text and edit me.
            It’s easy. Just click “Edit Text” or double click me to add your
            own content and make changes to the font.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-gray-400 my-6 sm:my-8 md:my-12" />

        {/* Features in one row */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="text-base sm:text-lg md:text-xl font-serif font-semibold text-[#283523] bg-white shadow-md rounded-lg py-4 sm:py-6 px-3 sm:px-4 hover:shadow-xl hover:-translate-y-1 transition transform duration-300"
            >
              {item}
            </div>
          ))}
        </div>

        <hr className="border-gray-400 mt-8 sm:mt-10" />
      </div>

      {/* WHAT OUR CLIENTS SAY SECTION */}
      <div className="bg-[#d5e2d7d6] py-10 sm:py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#283523] leading-snug sm:leading-tight">
            What Our <br className="hidden sm:block" /> Clients Say
          </h1>

          {/* Right Testimonial */}
          <div className="relative bg-[#dde4d4b1] rounded-lg shadow-lg p-4 sm:p-6 md:p-8 min-h-[220px] sm:min-h-[260px] md:min-h-[320px] flex flex-col justify-center">
            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-2 sm:-left-6 md:-left-10 top-1/2 -translate-y-1/2 p-2 sm:p-3 hover:bg-gray-100 rounded-full transition"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>

            <button
              onClick={next}
              className="absolute right-2 sm:-right-6 md:-right-10 top-1/2 -translate-y-1/2 p-2 sm:p-3 hover:bg-gray-100 rounded-full transition"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>

            <div className="flex flex-col justify-center items-start">
              <p className="text-base sm:text-lg md:text-2xl font-serif text-gray-900 leading-relaxed mb-3 sm:mb-4">
                “{testimonials[index].text}”
              </p>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg font-medium">
                {testimonials[index].author}
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE BELOW */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12">
          <img 
            src="https://static.wixstatic.com/media/c837a6_fcf609731d0d4864952132d8ed07277e~mv2.jpg/v1/fill/w_1712,h_945,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_fcf609731d0d4864952132d8ed07277e~mv2.jpg" 
            alt="clients"
            className="w-full rounded-lg sm:rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Choose;
