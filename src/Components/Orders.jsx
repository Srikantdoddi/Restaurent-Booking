import React, { useState } from "react";

const tableBookings = [
  {
    id: 1,
    name: "John Doe",
    type: "Table",
    detail: "Table 3",
    date: "2025-05-10",
    time: "19:00",
    status: "Pending",
    email: "john@example.com",
    phone: "1234567890",
  },
  {
    id: 2,
    name: "Alice Johnson",
    type: "Table",
    detail: "Table 5",
    date: "2025-05-11",
    time: "18:00",
    status: "Pending",
    email: "alice@example.com",
    phone: "2345678901",
  },
  {
    id: 3,
    name: "Mark Lee",
    type: "Table",
    detail: "Table 7",
    date: "2025-05-13",
    time: "20:30",
    status: "Pending",
    email: "mark@example.com",
    phone: "3456789012",
  },
];

const itemOrders = [
  {
    id: 4,
    name: "Michael Scott",
    type: "Item",
    detail: "2x Pizza, 1x Coke",
    date: "2025-05-09",
    time: "17:30",
    status: "Pending",
    email: "michael@example.com",
    phone: "9999999999",
  },
  {
    id: 5,
    name: "Jim Halpert",
    type: "Item",
    detail: "1x Burger, 2x Fries",
    date: "2025-05-10",
    time: "13:00",
    status: "Pending",
    email: "jim@example.com",
    phone: "8888888888",
  },
  {
    id: 6,
    name: "Dwight Schrute",
    type: "Item",
    detail: "3x Soup, 1x Salad",
    date: "2025-05-11",
    time: "14:00",
    status: "Pending",
    email: "dwight@example.com",
    phone: "7777777777",
  },
];

const Orders = () => {
  const [activeTab, setActiveTab] = useState("table");
  const [orders, setOrders] = useState([...tableBookings, ...itemOrders]);

  const handleAccept = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: "Accepted" } : order
    );
    const acceptedOrder = orders.find((order) => order.id === id);
    setOrders(updatedOrders);
    alert(`✅ Booking for ${acceptedOrder.name} has been accepted.`);
  };

  const handleDecline = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: "Declined" } : order
    );
    const declinedOrder = orders.find((order) => order.id === id);
    setOrders(updatedOrders);
    alert(`❌ Booking for ${declinedOrder.name} has been declined.`);
  };

  const getFilteredOrders = () => {
    return activeTab === "table"
      ? orders.filter((o) => o.type === "Table")
      : orders.filter((o) => o.type === "Item");
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12">
      <div className="max-w-full md:max-w-7xl mx-auto">
        <div className="mb-6 flex flex-wrap gap-4">
          <button
            onClick={() => setActiveTab("table")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              activeTab === "table"
                ? "bg-red-600 text-white"
                : "bg-white text-gray-700 border hover:bg-red-100"
            }`}
          >
            Table Booking
          </button>
          <button
            onClick={() => setActiveTab("item")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              activeTab === "item"
                ? "bg-red-600 text-white"
                : "bg-white text-gray-700 border hover:bg-red-100"
            }`}
          >
            Item Orders
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-4 sm:p-6 md:p-8 overflow-x-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 capitalize">
            {activeTab} Orders
          </h2>
          <table className="min-w-full text-sm sm:text-base text-left text-gray-600">
            <thead className="bg-gray-200 text-gray-700 text-xs sm:text-sm uppercase">
              <tr>
                <th className="px-3 sm:px-4 py-2">Customer</th>
                <th className="px-3 sm:px-4 py-2">{activeTab === "item" ? "Items" : "Details"}</th>
                <th className="px-3 sm:px-4 py-2 hidden xs:table-cell">Date</th>
                <th className="px-3 sm:px-4 py-2 hidden xs:table-cell">Time</th>
                <th className="px-3 sm:px-4 py-2 hidden md:table-cell">Email</th>
                <th className="px-3 sm:px-4 py-2 hidden md:table-cell">Phone</th>
                <th className="px-3 sm:px-4 py-2">Status</th>
                <th className="px-3 sm:px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {getFilteredOrders().map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-3 sm:px-4 py-2 whitespace-nowrap">{order.name}</td>
                  <td className="px-3 sm:px-4 py-2 whitespace-nowrap">{order.detail}</td>
                  <td className="px-3 sm:px-4 py-2 whitespace-nowrap hidden xs:table-cell">{order.date}</td>
                  <td className="px-3 sm:px-4 py-2 whitespace-nowrap hidden xs:table-cell">{order.time}</td>
                  <td className="px-3 sm:px-4 py-2 whitespace-nowrap hidden md:table-cell">{order.email}</td>
                  <td className="px-3 sm:px-4 py-2 whitespace-nowrap hidden md:table-cell">{order.phone}</td>
                  <td className="px-3 sm:px-4 py-2 whitespace-nowrap capitalize">
                    <span
                      className={`px-2 py-1 text-xs sm:text-sm font-medium rounded-full ${
                        order.status === "Accepted"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Declined"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-3 sm:px-4 py-2 whitespace-nowrap space-x-2">
                    {order.status === "Pending" && (
                      <>
                        <button
                          onClick={() => handleAccept(order.id)}
                          className="px-3 py-1 text-xs sm:text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleDecline(order.id)}
                          className="px-3 py-1 text-xs sm:text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                          Decline
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
