import React from "react";

const Potrait = () => {
  const imagesRow1 = [
    "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg",
    "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
    "https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg",
    "https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg",
  ];

  const imagesRow2 = [
    "https://images.pexels.com/photos/1201673/pexels-photo-1201673.jpeg",
    "https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg",
    "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg",
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg",
  ];

  return (
    <div className="bg-[#dde8d9cb] px-[4%] py-[4%]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ml-[3%] text-[#17270c] mb-8 sm:mb-10 drop-shadow-lg">
        Portrait Gallery
      </h1>

      <div className="max-w-7xl mx-[3%] bg-[#c8d1c4] px-4 sm:px-6 py-10 sm:py-16 rounded-md relative overflow-hidden mb-[3%]">
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg')",
            opacity: 0.3,
          }}
        ></div>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/20 rounded-md pointer-events-none"></div>

        {/* Foreground content */}
        <div className="relative z-10 space-y-6">
          {/* First row → responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {imagesRow1.map((src, index) => (
              <div
                key={`row1-${index}`}
                className="group relative overflow-hidden rounded-xl"
                style={{ height: index % 2 === 0 ? "250px" : "400px" }}
              >
                <img
                  src={src}
                  alt={`portrait-row1-${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>

          {/* Second row → responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {imagesRow2.map((src, index) => (
              <div
                key={`row2-${index}`}
                className="group relative overflow-hidden rounded-xl"
                style={{ height: index % 2 !== 0 ? "400px" : "250px" }}
              >
                <img
                  src={src}
                  alt={`portrait-row2-${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Potrait;
