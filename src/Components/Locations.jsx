import React from 'react';
import { GrNext } from "react-icons/gr";

const Locations = () => {
  return (
    <div
      id="Locations"  /* Add the id here for scroll functionality */
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg?t=st=1742890883~exp=1742894483~hmac=b2e8d7604780f5ac38423aa642a19a3af78172d8cd7034c393c8a87e4f5aef63&w=996')`,
      }}
    >
      <div className="px-4 sm:px-10 md:px-20 py-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-bold text-3xl text-red-700">
            Locations
          </h1>
          <p className="mt-3 text-md font-normal text-gray-700">
            Find us at your nearest favorite city!
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['Hitec City', 'Kukktpally', 'Banjara hills'].map((city, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md flex justify-between items-center rounded-md cursor-pointer transform transition duration-300 hover:-translate-y-2"
            >
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">{city}</h3>
                <p className="text-sm sm:text-base text-gray-500">Explore dining experiences in {city}.</p>
              </div>
              <GrNext color="black" size={25} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
