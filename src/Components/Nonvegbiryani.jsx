// Updated Nonvegbiryani.js to connect to parent Menuheader cart state
import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa";

const Nonvegbiryani = ({ onAddToCart }) => {
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
    { image: "https://i.ytimg.com/vi/_gPeCDqy7v0/hq720.jpg", name: "Chicken Biryani", price: "Rs-300", rating: 4.8, cuisine: "Indian", buttonLabel1: "Order Now" },
    { image: "https://static.toiimg.com/thumb/53094793.cms?imgsize=178546&width=800&height=800", name: "Mutton Biryani", price: "Rs-350", rating: 4.9, cuisine: "Indian", buttonLabel1: "Order Now" },
    { image: "https://static.toiimg.com/thumb/52397749.cms?imgsize=299414&width=800&height=800", name: "Egg Biryani", price: "Rs-220", rating: 4.5, cuisine: "Indian", buttonLabel1: "Order Now" },
    { image: "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2017/03/pepper-delight-prawn-biriyani-5.jpg", name: "Prawn Biryani", price: "Rs-330", rating: 4.7, cuisine: "Indian", buttonLabel1: "Order Now" },
    { image: "https://i.ytimg.com/vi/kEsTKMM7TyY/maxresdefault.jpg", name: "Fish Biryani", price: "Rs-310", rating: 4.6, cuisine: "Indian", buttonLabel1: "Order Now" },
    { image: "https://i.ytimg.com/vi/PNum_b_hCGY/maxresdefault.jpg", name: "Beef Biryani", price: "Rs-320", rating: 4.4, cuisine: "Indian", buttonLabel1: "Order Now" },
    { image: "https://www.cookwithkushi.com/wp-content/uploads/2016/04/chicken_tikka_biryani_recipe_best_simple_easy.jpg", name: "Chicken Tikka Biryani", price: "Rs-340", rating: 4.7, cuisine: "Indian", buttonLabel1: "Order Now" },
    { image: "https://www.bigbasket.com/media/uploads/recipe/w-l/2197_1_1.jpg", name: "Keema Biryani", price: "Rs-280", rating: 4.5, cuisine: "Indian", buttonLabel1: "Order Now" },
    { image: "https://uptownasia.in/wp-content/uploads/2024/09/Chicken-65-Biryanii.jpg", name: "Chicken 65 Biryani", price: "Rs-320", rating: 4.6, cuisine: "Indian", buttonLabel1: "Order Now" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwyyQZdVkFX2bby3nG-7p9quiAzx7iEu31wA&s", name: "Lobster Biryani", price: "Rs-450", rating: 4.8, cuisine: "Indian", buttonLabel1: "Order Now" },
  ];

  const moveSlider = (direction) => {
    const newIndex = (currentIndex + direction + dishes.length) % dishes.length;
    setCurrentIndex(newIndex);
  };

  const handleOrderNow = (dish) => {
    setSelectedDish(dish);
    setShowModal(true);
  };

  const handleBookingConfirm = () => {
    if (name && mobile && email && tableType && persons && date && time) {
      alert(`Table Booked!\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nTable Type: ${tableType}\nPersons: ${persons}\nDate: ${date}\nTime: ${time}\nDish: ${selectedDish.name} (${selectedDish.price})`);
      setShowModal(false);
      setName(''); setMobile(''); setEmail(''); setTableType(''); setPersons(''); setDate(''); setTime(''); setSelectedDish(null);
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="w-full pt-20 pb-10 px-5 sm:px-10 lg:px-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Non-Veg Biryani Specials</h2>
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
            <div key={index} className="flex-shrink-0 w-70 max-w-[280px] mx-2 sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] border border-gray-200 rounded-lg bg-white shadow-lg text-center mb-6">
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
                <button className="bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-900 transition" onClick={() => handleOrderNow(dish)}>
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

      {showModal && selectedDish && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-80 sm:w-96 md:w-[450px] relative">
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

export default Nonvegbiryani;