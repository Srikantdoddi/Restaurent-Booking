// components/RestaurantProfile.jsx
import React, { useState } from "react";

const Restaurantsetting = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    contact: "",
    address: "",
    openTime: "",
    closeTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile submitted:", formData);
    alert("Profile updated successfully!");
    // Add API call here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-20 py-20">
      <div className="bg-white rounded-xl flex flex-col lg:flex-row overflow-hidden shadow-lg">
        {/* Side Banner */}
        <div
          className="relative bg-cover bg-center p-6 lg:w-1/3 flex flex-col justify-center "
          style={{
            backgroundImage:
              "url('https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-3d-render-of-the-interior-of-a-cozy-cafe-restaurant-image_3811953.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50 bg-opacity-70"></div>

          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-bold mb-4">Manage Profile</h2>
            <p className="text-sm">
              Keep your restaurant information updated so your customers always know where and when to find you!
            </p>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-6 lg:w-2/3 space-y-5">
          <h3 className="text-xl font-semibold text-red-700 mb-4">Restaurant Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-900">Restaurant Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full border-1 border-gray-100 shadow-sm rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-900">Contact Number</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="mt-1 w-full border-1 border-gray-100 shadow-sm rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-900">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 w-full border-1 border-gray-100 shadow-sm rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-900">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="mt-1 w-full border-1 border-gray-100 shadow-sm rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-900">Open Time</label>
              <input
                type="time"
                name="openTime"
                value={formData.openTime}
                onChange={handleChange}
                className="mt-1 w-full border-1 border-gray-100 shadow-sm rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-900">Close Time</label>
              <input
                type="time"
                name="closeTime"
                value={formData.closeTime}
                onChange={handleChange}
                className="mt-1 w-full border-1 border-gray-100 shadow-sm rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Restaurantsetting;
