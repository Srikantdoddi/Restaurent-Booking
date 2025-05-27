import React from 'react';
import { Link } from 'react-router-dom';

const events = [
  {
    title: "Chef’s Special Week",
    description: "Enjoy a unique signature dish every day this week from our top chefs!",
    image: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2024/05/How-to-Become-a-Chef.jpg"
  },
  {
    title: "Dessert Festival",
    description: "Try our limited-edition sweets, curated by the pastry chefs in town.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWv8GOKEmIGTeFfjC2wflmvGttTwK1EjR-g&s"
  },
  {
    title: "Midnight Cravings",
    description: "Late-night deliveries with hot comfort food from 10PM to 2AM.",
    image: "https://img.freepik.com/free-photo/top-view-delicious-snack-meal_23-2148746846.jpg?w=996"
  },
  {
    title: "Global Flavors Week",
    description: "Experience a new cuisine each day—Italian, Mexican, Asian, and more!",
    image: "https://eu-images.contentstack.com/v3/assets/blt7a82e963f79cc4ec/blt22761832993acb39/64ee1b83aa76fab486ec3e0c/global_flavors.png?width=1280&auto=webp&quality=95&format=jpg&disable=upscale"
  },
  {
    title: "Foodie Friday Deals",
    description: "Big discounts every Friday on your favorite meals. Don’t miss out!",
    image: "https://i0.wp.com/thefreebieguy.com/wp-content/uploads/2024/07/Friday-Food-Deals-1.png?fit=1200%2C630&ssl=1"
  },
  {
    title: "Family Feast Weekend",
    description: "Specially curated meals for the whole family every weekend!",
    image: "https://static-prod.dineplan.com/restaurant/restaurants/images/4148/donna-modern-italian-1711346626.jpg?d=1711353827"
  }
];

const Ourevents = () => {
  return (
    <div className="py-20 px-4 sm:px-10 md:px-20  text-center">
      <div className='mb-10'>
        <h2 className="font-bold text-3xl text-red-700">Our Featured Events</h2>
        <p className="mt-3 text-md font-normal text-gray-700">
          Check out our exciting food events and exclusive offers happening this month!
        </p>
      </div>

      {/* Grid Layout for Events */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="pb-5 bg-white border border-gray-100 rounded-md drop-shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h4 className="font-bold text-xl text-red-700">{event.title}</h4>
            <p className="mt-2 text-base font-light text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-16">
        <Link
          to="/events"
          className="w-full sm:w-auto border-2 border-red-700 hover:border-red-500 bg-red-700 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-red-500 transition mb-4 sm:mb-0 cursor-pointer text-center"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Ourevents;
