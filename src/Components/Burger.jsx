import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa";

const Burger = ({ onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [tableType, setTableType] = useState('');
  const [persons, setPersons] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const dishes = [
    {
      image: "https://shop.naanfusion.in/wp-content/uploads/2024/07/veg-classic-burger.png",
      name: "Veg Classic Burger",
      price: "Rs-180",
      rating: 4.3,
      cuisine: "Indian-American",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://weelicious.com/wp-content/uploads/2011/05/BBQ-Chicken-Burgers-9-500x375.jpg",
      name: "Grilled Chicken Burger",
      price: "Rs-220",
      rating: 4.7,
      cuisine: "American",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://godairyfree.org/wp-content/uploads/2015/02/The-Ultimate-Veggie-Slider.jpg",
      name: "Ultimate Veggie Burger",
      price: "Rs-200",
      rating: 4.6,
      cuisine: "Vegetarian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://sailorbailey.com/wp-content/uploads/2023/03/Crispy-Chicken-Burger4.jpg",
      name: "Cheesy Chicken Burger",
      price: "Rs-240",
      rating: 4.8,
      cuisine: "American",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://mcdonaldsblog.in/wp-content/uploads/2018/04/McAloo-tikki.jpg",
      name: "Aloo Tikki Burger",
      price: "Rs-160",
      rating: 4.2,
      cuisine: "Indian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://media.istockphoto.com/id/117150229/photo/double-bacon-cheeseburger.jpg?s=612x612&w=0&k=20&c=t8uhCixK5x80rV6CE3PBx3POekCea2Z7Gkvonzm8_tU=",
      name: "Double Beef Burger",
      price: "Rs-300",
      rating: 4.9,
      cuisine: "American",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://www.foodandwine.com/thmb/O7tqgF20S0pYPhSV4pHiNifHTuk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/french-onion-air-fryer-burger-FT-RECIPE1224-5ddaf08807af41a8b5d0d382f9a672de.jpeg",
      name: "Air-Fried Burger",
      price: "Rs-210",
      rating: 4.5,
      cuisine: "Fusion",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://www.foodfx.com.au/img/82bdf349-c6c8-426c-bbe9-aab09498f80a/wagyu-macaroni-burger.jpg?fm=jpg&q=60&fit=max&crop=3667%2C2059%2C0%2C1829",
      name: "Macaroni Burger",
      price: "Rs-230",
      rating: 4.4,
      cuisine: "Fusion",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://burgerrecipes.info/wp-content/uploads/2025/02/Harissa-Spiced-Lamb-and-Feta-Burger.png",
      name: "Spicy Mutton Burger",
      price: "Rs-320",
      rating: 4.8,
      cuisine: "Indian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCw_c-H-1V2Jb_adYC6j6KhdVwxoqIBj9QkzKh-VGkPa0M4XLcTXFlG38aS59SxiYkzF0&usqp=CAU",
      name: "Cheese Burst Burger",
      price: "Rs-250",
      rating: 4.7,
      cuisine: "American",
      buttonLabel1: "Order Now",
    },
  ];

  const moveSlider = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex < 0) {
      setCurrentIndex(dishes.length - 1);
    } else if (newIndex >= dishes.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const handleOrderNow = (dish) => {
    setSelectedDish(dish);
    setShowModal(true);
  };

  const handleAddToCart = (dish) => {
    if (onAddToCart) {
      onAddToCart(dish);
    }
  };

  const handleBookingConfirm = () => {
    if (name && mobile && email && tableType && persons && date && time) {
      alert(`Table Booked!\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nTable Type: ${tableType}\nPersons: ${persons}\nDate: ${date}\nTime: ${time}\nDish: ${selectedDish.name} (${selectedDish.price})`);
      setShowModal(false);
      setName('');
      setMobile('');
      setEmail('');
      setTableType('');
      setPersons('');
      setDate('');
      setTime('');
      setSelectedDish(null);
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="w-full pt-20 pb-10 px-4 sm:px-10 lg:px-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Burger Specials</h2>
        <div className="flex gap-5">
          <button onClick={() => moveSlider(-1)} className="text-3xl p-1 border border-red-400 rounded-full hover:border-red-700 cursor-pointer transition">
            <GoArrowLeft color="red" />
          </button>
          <button onClick={() => moveSlider(1)} className="text-3xl p-1 border border-red-400 rounded-full hover:border-red-700 cursor-pointer transition">
            <GoArrowRight color="red" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
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
              <div className="mb-4 flex flex-col items-center gap-2">
                <button
                  className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-800 transition w-full"
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

      {/* Modal for Table Booking */}
      {showModal && selectedDish && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <h3 className="text-2xl font-bold mb-4 text-red-700">Table Booking for {selectedDish.name}</h3>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded px-3 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="border border-gray-300 rounded px-3 py-2"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Table Type (e.g., 2-Seater)"
                className="border border-gray-300 rounded px-3 py-2"
                value={tableType}
                onChange={(e) => setTableType(e.target.value)}
              />
              <input
                type="number"
                placeholder="Number of Persons"
                min="1"
                className="border border-gray-300 rounded px-3 py-2"
                value={persons}
                onChange={(e) => setPersons(e.target.value)}
              />
              <input
                type="date"
                className="border border-gray-300 rounded px-3 py-2"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="time"
                className="border border-gray-300 rounded px-3 py-2"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleBookingConfirm}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Burger;
