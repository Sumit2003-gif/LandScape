import React from 'react';
import { Link } from "react-router-dom"
const Services = () => {
  const data = [
    {
      url: 'https://static.wixstatic.com/media/84770f_f351bd1e056345f5881f264f5d0f60a7~mv2.jpg/v1/fill/w_544,h_364,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f351bd1e056345f5881f264f5d0f60a7~mv2.jpg',
      text: 'Lawn Care & Mowing',
    },
    {
      url: 'https://static.wixstatic.com/media/be7461f7efb4452e9a3d968060f9b631.jpg/v1/fill/w_534,h_359,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/be7461f7efb4452e9a3d968060f9b631.jpg',
      text: 'Landscape Design',
    },
    {
      url : "https://static.wixstatic.com/media/11062b_86cd9325a4f9415c83cb56b024a07ed6~mv2.jpg/v1/fill/w_534,h_359,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_86cd9325a4f9415c83cb56b024a07ed6~mv2.jpg",
      text: 'Garden Planning',
    },
    {
      url:"https://static.wixstatic.com/media/84770f_8bcef2f2e9164149964ef0cb2c32602b~mv2.jpg/v1/fill/w_534,h_359,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_8bcef2f2e9164149964ef0cb2c32602b~mv2.jpg",
      text: 'Hedges & Plants',
    },
    {
      url : "https://static.wixstatic.com/media/84770f_f52739a32bb54e4195f9e075868e0f5b~mv2.jpg/v1/fill/w_534,h_359,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f52739a32bb54e4195f9e075868e0f5b~mv2.jpg",
      text: 'Tree Planting',
    },
    {
      url:"https://static.wixstatic.com/media/c837a6_033a056787fd4a3fa64d4ae73c9ca9b6~mv2.jpg/v1/fill/w_534,h_359,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_033a056787fd4a3fa64d4ae73c9ca9b6~mv2.jpg",
      text: 'Gernal Maintenance',
    },
  ];

  return (
    <div className="bg-[#e4efe6]">
      {/* INTRO SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2  justify-between items-center">
        <h1 className="text-5xl font-serif ml-[9%] font-bold text-justify text-[#2B3C2C] leading-tight w-3/4">
          Our <br /> Services
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed w-3/4">
          I'm a paragraph. Click here to add your own text and edit me. 
          It’s easy. Just click “Edit Text” or double click me to add your own 
          content and make changes to the font.
        </p>
      </div>

      {/* BANNER IMAGE */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative">
          <img 
            src="https://static.wixstatic.com/media/c837a6_e4077a249e7944c4ad8cf8698b6a1bf5~mv2.jpg/v1/fill/w_1712,h_729,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_e4077a249e7944c4ad8cf8698b6a1bf5~mv2.jpg" 
            alt="services banner"
            className="w-full rounded-md shadow-lg"
          />
          
        </div>
      </div>

      {/* BOOK A SERVICE */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif font-bold text-[#2B3C2C] text-center mb-12">
          Book a Service
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div 
              key={index} 
              className=" bg-[#e4efe6] rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={item.url} 
                alt={item.text} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                  {item.text}
                </h2>
               
              </div>
            </div>
          ))}
        </div>
       <div className="flex justify-center items-center pt-12">
  <Link to="/contact">
    <button className="bg-[#2B3C2C] text-white px-8 py-3 rounded-lg font-medium text-lg cursor-pointer whitespace-nowrap hover:bg-[#1d281d] transition-colors shadow-md">
      Book Now
    </button>
  </Link>
</div>
      </div>
    </div>
  );
};

export default Services;
