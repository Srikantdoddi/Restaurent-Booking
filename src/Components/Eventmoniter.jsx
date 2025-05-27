import React, { useState } from "react";

const events = {
  upcoming: [
    {
      title: "Wine Tasting Night",
      date: "2025-05-12",
      participants: 30,
      catering: "Italian Menu",
    },
    {
      title: "Mother’s Day Brunch",
      date: "2025-05-14",
      participants: 60,
      catering: "Brunch Buffet",
    },
  ],
  ongoing: [
    {
      title: "Live Jazz Dinner",
      date: "Today",
      participants: 45,
      catering: "Chef’s Special",
    },
  ],
  past: [
    {
      title: "Spring Vegan Festival",
      date: "2025-04-25",
      participants: 80,
      feedback: "Positive",
    },
    {
      title: "Easter Family Lunch",
      date: "2025-03-31",
      participants: 55,
      feedback: "Mixed",
    },
  ],
};

const tabs = ["Upcoming", "Ongoing", "Past"];

const Event = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const getEvents = () => {
    if (activeTab === "Upcoming") return events.upcoming;
    if (activeTab === "Ongoing") return events.ongoing;
    return events.past;
  };

  return (
    <div className="min-h-screen bg-gray-50 px-20 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Event Monitoring</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? "bg-red-600 text-white shadow cursor-pointer"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100 cursor-pointer"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getEvents().length ? (
          getEvents().map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-md transition p-5 border-t-4 border-red-500"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-1">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-1">Date: {event.date}</p>
              <p className="text-sm text-gray-500 mb-1">Participants: {event.participants}</p>
              <p className="text-sm text-gray-500">
                {activeTab === "Past"
                  ? `Feedback: ${event.feedback}`
                  : `Catering: ${event.catering}`}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center">
            No {activeTab.toLowerCase()} events.
          </p>
        )}
      </div>
    </div>
  );
};

export default Event;
