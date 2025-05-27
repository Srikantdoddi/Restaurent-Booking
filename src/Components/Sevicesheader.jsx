import React from 'react';

const Servicesheader = () => {
  return (
    <div 
      className="px-4 sm:px-10 h-150 bg-cover bg-center text-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/blur-coffee-cafe-shop-restaurant-with-bokeh-background-xd_1421-472.jpg?t=st=1744887821~exp=1744891421~hmac=afc16022588c901d80dec0c015140f36adb7d7a55eab0b2437a6ccfd233dccc7&w=996')`,
      }}
    >
      <div className="text- mt-20">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
            Services Tailored to Your Needs
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-300">
            We offer a range of services designed to help you grow, streamline, and succeed.<br /> 
            Whether you're a small business, a growing startup, or an established company,<br /> our solutions are tailored to meet your needs.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center justify-center">
          <a
            href="#explore-Restaurent"
            className="w-full sm:w-auto bg-transparent border-2 border-gray-300 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 hover:text-white transition"
          >
            Explore Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Servicesheader;
