import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const ContactHome = () => {
  const [dateTime, setDateTime] = useState(null);
const services = ["Home Cleaning", "Gardening", "Plumbing", "Painting"];

  return (
    <div className="bg-[#a9bca65b] min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Left: Header Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#092507f3] leading-tight">
            Schedule an <br /> 
            <span className="text-green-700">Intro Call</span>
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            I'm a paragraph. Click here to add your own text and edit me. 
            It’s easy — just click “Edit Text” or double-click me to add your own content 
            and customize the style to match your brand.
          </p>
        </div>

        {/* Right: Form Section */}
        <div className="flex-1 flex justify-center">
          <form className="bg-[#c7d0c2] shadow-xl rounded-2xl p-8 w-full max-w-md space-y-8">
            
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name *
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 transition"
                  />
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name *
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 transition"
                  />
                </label>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email *
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 transition"
                  />
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone *
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 transition"
                  />
                </label>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City *
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 transition"
                  />
                </label>
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700">
    Services *
    <select
      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 transition"
      required
    >
      <option value="" className='bg-[#283523] text-gray-50'>-- Select a service --</option>
      {services.map((service, idx) => (
        <option key={idx} className="bg-[#283523] text-gray-50" value={service.toLowerCase()}>
          {service}
        </option>
      ))}
    </select>
  </label>
              </div>
            </div>

            {/* Calendar Section */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-[#283523] mb-3">
                Schedule an Intro Call
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                Pick a date and time that works for you.
              </p>
              <label className="block text-sm font-medium text-gray-700">
                Select Date & Time *
                <Flatpickr
                  value={dateTime}
                  onChange={(date) => setDateTime(date)}
                  options={{
                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                    minDate: "today",
                  }}
                  className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 transition"
                />
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#283523] cursor-pointer text-white text-lg font-medium py-3 rounded-xl hover:bg-[#182214] transition shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
