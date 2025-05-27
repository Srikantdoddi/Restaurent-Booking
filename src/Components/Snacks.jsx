import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa";

const Snacks = ({ onAddToCart }) => {
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
      image: "https://i.ytimg.com/vi/z_FrxDe-D0I/maxresdefault.jpg",
      name: "Chana Chaat",
      price: "Rs-100",
      rating: 4.6,
      cuisine: "Indian",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhodC3UwX9rdxoclPyjpwSMMpFPs0hzrq0TA&s",
      name: "Onion Pakora",
      price: "Rs-120",
      rating: 4.7,
      cuisine: "Indian",
    },
    {
      image: "https://thecookingfoodie.com/wp-content/uploads/2020/04/IMG_4128-2.jpg",
      name: "Samosa",
      price: "Rs-50",
      rating: 4.8,
      cuisine: "Indian",
    },
    {
      image: "https://i.ytimg.com/vi/zb3Bf350ZQU/hq720.jpg",
      name: "Mixed Vegetable Pakora",
      price: "Rs-130",
      rating: 4.5,
      cuisine: "Indian",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pani_Puri1.JPG/960px-Pani_Puri1.JPG",
      name: "Pani Puri",
      price: "Rs-60",
      rating: 4.9,
      cuisine: "Indian",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Dhokla_on_Gujrart.jpg",
      name: "Dhokla",
      price: "Rs-80",
      rating: 4.4,
      cuisine: "Gujarati",
    },
    {
      image: "https://i.ytimg.com/vi/fMJQOsM87fM/hq720.jpg",
      name: "Bhel Puri",
      price: "Rs-70",
      rating: 4.6,
      cuisine: "Indian",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKM0oXp4NXMBV2aQ2FzxBpW3zYTkrEIiM40A&s",
      name: "Aloo Tikki",
      price: "Rs-90",
      rating: 4.7,
      cuisine: "Indian",
    },
    {
      image: "https://i0.wp.com/www.nandanmsd.com/wp-content/uploads/2020/08/VEG-PAKORA.jpeg",
      name: "Vegetable Pakora",
      price: "Rs-110",
      rating: 4.7,
      cuisine: "Indian",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQcDXYM0PjqPqtPHbA03O5II2BylUEU4gGw&s",
      name: "Chili Pakora",
      price: "Rs-130",
      rating: 4.8,
      cuisine: "Indian",
    },
  ];

  const moveSlider = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex < 0) setCurrentIndex(dishes.length - 1);
    else if (newIndex >= dishes.length) setCurrentIndex(0);
    else setCurrentIndex(newIndex);
  };

  const handleOrderNow = (dish) => {
    setSelectedDish(dish);
    setShowModal(true);
  };

  const handleBookingConfirm = () => {
    if (name && mobile && email && tableType && persons && date && time) {
      alert(`Table Booked!\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nTable Type: ${tableType}\nPersons: ${persons}\nDate: ${date}\nTime: ${time}\nDish: ${selectedDish.name} (${selectedDish.price})`);
      setShowModal(false);
      setName(''); setMobile(''); setEmail('');
      setTableType(''); setPersons(''); setDate(''); setTime('');
      setSelectedDish(null);
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="w-full pt-20 pb-10 px-4 sm:px-10 lg:px-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Popular Indian Snacks</h2>
        <div className="flex gap-5">
          <button onClick={() => moveSlider(-1)} className="text-3xl p-1 border border-red-400 rounded-full hover:border-red-700 transition">
            <GoArrowLeft color="red" />
          </button>
          <button onClick={() => moveSlider(1)} className="text-3xl p-1 border border-red-400 rounded-full hover:border-red-700 transition">
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
              <div className="flex flex-col items-center gap-2 mb-4">
                <button
                  title="Add to Cart"
                  className="text-red-700 font-semibold text-sm hover:text-red-900 transition"
                  onClick={() => onAddToCart(dish)}
                >
                  + Add to Cart
                </button>
                <button onClick={() => handleOrderNow(dish)} className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-900 transition">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedDish && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-80 relative">
            <h2 className="text-xl font-bold mb-4 text-center text-red-700">Book Table</h2>
            <p className="mb-2"><strong>Dish:</strong> {selectedDish.name}</p>
            <p className="mb-4"><strong>Price:</strong> {selectedDish.price}</p>
            <input type="text" placeholder="Enter your Name" className="border w-full mb-3 p-2 rounded" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter Mobile Number" className="border w-full mb-3 p-2 rounded" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <input type="email" placeholder="Enter Email ID" className="border w-full mb-3 p-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
            <select className="border w-full mb-3 p-2 rounded" value={tableType} onChange={(e) => setTableType(e.target.value)}>
              <option value="">Select Table Type</option>
              <option value="2-Seater">2-Seater</option>
              <option value="4-Seater">4-Seater</option>
              <option value="Family Table">Family Table</option>
              <option value="Private Cabin">Private Cabin</option>
            </select>
            <input type="number" placeholder="Enter Number of Persons" className="border w-full mb-3 p-2 rounded" value={persons} onChange={(e) => setPersons(e.target.value)} />
            <input type="date" className="border w-full mb-3 p-2 rounded" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="time" className="border w-full mb-4 p-2 rounded" value={time} onChange={(e) => setTime(e.target.value)} />
            <div className="flex justify-between">
              <button onClick={handleBookingConfirm} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800">Confirm</button>
              <button onClick={() => setShowModal(false)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Snacks;
