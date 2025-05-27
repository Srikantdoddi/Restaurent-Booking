import React from 'react';
import { Link } from 'react-router-dom';

import book from '../assets/restaurent.jpg';
import gathering from '../assets/social.jpg';
import dine from '../assets/dining.jpg';

const Services = () => {
  return (
    <div
      className="bg-red-100 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://t3.ftcdn.net/jpg/02/44/17/82/360_F_244178265_NP4S8WdlZRGYVSkVkxhtiDonSfQPAbyO.jpg")',
      }}
    >
      <div className="px-6 sm:px-10 py-16">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="font-bold text-3xl text-red-700">Our Services</h2>
          <p className="mt-3 text-md font-normal text-gray-700">
            We offer exceptional dine-in, takeaway, delivery,<br />and catering services to make every meal memorable.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-md shadow-lg border border-red-50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:border-red-300">
            <img
              src={book}
              alt="Book Restaurants"
              className="rounded-t-md w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-bold text-xl text-red-700">Book Restaurants</h3>
              <p className="mt-2 text-base font-light text-gray-600">
                Easily manage and track all restaurant bookings in one place. View upcoming reservations,
                check customer details, and ensure smooth dining experiences for every guest.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-md shadow-lg border border-red-50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:border-red-300">
            <img
              src={gathering}
              alt="Social Gatherings"
              className="rounded-t-md w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-bold text-xl text-red-700">Social Gatherings</h3>
              <p className="mt-2 text-base font-light text-gray-600">
                Manage social gatherings with ease—from private parties to corporate events. Stay organized with event schedules, guest lists, and venue details all in one place.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-md shadow-lg border border-red-50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:border-red-300">
            <img
              src={dine}
              alt="Dining Experiences"
              className="rounded-t-md w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-bold text-xl text-red-700">Dining Experiences</h3>
              <p className="mt-2 text-base font-light text-gray-600">
                Elevate every dining experience by ensuring seamless table bookings, curated menus, and exceptional ambiance tailored to customer preferences.
              </p>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-16 text-center animate-slide-up">
          <Link to="/services">
            <button
              className="border-2 border-red-700 bg-red-700 text-white px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300 hover:bg-red-500 hover:border-red-500 cursor-pointer"
            >
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
