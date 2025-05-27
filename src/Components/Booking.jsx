import React from 'react';

const Booking = ({ selectedTable, onClose }) => {
  return (
    <div className="fixed inset-0 bg-white/70 bg-opacity-50 flex items-center justify-center z-50 pt-20 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Book: {selectedTable}</h2>
        <p className="text-gray-600 mb-4">Fill in your details to reserve this table type.</p>

        {/* Booking Form */}
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="date"
            name="date"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="time"
            name="time"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <select
            name="type"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          >
            <option value="">Select Booking Type</option>
            <option>Table Reservation</option>
            <option>Private Event Booking</option>
            <option>Group Dining / Party</option>
          </select>
          <textarea
            name="message"
            rows="4"
            placeholder="Special requests or notes..."
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
