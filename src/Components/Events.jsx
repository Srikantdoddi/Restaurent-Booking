import React, { useState } from 'react';

const events = [
  {
    title: "Birthday Parties",
    description: "Celebrate with a custom menu, décor, and fun-filled vibes.",
    image: "https://img.freepik.com/premium-photo/people-celebrating-birthday-outdoors_1048944-11972528.jpg?w=900",
    buttonText: "Plan a Party",
  },
  {
    title: "Corporate Events",
    description: "Professional event spaces for team meetings and dinners.",
    image: "https://img.freepik.com/premium-photo/business-dinner-meeting_964616-34616.jpg?w=1060",
    buttonText: "Book Now",
  },
  {
    title: "Wedding Receptions",
    description: "Elegant dining arrangements for your big day.",
    image: "https://img.freepik.com/premium-photo/festive-holiday-table-gala-celebration-festivity-table-set-wedding-dinner_107083-370.jpg?w=996",
    buttonText: "Reserve Venue",
  },
  {
    title: "Baby Showers",
    description: "Cute, themed celebrations for the growing family.",
    image: "https://img.freepik.com/free-photo/side-view-kids-wearing-party-hats_23-2149477963.jpg?t=st=1744783962~exp=1744787562~hmac=11252c5a3df0c4bfb7f5c5392666237bd59af5de5a9f31c0cb6eda06df6d7989&w=996",
    buttonText: "Host Shower",
  },
  {
    title: "Graduation Dinners",
    description: "Toast to achievements with friends and family.",
    image: "https://img.freepik.com/premium-photo/friends-restaurant-drinking-wine_109285-407.jpg?w=996",
    buttonText: "Celebrate Now",
  },
  {
    title: "Festival Gatherings",
    description: "Book for Diwali, Christmas, Eid, and more!",
    image: "https://img.freepik.com/premium-photo/view-people-pool_1048944-19901473.jpg?w=996",
    buttonText: "Join the Festivities",
  },
  {
    title: "Anniversary Dinners",
    description: "Romantic setup and fine dining for your special date.",
    image: "https://img.freepik.com/free-photo/medium-shot-couple-having-lunch-luxury-restaurant_23-2150598332.jpg?t=st=1744784147~exp=1744787747~hmac=282faabdbd4b8efcd02f61af0aa0f0aa009002e9c9d4ef9b8d449510e5fb2a97&w=900",
    buttonText: "Book Dinner",
  },
  {
    title: "Live Music Nights",
    description: "Good food, great music — the perfect combo!",
    image: "https://img.freepik.com/premium-photo/portrait-three-young-intercultural-men-casualwear-having-music-repetition_274679-38935.jpg?w=996",
    buttonText: "See Schedule",
  },
  {
    title: "Workshops & Meetups",
    description: "Host or attend creative events and community sessions.",
    image: "https://img.freepik.com/premium-photo/hipster-team-gathering-friends-startup-colleagues_53876-68206.jpg?w=996",
    buttonText: "Get Involved",
  },
];

const Events = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    eventName: '',
    message: '',
    date: '',
    time: '',
    restaurantName: ''
  });

  const handleOpenForm = (event) => {
    setSelectedEvent(event);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedEvent(null);
    setFormData({
      fullName: '',
      email: '',
      eventName: '',
      message: '',
      date: '',
      time: '',
      restaurantName: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Your reservation has been submitted!");
    setIsFormOpen(false);
  };

  return (
    <div className="px-20 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-red-700 mb-4">Events We Host</h2>
      <p className="text-center text-gray-600 mb-12">
        From intimate dinners to grand celebrations, we’ve got you covered.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex flex-col"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-44 object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
              </div>
              <button
                className="mt-auto bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all cursor-pointer"
                onClick={() => handleOpenForm(event)}
              >
                {event.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Form */}
      {isFormOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 pt-25 pb-0 overflow-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg relative max-h-[90vh] overflow-y-auto ">
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-red-700 mb-4">Reserve for {selectedEvent.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <input
                type="text"
                name="restaurantName"
                value={formData.restaurantName}
                onChange={handleInputChange}
                placeholder="Restaurant Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <input
                type="text"
                name="eventName"
                value={selectedEvent.title}
                readOnly
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any special requests?"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-red-500"
                rows={3}
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
