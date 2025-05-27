import React, { useState } from 'react';

const Tableheader = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    tableType: '',
    partySize: '',
    timeSlot: '',
    specialRequest: '',
  });

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (e.g., API call, etc.)
    console.log(formData);
    alert("Reservation Submitted!");
    setIsFormOpen(false); // Close the form after submission
  };

  return (
    <div
      className="px-4 sm:px-10 h-150 bg-cover bg-center text-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://static.dezeen.com/uploads/2020/07/le-pristine-restaurant-interiors-antwerp-space-copenhagen_dezeen_hero-1.jpg')`,
      }}
    >
      <div className="text-center mt-20">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
          Reserve Your Table
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-200">
          Secure your spot and enjoy an unforgettable dining experience. <br />
          Choose your time, date, and party size—leave the rest to us.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center justify-center">
          <button
            onClick={handleOpenForm}
            className="w-full sm:w-auto border-2 border-red-700 hover:border-red-900 bg-red-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-900 transition mb-4 sm:mb-0"
          >
            Book Now
          </button>
          
        </div>
      </div>

      {/* Popup Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center z-50 mt-20">
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-red-700 mb-4">Book Your Table</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />

              {/* Table Type Selection */}
              <select
                name="tableType"
                value={formData.tableType}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              >
                <option value="">Select Table Type</option>
                <option value="Couple Table">Couple Table</option>
                <option value="Family Table">Family Table</option>
                <option value="Outdoor Seating">Outdoor Seating</option>
                <option value="Garden Side Table">Garden Side Table</option>
                <option value="Poolside Table">Poolside Table</option>
                <option value="Balcony Table">Balcony Table</option>
                <option value="2-Seater Table">2-Seater Table</option>
                <option value="4-Seater Table">4-Seater Table</option>
                <option value="6-Seater Table">6-Seater Table</option>
              </select>

              {/* Party Size Selection */}
              <select
                name="partySize"
                value={formData.partySize}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              >
                <option value="">Select Party Size</option>
                <option value="2">2 People</option>
                <option value="4">4 People</option>
                <option value="6">6 People</option>
                <option value="8">8 People</option>
                <option value="10">10 People</option>
              </select>

              <input
                type="time"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              

              {/* Special Request */}
              <textarea
                name="specialRequest"
                value={formData.specialRequest}
                onChange={handleInputChange}
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

export default Tableheader;
