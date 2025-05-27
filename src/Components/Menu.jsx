import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";

const Menu = ({ onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [tableType, setTableType] = useState('');
  const [persons, setPersons] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const dishes = [
    {
      image: "https://www.cookwithkushi.com/wp-content/uploads/2023/02/paneer_tikka_at_home_01.jpg",
      name: "Paneer Tikka",
      price: "Rs-250",
      rating: 4.5,
      cuisine: "Indian",
    },
    {
      image: "https://i.ytimg.com/vi/xkMbJCtaaqA/hq720.jpg",
      name: "Veg Manchurian",
      price: "Rs-220",
      rating: 4.3,
      cuisine: "Chinese",
    },
    {
      image: "https://saltedmint.com/wp-content/uploads/2024/01/Vegetable-Spring-Rolls-4-480x270.jpg",
      name: "Spring Rolls",
      price: "Rs-180",
      rating: 4.6,
      cuisine: "Asian",
    },
    {
      image: "https://i0.wp.com/www.nandanmsd.com/wp-content/uploads/2020/08/Chilli-Mushroom-Dry.jpg",
      name: "Chilli Mushroom",
      price: "Rs-210",
      rating: 4.2,
      cuisine: "Chinese",
    },
  ];

  const moveSlider = (direction) => {
    const newIndex = (currentIndex + direction + dishes.length) % dishes.length;
    setCurrentIndex(newIndex);
  };

  const handleOrderNow = (dish) => {
    setSelectedDish(dish);
    setShowBookingModal(true);
  };

  const handleBookingConfirm = () => {
    if (name && mobileNumber && email && tableType && persons && date && time) {
      alert(`Table Booked for ${name} with ${selectedDish.name}`);
      setName('');
      setMobileNumber('');
      setEmail('');
      setTableType('');
      setPersons('');
      setDate('');
      setTime('');
      setSelectedDish(null);
      setShowBookingModal(false);
    } else {
      alert('Please fill all fields!');
    }
  };

  return (
    <div className="w-full pt-20 pb-10 px-5 sm:px-10 md:px-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Veg Starters</h2>
        <div className="flex gap-5">
          <button onClick={() => moveSlider(-1)} className="text-3xl p-1 border border-red-400 rounded-full">
            <GoArrowLeft color="red" />
          </button>
          <button onClick={() => moveSlider(1)} className="text-3xl p-1 border border-red-400 rounded-full">
            <GoArrowRight color="red" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {dishes.map((dish, index) => (
            <div key={index} className="flex-shrink-0 w-full max-w-[280px] mx-2 border border-gray-200 rounded-lg bg-white shadow-lg text-center">
              <img src={dish.image} alt={dish.name} className="w-full object-cover h-40 rounded-t-lg mb-2" />
              <div className="flex justify-between items-center px-4 mt-2">
                <h3 className="text-lg font-bold text-red-700">{dish.name}</h3>
                <p className="text-yellow-500 text-sm">⭐ {dish.rating}/5</p>
              </div>
              <div className="flex justify-between items-center px-4 mt-1 mb-3">
                <p className="text-gray-700 font-semibold">{dish.price}</p>
                <p className="text-gray-500 text-sm">{dish.cuisine}</p>
              </div>
              <div className="mb-4  flex flex-col items-center gap-2">
                <button className="bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-900" onClick={() => handleOrderNow(dish)}>
                  Order Now
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

      {showBookingModal && selectedDish && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-lg relative">
            <h2 className="text-2xl font-bold mb-4 text-center text-red-700">Book Table</h2>
            <p className="mb-2"><strong>Dish:</strong> {selectedDish.name}</p>
            <p className="mb-4"><strong>Price:</strong> {selectedDish.price}</p>
            <input type="text" placeholder="Name" className="border w-full mb-2 p-2 rounded" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Mobile" className="border w-full mb-2 p-2 rounded" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
            <input type="email" placeholder="Email" className="border w-full mb-2 p-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
            <select className="border w-full mb-2 p-2 rounded" value={tableType} onChange={(e) => setTableType(e.target.value)}>
              <option value="">Select Table Type</option>
              <option>Indoor</option><option>Outdoor</option><option>Private</option>
            </select>
            <input type="number" placeholder="Persons" className="border w-full mb-2 p-2 rounded" value={persons} onChange={(e) => setPersons(e.target.value)} />
            <input type="date" className="border w-full mb-2 p-2 rounded" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="time" className="border w-full mb-4 p-2 rounded" value={time} onChange={(e) => setTime(e.target.value)} />
            <div className="flex justify-between">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800" onClick={handleBookingConfirm}>Confirm</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800" onClick={() => setShowBookingModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
