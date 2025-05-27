import React from "react";
import { Calendar, Star, Table } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const reservationsData = [
  { name: "Mon", bookings: 8 },
  { name: "Tue", bookings: 5 },
  { name: "Wed", bookings: 12 },
  { name: "Thu", bookings: 9 },
  { name: "Fri", bookings: 15 },
  { name: "Sat", bookings: 20 },
  { name: "Sun", bookings: 11 },
];

const Resturentdashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-10 md:px-20 py-10 sm:py-14 flex justify-center">
      {/* Constrain max width and center */}
      <div className="w-full max-w-7xl">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-red-500 mb-8 text-center sm:text-left">
          Welcome to Your Dashboard
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[ 
            { icon: Calendar, label: "Bookings Today", value: 24, iconColor: "text-blue-600" },
            { icon: Table, label: "Active Tables", value: 12, iconColor: "text-purple-600" },
            { icon: Star, label: "Avg. Rating", value: 4.6, iconColor: "text-yellow-500" }
          ].map(({ icon: Icon, label, value, iconColor }) => (
            <div
              key={label}
              className="bg-white rounded-xl p-4 shadow flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon className={`${iconColor} w-6 h-6 sm:w-7 sm:h-7`} />
              <div>
                <p className="text-gray-500 text-sm sm:text-base">{label}</p>
                <p className="text-xl sm:text-2xl font-semibold text-red-600">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white rounded-xl p-6 shadow mb-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-red-500">
            Weekly Reservations
          </h2>
          {/* ResponsiveContainer must have a parent with explicit height */}
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={reservationsData}>
                <CartesianGrid stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="bookings"
                  stroke="#EF4444"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Reservations */}
        <div className="bg-white rounded-xl p-4 shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-red-500">
            Recent Reservations
          </h2>
          <ul className="divide-y text-sm sm:text-base">
            <li className="py-2">John Doe — 2 people at 7:00 PM</li>
            <li className="py-2">Sarah Lee — 4 people at 8:30 PM</li>
            <li className="py-2">Mike Tan — 6 people at 6:00 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resturentdashboard;
