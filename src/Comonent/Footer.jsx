import React, { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { email, subscribe };
    localStorage.setItem("newsletterData", JSON.stringify(formData));

    setEmail("");
    setSubscribe(false);

    alert("Your subscription data has been saved locally!");
  };

  return (
    <footer className="bg-[#2B3C2C] text-white px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left - Newsletter Form */}
        <div className="bg-white/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-serif mb-6">
            Subscribe to our Newsletter
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
           <label className="block text-sm font-medium text-gray-800 mb-2">
  Email <span className="text-red-500">*</span>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none transition"
    placeholder="Enter your email"
    required
  />
</label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={subscribe}
                onChange={(e) => setSubscribe(e.target.checked)}
                className="accent-green-700  cursor-pointer w-4 h-4"
              />
              Yes, Subscribe to the newsletter
            </label>
            <button
              type="submit"
              className="bg-[#202c21] cursor-pointer hover:bg-[#101711e5] text-white px-6 py-2 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right - Address & Social Links */}
        <div className="flex flex-col items-start md:items-end text-sm space-y-4">
          <div>
            <p>500 Terry Francine Street</p>
            <p>San Francisco, CA 94158</p>
          </div>
          <div>
            <p>Mail: info@mysite.com</p>
            <p>Tel: 123-456-7890</p>
          </div>
          <div className="flex gap-4 text-xl mt-4">
            <Facebook className="w-6 h-6 text-white  transition cursor-pointer" strokeWidth={1.5} />
  <Instagram className="w-6 h-6 text-white  transition cursor-pointer" strokeWidth={1.5} />
  <Youtube className="w-6 h-6 text-white  transition cursor-pointer" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-white mt-10 pt-4 text-xs text-gray-300 text-center">
        © 2035 by Plantlife Landscaping. Powered and secured by Wix
      </div>
    </footer>
  );
};

export default Footer;
