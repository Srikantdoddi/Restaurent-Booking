import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      className="px-4 sm:px-10 h-screen bg-cover bg-center text-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/pasta-ingredient-arranged-circular-frame-wooden-desk_23-2148195059.jpg?t=st=1746596306~exp=1746599906~hmac=9739b9d6b37a6c32b581196f6d023672b3b15507edd0d047fda829590e25025b&w=996')`,
      }}
    >
      <div className="text-center text-white animate-fade-in-up">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-red-700 tracking-wide leading-15 transition-opacity duration-1000">
          Book Your Next <br /> Meal in Just a Few Clicks!
        </h1>

        <p className="mt-5 text-base sm:text-lg md:text-xl font-medium text-gray-700 opacity-90 animate-fade-in-up delay-200">
          Order from your favorite local restaurants or discover <br />
          new dining experiences right from the comfort of your home.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 items-center justify-center">
          <Link
            to="/menu"
            className="w-full sm:w-auto border-2 border-red-700 hover:border-red-500 bg-red-700 text-white px-6 py-2 rounded-2xl text-lg font-semibold hover:bg-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-button-pop mb-4 sm:mb-0"
          >
            Book Now
          </Link>

          <a
            href="#Locations"
            className="w-full sm:w-auto bg-transparent border border-red-700 hover:border-red-500 text-red-700 px-6 py-2 rounded-2xl text-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-md animate-button-pop"
          >
            Explore Locations
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
