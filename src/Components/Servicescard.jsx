import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: "Online Ordering",
    description: "Get your favorite meals delivered to your door in minutes.",
    image: "https://t3.ftcdn.net/jpg/02/79/75/74/360_F_279757414_o2KNnB8fZ2eahIK6SqydL4tGFkO5RDH5.jpg",
    buttonText: "Order Now",
    route: "/menu",
  },
  {
    title: "Table Reservations",
    description: "Reserve your seat in advance and skip the waiting line.",
    image: "https://static-prod.dineplan.com/restaurant/restaurants/images/1498/1219_elements-caf-bar.jpg?d=1653297075",
    buttonText: "Reserve Table",
    route: "/tables",
  },
  {
    title: "Live Kitchen",
    description: "Watch chefs prepare your meals live for an exciting experience.",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/11/88/a8/1c/live-kitchen.jpg",
    buttonText: "Experience It",
    route: "/tables",
  },
  {
    title: "Dessert Delights",
    description: "Explore a variety of sweets and baked goodies from our dessert bar.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/37/0f/87/photo2jpg.jpg?w=600&h=400&s=1",
    buttonText: "View Desserts",
    route: "/menu",
  },
  {
    title: "Event Hosting",
    description: "Book us for birthdays, corporate dinners, or special gatherings.",
    image: "https://meetingtomorrow.com/wp-content/uploads/2019/08/What-Size-Projector-Screen-For-Events-1.jpg",
    buttonText: "Book an Event",
    route: "/events",
  },
  {
    title: "Chef’s Specials",
    description: "Signature dishes curated weekly by our head chefs.",
    image: "https://tandooribitesie.com/wp-content/uploads/2021/01/Veg-Pulav.png",
    buttonText: "See Specials",
    route: "/menu",
  },
  {
    title: "Family Meals",
    description: "Hearty portions perfect for families and large groups.",
    image: "https://healunited.org/wp-content/uploads/2021/01/family-meal-2-e1611707984756.jpg",
    buttonText: "Order Family Meal",
    route: "/menu",
  },
  {
    title: "Weekend Buffets",
    description: "All-you-can-eat weekend buffets for a fulfilling food trip.",
    image: "https://www.amba-hotels.com/en/ximending/images/offers/amba-Taipei-Ximending-Hotel-The-Cape-Lobster-and-Beyond-Restaurant-Crab-Weekend-Buffet.jpg",
    buttonText: "Explore Buffet",
    route: "/menu",
  },
  {
    title: "Vegan Options",
    description: "Tasty plant-based meals that even non-vegans love.",
    image: "https://www.sloanestanley.com/wp-content/uploads/My-project-3.jpeg",
    buttonText: "Try Vegan",
    route: "/menu",
  },
];

const Servicescard = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div id="explore-Restaurent" className="px-6 sm:px-12 lg:px-20 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-red-700 mb-4">Our Services</h2>
      <p className="text-center text-gray-600 mb-12">
        Explore our offerings designed for your ultimate dining experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg flex flex-col"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-44 object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              </div>
              <button
                onClick={() => handleClick(service.route)}
                className="mt-auto bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all cursor-pointer"
              >
                {service.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicescard;
