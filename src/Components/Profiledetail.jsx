import React, { useState } from 'react';

const Profiledetail = () => {
  const [username, setUsername] = useState('Srikanth');
  const [email, setEmail] = useState('abc@gmail.com');
  const [password, setPassword] = useState('');
  const [fileName, setFileName] = useState('');
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    alert('Profile updated!');
  };

  const handleLogout = () => {
    alert('Logged out!');
  };

  return (
    <div className="pt-24 px-4 sm:px-8 md:px-16 lg:px-32 bg-white min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 border border-red-200">
        <h2 className="text-2xl font-semibold text-red-700 mb-6">Profile</h2>

        {/* Profile Picture Preview */}
        <div className="mb-6 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-400 shadow-md">
            <img
              src={previewUrl || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4">
            <label className="bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-700 transition">
              Choose File
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <p className="text-sm text-gray-600 mt-1">
              {fileName || 'No file chosen'}
            </p>
          </div>
        </div>

        {/* Username & Email */}
        <div className="mb-6">
          <label className="block text-sm text-gray-700 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Change Password */}
        <div className="mb-6">
          <label className="block text-sm text-gray-700 mb-1">Change Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full px-4 py-2 border rounded-md border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Bookings Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-red-600 mb-2">Your Bookings</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Pizza Dinner at 7PM - April 30</li>
            <li>Table for 2 - May 3</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={handleUpdate}
            className="w-full sm:w-auto bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
          >
            Update Profile
          </button>
          <button
            onClick={handleLogout}
            className="w-full sm:w-auto border border-red-600 text-red-700 px-6 py-2 rounded-md hover:bg-red-100 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profiledetail;
