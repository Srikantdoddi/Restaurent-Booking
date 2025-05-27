import React, { useState } from 'react';

const Dashboard = () => {
  const [totalBookings, setTotalBookings] = useState(120);
  const [currentOrders, setCurrentOrders] = useState(45);
  const [ongoingEvents, setOngoingEvents] = useState(3);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: 'New booking for Table 5 at 19:00',
      details:
        'Booking ID: B1001\nCustomer: John Doe\nDate: 2025-05-10\nTime: 19:00\nTable: 5\nGuests: 2\nSpecial Request: Window seat',
    },
    {
      id: 2,
      message: 'Complaint from Customer John Doe',
      details:
        'Complaint ID: C456\nCustomer: John Doe\nIssue: Food was served cold\nDate: 2025-05-08\nResolution: Pending',
    },
  ]);

  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleViewDetails = (notification) => {
    setSelectedNotification(notification);
  };

  const handleCloseDetails = () => {
    setSelectedNotification(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-8 md:px-16 py-6">
      {/* Overview Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Total Bookings</h3>
          <p className="text-3xl sm:text-4xl font-bold text-red-600 mt-2">{totalBookings}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Current Orders</h3>
          <p className="text-3xl sm:text-4xl font-bold text-red-600 mt-2">{currentOrders}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Ongoing Events</h3>
          <p className="text-3xl sm:text-4xl font-bold text-red-600 mt-2">{ongoingEvents}</p>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Notifications</h3>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-gray-100 p-4 rounded-lg flex flex-col sm:flex-row justify-between sm:items-center gap-3"
            >
              <p className="text-sm sm:text-base text-gray-700">{notification.message}</p>
              <button
                onClick={() => handleViewDetails(notification)}
                className="px-3 py-1 text-xs bg-red-600 text-white rounded-md self-start sm:self-auto"
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Section */}
      {selectedNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md sm:max-w-lg shadow-lg relative">
            <button
              onClick={handleCloseDetails}
              className="absolute top-2 right-4 text-gray-500 text-xl font-semibold"
            >
              ✕
            </button>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Details</h2>
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">
              {selectedNotification.details}
            </pre>
            <div className="mt-6 text-right">
              <button
                onClick={handleCloseDetails}
                className="px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
