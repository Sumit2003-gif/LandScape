import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    navigate("/");         
    window.scrollTo(0, 0); 
    setMenuOpen(false);    // close menu if open
  };

  const menu = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#edf6ee] px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
      {/* Left Logo & Name */}
      <div 
        className="flex items-center gap-3 cursor-pointer"
        onClick={handleLogoClick}
      >
        <img
          src="https://www.designmantic.com/logo-images/172491.png?company=Company%20Name&keyword=landscape&slogan=&verify=1"
          alt="Logo"
          className="w-16 h-16 sm:w-20 sm:h-20"
        />
        <div>
          <h1 className="font-fraunces text-green-900 text-lg sm:text-2xl font-normal tracking-tight">
            Plantlife Landscaping
          </h1>
          <p className="text-xs sm:text-sm text-green-700">The Greenish Landscape</p>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {menu.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="text-green-900 cursor-pointer hover:text-purple-700 transition font-serif"
          >
            {item.name}
          </Link>
        ))}
        <a href="tel:1234567890">
          <button className="bg-green-900 text-white px-5 py-2 rounded-sm hover:bg-green-800 transition">
            Call Today
          </button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        {menuOpen ? (
          <X 
            className="w-7 h-7 text-green-900 cursor-pointer" 
            onClick={() => setMenuOpen(false)} 
          />
        ) : (
          <Menu 
            className="w-7 h-7 text-green-900 cursor-pointer" 
            onClick={() => setMenuOpen(true)} 
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#edf6ee] shadow-md flex flex-col items-start px-6 py-4 md:hidden">
          {menu.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="w-full py-2 text-green-900 hover:text-purple-700 transition font-serif border-b border-gray-200"
            >
              {item.name}
            </Link>
          ))}
          <a href="tel:1234567890" className="w-full mt-3">
            <button className="bg-green-900 w-full text-white px-5 py-2 rounded-sm hover:bg-green-800 transition">
              Call Today
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
