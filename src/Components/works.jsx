import React from "react";
import { CalendarDays, Ticket, Utensils } from "lucide-react";

const Works = () => {
  const steps = [
    {
      title: "Book a Table",
      icon: <CalendarDays className="w-10 h-10 text-red-600" />,
      description: "Easily reserve your table online with just a few clicks. Choose date, time, and number of guests.",
    },
    {
      title: "Reserve an Event",
      icon: <Ticket className="w-10 h-10 text-red-600" />,
      description: "Join our special events by reserving your spot in advance. Limited seats available!",
    },
    {
      title: "Dine & Enjoy",
      icon: <Utensils className="w-10 h-10 text-red-600" />,
      description: "Experience delicious food and excellent service in a vibrant atmosphere.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-10 lg:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-bold text-3xl text-red-700">How It Works</h2>
        <p className="mt-3 text-md font-normal text-gray-700">
          Simple steps to enjoy your experience with us.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 mt-16 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 flex justify-center text-red-600">{step.icon}</div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
