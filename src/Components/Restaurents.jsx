// import React from 'react';
// import { Link } from 'react-router-dom';
// import { BiDish } from 'react-icons/bi';
// import { MdCurrencyRupee } from 'react-icons/md';

// import appetizers from '../assets/Appetizers.jpg';
// import soupsalads from '../assets/Soups & Salads.jpg';
// import maincourses from '../assets/Main Courses.jpg';
// import pizzasburgers from '../assets/Pizzas & Burgers.jpg';
// import seafoodspecial from '../assets/Seafood Specials.jpg';
// import vegetarian from '../assets/Vegetarian.jpg';

// const Restaurents = () => {
//   return (
//     <div className="bg-white py-20 px-6 sm:px-10">
//       <div className="text-center mb-16">
//         <h2 className="font-bold text-3xl text-red-700">
//           Our Dishes
//         </h2>
//         <p className="mt-3 text-md font-normal text-gray-700">
//           Explore our delicious and diverse menu crafted for every craving!
//         </p>
//       </div>

//       {/* 3 rows x 2 columns */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Reusable dish card component */}
//         {[
//           { img: appetizers, title: 'Appetizers', price: 199 },
//           { img: soupsalads, title: 'Soups & Salads', price: 149 },
//           { img: maincourses, title: 'Main Courses', price: 179 },
//           { img: pizzasburgers, title: 'Pizzas & Burgers', price: 399 },
//           { img: seafoodspecial, title: 'Seafood Specials', price: 299 },
//           { img: vegetarian, title: 'Vegetarian/Vegan dishes', price: 499 },
//         ].map((dish, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
//           >
//             <img
//               src={dish.img}
//               alt={dish.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <div className="flex items-center mb-2 text-orange-600">
//                 <BiDish size={20} />
//                 <h3 className="ml-2 text-lg font-semibold">{dish.title}</h3>
//               </div>
//               <div className="flex items-center mb-4 text-orange-600">
//                 <MdCurrencyRupee size={20} />
//                 <p className="ml-2 text-sm font-medium">{dish.price}</p>
//               </div>
//               {/* Book Now Button with Link */}
//               <Link to="/menu">
//                 <button className="w-full bg-orange-700 text-white py-2 rounded-md font-semibold hover:bg-orange-800 transition duration-200">
//                   Book Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View Menu Button */}
//       <div className="mt-16 text-center animate-slide-up">
//         <Link to="/menu">
//           <button className="py-2 px-6 bg-orange-700 text-white text-lg font-semibold rounded-lg shadow hover:bg-orange-500 cursor-pointer transition duration-200">
//             View Full Menu
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Restaurents;


























import React from 'react';
import { Link } from 'react-router-dom';
import { BiDish } from 'react-icons/bi';
import { MdCurrencyRupee } from 'react-icons/md';

import appetizers from '../assets/Appetizers.jpg';
import soupsalads from '../assets/Soups & Salads.jpg';
import maincourses from '../assets/Main Courses.jpg';
import pizzasburgers from '../assets/Pizzas & Burgers.jpg';
import seafoodspecial from '../assets/Seafood Specials.jpg';
import vegetarian from '../assets/Vegetarian.jpg';

const Restaurents = () => {
  return (
    <div className="bg-white py-20 px-6 sm:px-10">
      <div className="text-center mb-16">
        <h2 className="font-bold text-3xl text-red-700">
          Our Dishes
        </h2>
        <p className="mt-3 text-md font-normal text-gray-700">
          Explore our delicious and diverse menu crafted for every craving!
        </p>
      </div>

      {/* 3 rows x 2 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[ 
          { img: appetizers, title: 'Appetizers', price: 199 },
          { img: soupsalads, title: 'Soups & Salads', price: 149 },
          { img: maincourses, title: 'Main Courses', price: 179 },
          { img: pizzasburgers, title: 'Pizzas & Burgers', price: 399 },
          { img: seafoodspecial, title: 'Seafood Specials', price: 299 },
          { img: vegetarian, title: 'Vegetarian/Vegan dishes', price: 499 },
        ].map((dish, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={dish.img}
              alt={dish.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center mb-2 text-red-600">
                <BiDish size={20} />
                <h3 className="ml-2 text-lg font-semibold">{dish.title}</h3>
              </div>
              <div className="flex items-center mb-4 text-red-600">
                <MdCurrencyRupee size={20} />
                <p className="ml-2 text-sm font-medium">{dish.price}</p>
              </div>
              {/* Book Now Button */}
              <Link to="/menu">
                <button className="w-full bg-red-700 text-white py-2 rounded-md font-semibold hover:bg-red-800 transition duration-200">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View Menu Button */}
      <div className="mt-16 text-center animate-slide-up">
        <Link to="/menu">
          <button className="py-2 px-6 bg-red-700 text-white text-lg font-semibold rounded-lg shadow hover:bg-red-500 cursor-pointer transition duration-200">
            View Full Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Restaurents;
