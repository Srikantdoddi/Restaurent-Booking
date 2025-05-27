import React, { useState } from 'react';

const tables = [
  {
    title: "Couple Table",
    description: "A cozy setup perfect for date nights and anniversaries.",
    image: "https://www.shutterstock.com/image-photo/couple-eating-dessert-restaurant-260nw-201695777.jpg",
    buttonText: "Reserve for Two",
  },
  {
    title: "Family Table",
    description: "Spacious seating for up to 6-8 guests, ideal for families.",
    image: "https://thumbs.dreamstime.com/b/happy-family-grandparents-sitting-dining-table-home-67745400.jpg",
    buttonText: "Book Family Table",
  },
  {
    title: "Outdoor Seating",
    description: "Enjoy your meal with fresh air and scenic views.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/4b/05/2b/mediterranean-cuisine.jpg",
    buttonText: "Dine Outdoors",
  },
  {
    title: "Garden Side Table",
    description: "Lush garden surroundings for a peaceful meal.",
    image: "https://images.squarespace-cdn.com/content/v1/55bebb51e4b036c52ebe8c45/1564764765426-ZV1A8JN7LQRLOURRDW01/backyard+dining+set",
    buttonText: "Book Garden Table",
  },
  {
    title: "Poolside Table",
    description: "Relax with a pool view and refreshing ambiance.",
    image: "https://cdn.togetherv.com/poolside%20candlelight%20dinner%20main_1579950971.jpg",
    buttonText: "Book Poolside",
  },
  {
    title: "Balcony Table",
    description: "Elevated experience with cityscape views.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnosY6DR-rR8vAsC2Vs4WGjDn2V8OytaqnSQ&s",
    buttonText: "Book Balcony",
  },
  {
    title: "2-Seater table",
    description: "Safe, colorful space for families with kids.",
    image: "https://www.duraster.com/cdn/shop/products/Xoteak-Dining-Table-2-Seater-01_f8ec38d1-382d-4542-85e6-e5341412ca10.jpg?v=1674728119",
    buttonText: "Book a table",
  },
  {
    title: "4-Seater table",
    description: "Warm up your evening with cozy vibes.",
    image: "https://m.media-amazon.com/images/I/71YyfuwxQ1L._AC_UF894,1000_QL80_.jpg",
    buttonText: "Book a table",
  },
  {
    title: "6-Seater table",
    description: "Warm up your evening with cozy vibes.",
    image: "https://m.media-amazon.com/images/I/91sGuTqHYPL._AC_UF894,1000_QL80_.jpg",
    buttonText: "Book a table",
  },
];

const TablesCard = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleOpenForm = (table) => {
    setSelectedTable(table);
  };

  const handleCloseForm = () => {
    setSelectedTable(null);
  };

  return (
    <div className="px-20 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-red-700 mb-4">Table Options</h2>
      <p className="text-center text-gray-600 mb-12">
        Choose your perfect spot for an unforgettable dining experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {tables.map((table, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg flex flex-col"
          >
            <img
              src={table.image}
              alt={table.title}
              className="w-full h-44 object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-2">{table.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{table.description}</p>
              </div>
              <button
                onClick={() => handleOpenForm(table)}
                className="mt-auto bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all"
              >
                {table.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {selectedTable && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center z-50 overflow-y-auto ">
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-red-700 mb-4">Book: {selectedTable.title}</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <input
                type="text"
                placeholder="Restaurent Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <input
                type="date"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <input
                type="time"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <textarea
                placeholder="Any special request?"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
                rows={3}
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablesCard;
