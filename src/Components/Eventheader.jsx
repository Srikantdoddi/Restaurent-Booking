import React, { useState } from 'react';

const Eventheader = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    eventName: '',
    message: '',
  });

  // Handle opening the form
  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  // Handle closing the form
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setFormData({
      fullName: '',
      email: '',
      eventName: '',
      message: '',
    });
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your reservation has been submitted!');
    setIsFormOpen(false);
  };

  return (
    <div
      className="px-4 sm:px-10 h-150 bg-cover bg-center text-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/close-up-illuminated-christmas-tree-night_1048944-19310199.jpg?w=996')`,
      }}
    >
      <div className="text- mt-20">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
          Join us with <br /> our events or booked events
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-300">
          Order from your favorite local restaurants or discover <br />
          new dining experiences right from the comfort of your home.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center justify-center">
          <button
            onClick={handleOpenForm}
            className="w-full sm:w-auto border-2 border-red-700 hover:border-red-900 bg-red-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-900 transition mb-4 sm:mb-0 cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Form Popup */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 pt-25 pb-0 overflow-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-red-700 mb-4">Reserve for Event</h2>
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
              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleInputChange}
                placeholder="Event Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <input
                type="text"
                name="restaurent name"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Restaurent Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <input
                type="date"
                name="date"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Date"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <input
                type="time"
                name="time"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Time"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any special requests?"
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

export default Eventheader;
