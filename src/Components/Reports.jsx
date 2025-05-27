import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, CalendarDays, Star } from "lucide-react";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Reports = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-8 space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Reports Overview</h1>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Users className="text-blue-500" />, title: "Flagged Users", value: "12" },
          { icon: <TrendingUp className="text-green-500" />, title: "Total Revenue", value: "$72,500" },
          { icon: <CalendarDays className="text-red-500" />, title: "Peak Booking Time", value: "7 PM – 9 PM" },
          { icon: <Star className="text-yellow-500" />, title: "Avg Staff Rating", value: "4.7 / 5" },
        ].map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <ReportCard icon={card.icon} title={card.title} value={card.value} />
          </motion.div>
        ))}
      </div>

      {/* Detailed Sections */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <SectionCard title="User Reports">
          <div className="overflow-x-auto">
            <UserReportsTable />
          </div>
        </SectionCard>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <SectionCard title="Restaurant Activity Reports">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <StatBlock label="Total Bookings" value="1,250" />
            <StatBlock label="Total Orders" value="3,490" />
            <StatBlock label="Avg. Order Value" value="$20.78" />
            <StatBlock label="Recurring Customers" value="35%" />
          </div>
        </SectionCard>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <SectionCard title="Staff Performance">
          <div className="overflow-x-auto">
            <StaffPerformanceTable />
          </div>
        </SectionCard>
      </motion.div>
    </div>
  );
};

const ReportCard = ({ icon, title, value }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white rounded-2xl shadow p-4 flex items-center space-x-4 transition-all"
  >
    <div className="bg-gray-100 p-3 rounded-xl">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </motion.div>
);

const SectionCard = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow p-6 mt-4">
    <h2 className="text-lg sm:text-xl font-semibold mb-4 text-red-700">{title}</h2>
    {children}
  </div>
);

const StatBlock = ({ label, value }) => (
  <div className="bg-gray-100 p-4 rounded-xl">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-lg font-bold text-red-600">{value}</p>
  </div>
);

const UserReportsTable = () => (
  <table className="min-w-full text-sm text-left">
    <thead>
      <tr className="text-gray-600 border-b">
        <th className="py-2 px-2">Username</th>
        <th className="py-2 px-2">Issue</th>
        <th className="py-2 px-2">Count</th>
        <th className="py-2 px-2">Last Reported</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td className="py-2 px-2">john_doe</td>
        <td className="py-2 px-2">Refund Requests</td>
        <td className="py-2 px-2">3</td>
        <td className="py-2 px-2">2025-05-05</td>
      </tr>
      <tr>
        <td className="py-2 px-2">jane_smith</td>
        <td className="py-2 px-2">Complaint</td>
        <td className="py-2 px-2">2</td>
        <td className="py-2 px-2">2025-04-28</td>
      </tr>
    </tbody>
  </table>
);

const StaffPerformanceTable = () => (
  <table className="min-w-full text-sm text-left">
    <thead>
      <tr className="text-gray-600 border-b">
        <th className="py-2 px-2">Staff</th>
        <th className="py-2 px-2">Orders</th>
        <th className="py-2 px-2">Rating</th>
        <th className="py-2 px-2">Shifts</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td className="py-2 px-2">Alex Johnson</td>
        <td className="py-2 px-2">245</td>
        <td className="py-2 px-2">4.6 / 5</td>
        <td className="py-2 px-2">Mon - Fri</td>
      </tr>
      <tr>
        <td className="py-2 px-2">Sara Lee</td>
        <td className="py-2 px-2">180</td>
        <td className="py-2 px-2">4.8 / 5</td>
        <td className="py-2 px-2">Fri - Sun</td>
      </tr>
    </tbody>
  </table>
);

export default Reports;
