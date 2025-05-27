import React, { useState } from 'react';
import { IoMdPerson } from "react-icons/io";
import { MdEmail, MdCall } from "react-icons/md";
import { IoCalendarClear } from "react-icons/io5";
import { BsFillClockFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";

const Book = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSll5h44sKAh_DAxiFWXveXaEmd4LAbkjkZ5Q&s')",
      }}
    >
      <div className="w-full max-w-4xl text-white bg-opacity-75 p-8 rounded-lg shadow-lg">
        <h2 className="font-bold text-3xl sm:text-4xl text-center text-white">
          Reserve Your Table
        </h2>
        <p className="text-center text-lg text-white mt-2 mb-8">
          Please fill in the details to book your table.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Name Field */}
            <div className="relative">
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  name="name"
                  required
                  className="w-full p-3 pl-4 pr-10 text-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 rounded-lg"
                />
                <IoMdPerson size={22} className="absolute right-3 text-white" />
              </div>
            </div>

            {/* Phone Field */}
            <div className="relative">
              <div className="flex items-center border-2 border-white rounded-lg">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  name="phone"
                  required
                  className="w-full p-3 pl-4 pr-10 text-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 rounded-lg"
                />
                <MdCall size={22} className="absolute right-3 text-white" />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  required
                  className="w-full p-3 pl-4 pr-10 text-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 rounded-lg"
                />
                <MdEmail size={22} className="absolute right-3 text-white" />
              </div>
            </div>

            {/* Number of Persons Field */}
            <div className="relative">
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <input
                  type="number"
                  id="persons"
                  placeholder="Number of Persons"
                  name="persons"
                  required
                  className="w-full p-3 pl-4 pr-10 text-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 rounded-lg"
                />
                <FaPeopleGroup size={22} className="absolute right-3 text-white" />
              </div>
            </div>

            {/* Date Field */}
            <div className="relative">
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <input
                  type="date"
                  id="date"
                  placeholder="Select Date"
                  name="date"
                  required
                  className="w-full p-3 pl-4 pr-10 text-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 rounded-lg"
                />
                <IoCalendarClear size={22} className="absolute right-3 text-white" />
              </div>
            </div>

            {/* Time Field */}
            <div className="relative">
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <input
                  type="time"
                  id="time"
                  placeholder="Select Time"
                  name="time"
                  required
                  className="w-full p-3 pl-4 pr-10 text-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 rounded-lg"
                />
                <BsFillClockFill size={22} className="absolute right-3 text-white" />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-16">
            <button
              type="submit"
              className="py-2 px-6 font-medium text-lg bg-red-700 text-white rounded-md hover:bg-red-500 transition ease-in-out duration-300"
            >
              Book Now
            </button>
          </div>
        </form>

        {/* Alert Message */}
        {showAlert && (
          <div className="mt-6 p-4 text-center bg-green-500 text-white rounded-lg shadow-lg">
            <p>Your table has been successfully reserved! We'll be in touch soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
