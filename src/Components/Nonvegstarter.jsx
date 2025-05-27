import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";

const Nonvegstarter = ({ onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [tableNumber, setTableNumber] = useState('');
  const [persons, setPersons] = useState('');
  const [tableType, setTableType] = useState('Indoor Table');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const dishes = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Sp7judJwmSHefXDDEs3C9Zy1rZ9PuUg42gtZBp8J-Rze1dPbUqKXpnoXb7Fxq_xqzGs&usqp=CAU",
      name: "Chicken Tikka",
      price: "Rs-350",
      rating: 4.5,
      cuisine: "Indian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://easychickenrecipes.com/wp-content/uploads/2023/08/featured-buffalo-wings-recipe.jpg",
      name: "Chicken Wings",
      price: "Rs-300",
      rating: 4.3,
      cuisine: "American",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kCbqcKXV77jyp2OnT-ruzFtlOY9p9tYdNA&s",
      name: "Fried Chicken",
      price: "Rs-250",
      rating: 4.6,
      cuisine: "Global",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZN4QgfRpjRaF65k1TLxF8BIUEHfFYU-V_Aw&s",
      name: "Chicken Kebab",
      price: "Rs-270",
      rating: 4.4,
      cuisine: "Middle Eastern",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgU-Y-luDvhVbxIwWPait2BvhXAwZz1NoVtg&s",
      name: "Beef Burger",
      price: "Rs-350",
      rating: 4.7,
      cuisine: "Western",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://static.toiimg.com/thumb/52554168.cms?width=1200&height=900",
      name: "Mutton Keema",
      price: "Rs-320",
      rating: 4.5,
      cuisine: "Indian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6AlsY64CMBtlrPiP137YFtHq-asKTix06Q&s",
      name: "Chicken Biryani",
      price: "Rs-400",
      rating: 4.8,
      cuisine: "Indian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUePdR_8ZF4FVJvFIjxFlkCv9NEhzT-WEi1A&s",
      name: "Roast Chicken",
      price: "Rs-500",
      rating: 4.6,
      cuisine: "Global",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAnyD2z1QEQwgQFkqFhG_K6CT6I_hNTMuKQ&s",
      name: "Grilled Chicken",
      price: "Rs-320",
      rating: 4.4,
      cuisine: "American",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwN47TSz4QbcQm08ue7fzXS2Ao1uaglCrEvw&s",
      name: "Chicken Burger",
      price: "Rs-280",
      rating: 4.5,
      cuisine: "Western",
      buttonLabel1: "Order Now",
    },
  ];

  const totalDishes = dishes.length;

  const moveSlider = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex < 0) {
      setCurrentIndex(totalDishes - 1);
    } else if (newIndex >= totalDishes) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const handleOrderNow = (dish) => {
    setSelectedDish(dish);
    setShowModal(true);
  };

  const handleBookingConfirm = () => {
    if (tableNumber && persons && tableType && date && time) {
      alert(`Table ${tableNumber} booked for ${persons} persons at ${tableType} on ${date} at ${time} for ${selectedDish.name} (${selectedDish.price})`);
      setShowModal(false);
      setTableNumber('');
      setPersons('');
      setTableType('Indoor Table');
      setDate('');
      setTime('');
      setSelectedDish(null);
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="w-full pt-20 pb-10 px-5 sm:px-10 lg:px-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Non-Veg Starters</h2>
        <div className="flex gap-5">
          <button
            onClick={() => moveSlider(-1)}
            className="text-3xl p-1 border border-red-400 rounded-full hover:border-red-700 cursor-pointer transition"
          >
            <GoArrowLeft color="red" />
          </button>
          <button
            onClick={() => moveSlider(1)}
            className="text-3xl p-1 border border-red-400 rounded-full hover:border-red-700 cursor-pointer transition"
          >
            <GoArrowRight color="red" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:max-w-[280px] mx-2 border border-gray-200 rounded-lg bg-white shadow-lg text-center"
            >
              {/* Dish Image */}
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full object-cover h-40 rounded-t-lg mb-2"
              />

              {/* Name and Rating */}
              <div className="flex justify-between items-center px-4 mt-2">
                <h3 className="text-lg font-bold text-red-700">{dish.name}</h3>
                <p className="text-yellow-500 text-sm">⭐ {dish.rating}/5</p>
              </div>

              {/* Price and Cuisine */}
              <div className="flex justify-between items-center px-4 mt-1 mb-3">
                <p className="text-gray-700 font-semibold">{dish.price}</p>
                <p className="text-gray-500 text-sm">{dish.cuisine}</p>
              </div>

              {/* Buttons: Order Now & Add to Cart */}
              <div className="mb-4 flex flex-col items-center gap-2">
                <button
                  className="bg-red-700 text-white py-2 px-6 rounded-lg hover:bg-red-900 transition"
                  onClick={() => handleOrderNow(dish)}
                >
                  {dish.buttonLabel1}
                </button>

                <button
                  title="Add to Cart"
                  className="text-red-700 font-semibold text-sm hover:text-red-900 transition"
                  onClick={() => onAddToCart(dish)}
                >
                  + Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedDish && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-full sm:w-80 relative">
            <h2 className="text-xl font-bold mb-4 text-center text-red-700">Book Table</h2>
            <p className="mb-2"><strong>Dish:</strong> {selectedDish.name}</p>
            <p className="mb-4"><strong>Price:</strong> {selectedDish.price}</p>
            <input
              type="text"
              placeholder="Enter your Name"
              className="border w-full mb-3 p-2 rounded"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="border w-full mb-3 p-2 rounded"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="border w-full mb-3 p-2 rounded"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
            />
            <select
              value={tableType}
              onChange={(e) => setTableType(e.target.value)}
              className="border w-full mb-3 p-2 rounded"
            >
              <option value="Indoor Table">Indoor Table</option>
              <option value="Outdoor Table">Outdoor Table</option>
              <option value="Private Booth">Private Booth</option>
              <option value="Window-side Table">Window-side Table</option>
              <option value="Bar Counter">Bar Counter</option>
              <option value="Family Table">Family Table</option>
              <option value="VIP Table">VIP Table</option>
              <option value="Couple Table">Couple Table</option>
              <option value="High-top Table">High-top Table</option>
              <option value="Special Event Table">Special Event Table</option>
            </select>
            <input
              type="number"
              placeholder="Enter Number of Persons"
              className="border w-full mb-3 p-2 rounded"
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
            />
            <input
              type="date"
              placeholder="Enter Date"
              className="border w-full mb-3 p-2 rounded"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              placeholder="Enter Time"
              className="border w-full mb-4 p-2 rounded"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                onClick={handleBookingConfirm}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nonvegstarter;
