import React, { useState } from 'react';
import {
  FaUtensils,
  FaEye,
  FaToggleOn,
  FaToggleOff,
  FaTimes,
} from 'react-icons/fa';

const restaurants = [
  {
    id: 1,
    name: 'The Spice Route',
    city: 'Delhi',
    type: 'Dine-In',
    isActive: true,
    verified: true,
    registeredAt: '2024-06-01T10:30:00',
    owner: 'Raj Verma',
    contact: '+91 9876543210',
    email: 'spice@restaurant.com',
  },
  {
    id: 2,
    name: 'Banquet Bliss',
    city: 'Mumbai',
    type: 'Event Venue',
    isActive: false,
    verified: false,
    registeredAt: '2024-06-15T14:45:00',
    owner: 'Sneha Joshi',
    contact: '+91 9898989898',
    email: 'banquet@bliss.com',
  },
  {
    id: 3,
    name: 'Foodie Fiesta',
    city: 'Bangalore',
    type: 'Dine-In & Events',
    isActive: true,
    verified: true,
    registeredAt: '2024-07-02T18:20:00',
    owner: 'Anil Mehra',
    contact: '+91 9123456789',
    email: 'fiesta@foodie.com',
  },
];

const RestaurantsSection = () => {
  const [selected, setSelected] = useState(null);

  const closeModal = () => setSelected(null);

  return (
    <div className="px-20 py-10 bg-white min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Restaurants Overview</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-red-200 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-md font-semibold text-red-700">Restaurant</th>
              <th className="px-6 py-3 text-left text-md font-semibold text-red-700">City</th>
              <th className="px-6 py-3 text-left text-md font-semibold text-red-700">Type</th>
              <th className="px-6 py-3 text-left text-md font-semibold text-red-700">Status</th>
              <th className="px-6 py-3 text-left text-md font-semibold text-red-700">Verified</th>
              <th className="px-6 py-3 text-left text-md font-semibold text-red-700">Registered On</th>
              <th className="px-6 py-3 text-left text-md font-semibold text-red-700">View</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-red-100">
            {restaurants.map((r) => (
              <tr key={r.id} className="hover:bg-gray-50 transition duration-150">
                <td className="px-6 py-4 font-medium text-gray-800 flex items-center gap-2">
                  <FaUtensils className="text-red-500" />
                  {r.name}
                </td>
                <td className="px-6 py-4">{r.city}</td>
                <td className="px-6 py-4">{r.type}</td>
                <td className="px-6 py-4">
                  <span className={`flex items-center gap-1 font-medium ${r.isActive ? 'text-green-600' : 'text-red-500'}`}>
                    {r.isActive ? <FaToggleOn /> : <FaToggleOff />}
                    {r.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${r.verified ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {r.verified ? 'Verified' : 'Pending'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(r.registeredAt).toLocaleDateString()} <br />
                  <span className="text-xs text-gray-500">
                    {new Date(r.registeredAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setSelected(r)}
                    className="text-blue-600 hover:underline text-sm flex items-center gap-1 cursor-pointer"
                  >
                    <FaEye />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-red-700 hover:text-red-900 text-lg cursor-pointer"
            >
              <FaTimes />
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{selected.name}</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>City:</strong> {selected.city}</p>
              <p><strong>Type:</strong> {selected.type}</p>
              <p><strong>Status:</strong> {selected.isActive ? 'Active' : 'Inactive'}</p>
              <p><strong>Verified:</strong> {selected.verified ? 'Yes' : 'No'}</p>
              <p><strong>Owner:</strong> {selected.owner}</p>
              <p><strong>Contact:</strong> {selected.contact}</p>
              <p><strong>Email:</strong> {selected.email}</p>
              <p><strong>Registered On:</strong> {new Date(selected.registeredAt).toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantsSection;
