import React, { useState } from "react";

const TABS = ["Customer Complaints", "Disputes", "Support Tickets"];

const Issue = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const getData = () => {
    switch (activeTab) {
      case "Customer Complaints":
        return complaints;
      case "Disputes":
        return disputes;
      case "Support Tickets":
        return tickets;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-20 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
        Issue Resolution & Support
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? "bg-red-600 text-white shadow"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
          {activeTab}
        </h2>
        <div className="space-y-4">
          {getData().length ? (
            getData().map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 hover:shadow transition"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base">
                    {item.subject}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold w-max ${
                      item.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Assigned"
                        ? "bg-indigo-100 text-indigo-700"
                        : item.status === "Investigating"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 break-words">
                  From: {item.customer}
                </p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No issues found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Sample data
const complaints = [
  {
    customer: "john_doe",
    subject: "Late delivery and cold food",
    date: "2025-05-07",
    status: "Open",
  },
  {
    customer: "jane_smith",
    subject: "Rude staff behavior",
    date: "2025-05-05",
    status: "Resolved",
  },
];

const disputes = [
  {
    customer: "michael88",
    subject: "Charged twice for one order",
    date: "2025-04-28",
    status: "Investigating",
  },
];

const tickets = [
  {
    customer: "amy_lee",
    subject: "Need receipt for last order",
    date: "2025-05-08",
    status: "Pending",
  },
  {
    customer: "mark.z",
    subject: "Unable to login to account",
    date: "2025-05-06",
    status: "Assigned",
  },
];

export default Issue;
