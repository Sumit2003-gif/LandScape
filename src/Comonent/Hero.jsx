import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[#edf6ee]">
      {/* First section: text left, paragraph right */}
      <div className="flex flex-col md:flex-row md:items-end justify-between px-4 sm:px-8 md:px-16 py-8 sm:py-12 gap-6">
        
        {/* Left heading */}
        <div className="md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-fraunces font-bold text-green-900 leading-tight">
            Professional <br className="hidden sm:block" /> Landscaping <br className="hidden sm:block" /> Services
          </h1>
        </div>

        {/* Right paragraph */}
        <div className="md:w-1/2 md:text-right">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            From garden maintenance to cleanups and repairs, 
            we take great pride in our work. <br className="hidden sm:block" />
            For a free quote,{" "}
            <br className="md:hidden"/>
            <Link to="/contact" className="underline">
              contact us
            </Link>.
          </p>
        </div>
      </div>

      {/* Full width, full height image */}
      <div className="flex justify-center items-center pb-8 sm:pb-12">
        <img
          src="https://static.wixstatic.com/media/c837a6_42cfe70220fb48c795cb92fe9fe3d02a~mv2.jpg/v1/fill/w_1712,h_1053,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_42cfe70220fb48c795cb92fe9fe3d02a~mv2.jpg"
          alt="Full Width"
          className="w-[95%] sm:w-[90%] h-64 sm:h-80 md:h-[500px] lg:h-[650px] xl:h-screen object-cover rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
