import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react'; // Correct icon import
import { Link } from 'react-router-dom';

const Service = () => {
  const data = [
    { text: "Lawn Care & Mowing", detail: "Regular mowing, edging, and clean-up services." },
    { text: "Landscape Design", detail: "Custom garden and yard designs tailored to your needs." },
    { text: "Garden Planning", detail: "Seasonal planting plans and layout suggestions." },
    { text: "Hedges & Plants", detail: "Trimming, shaping, and plant health maintenance." }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto px-[4%] py-16 bg-[#E8F0E6]">
      {/* Section Title */}
      <h1 className="text-4xl text-[#0d210fd5] font-medium mb-10">Our Services</h1>

      {/* Service List */}
      {data.map((item, index) => (
        <div key={index} className="border-b border-gray-500">
          <div 
            className="py-6 flex justify-between items-center cursor-pointer group"
            onClick={() => toggleService(index)}
          >
            <h2 className="text-6xl font-serif text-[#283523]">{item.text}</h2>

            {/* Arrow icon on the right */}
            <ChevronRight
              className={`h-8 w-8 text-[#283523] transform transition-transform duration-300 
                ${activeIndex === index ? "rotate-90 opacity-100" : "opacity-0 group-hover:opacity-100"}
              `}
            />
          </div>

          {/* Accordion detail text */}
          {activeIndex === index && (
            <p className="pb-6 text-lg text-gray-700 max-w-2xl">
              {item.detail}
            </p>
          )}
        </div>
      ))}

      {/* Button to show extra text */}
      <div className="mt-10">
        <Link to="/services">
        <button 
          className="px-8 py-3 bg-[#283523] cursor-pointer text-white text-lg rounded-md hover:bg-[#131b10] transition"
        >
          View Services
        </button>
        </Link>

        
      </div>
    </div>
  );
};

export default Service;
