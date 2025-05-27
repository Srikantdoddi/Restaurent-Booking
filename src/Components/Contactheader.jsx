import React from 'react';

const Contactheader = () => {
  return (
    <div
      className="px-4 sm:px-10 h-[600px] bg-cover bg-center text-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/plain-black-background-examinations_1020697-417759.jpg?w=996')`,
      }}
    >
      <div className="mt-20">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Contact Us -<br /> We're Here to Serve You!
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-300">
          Have a question or want to make a reservation? <br />
          Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center justify-center">
          <a
            href="#Contact"
            className="w-full sm:w-auto bg-red-700 border-2 border-red-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-900 hover:text-white transition"
          >
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactheader;
