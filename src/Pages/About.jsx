import React from 'react';

const Services = () => {
  

  const members = [
    {
      img: "https://static.wixstatic.com/media/c837a6_af7aa724513d43329c71e34e37cb0374~mv2.jpg/v1/crop/x_0,y_0,w_2048,h_1350/fill/w_880,h_580,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/gettyimages-1341467690-2048x2048_edit.jpg",
      name: "Ruth Owens",
      role: "Chief Gardener",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” to make it yours.",
    },
    {
      img: "https://images.pexels.com/photos/7125432/pexels-photo-7125432.jpeg",
      name: "Jerard Lewis",
      role: "Landscape Designer",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” to make it yours.",
    },
    {
      img: "https://images.pexels.com/photos/6509147/pexels-photo-6509147.jpeg",
      name: "Sophia Brown",
      role: "Soil Specialist",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” to make it yours.",
    },
    {
      img: "https://images.pexels.com/photos/7457176/pexels-photo-7457176.jpeg",
      name: "David Green",
      role: "Irrigation Expert",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” to make it yours.",
    },
  ];

  return (
    <div className="bg-[#e4efe6]">
      
      {/* ABOUT SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <h1 className="text-5xl font-serif font-bold text-[#283523] leading-tight">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm a paragraph. Click here to add your own text and edit me. 
          It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </p>
      </div>

      {/* BANNER IMAGE */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <img 
          src="https://static.wixstatic.com/media/c837a6_e4077a249e7944c4ad8cf8698b6a1bf5~mv2.jpg/v1/fill/w_1712,h_729,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_e4077a249e7944c4ad8cf8698b6a1bf5~mv2.jpg" 
          alt="services banner"
          className="w-full rounded-lg shadow-lg"
        />
      </div>


      {/* MEET THE TEAM */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-[#283523] mb-6">
            Meet the Team
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get to know the amazing people behind our services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-[#d8dfd5] rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-serif font-bold text-gray-900">{member.name}</h2>
              <p className="text-md text-gray-600 mb-4">{member.role}</p>
              <hr className="mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Services;
