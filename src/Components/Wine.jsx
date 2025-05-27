import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa";

const Wine = ({ onAddToCart }) => {
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

  const wines = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVOZ4MLU3rO8oPTopK25BtOx8eS-CyufDHxFWyt3c_HFWLQ_LGnkgYO_kywYTJzD8UGM&usqp=CAU",
      name: "Malbec - DV Catena",
      price: "Rs-1800",
      rating: 4.5,
      cuisine: "Argentinian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://www.popevalleywinery.com/assets/images/products/pictures/2017Cabernet-YGAFUI.jpg",
      name: "Cabernet Sauvignon",
      price: "Rs-2100",
      rating: 4.7,
      cuisine: "French",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://cwspirits.com/cdn/shop/collections/Zinfandel_2x_76e1cc79-54bd-411b-8949-98fd15e6166e.png?v=1724924004",
      name: "Zinfandel Red",
      price: "Rs-1950",
      rating: 4.6,
      cuisine: "American",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://imgmediagumlet.lbb.in/media/2024/06/66795d6461fe0674dd45c80f_1719229796198.jpg",
      name: "Rosé Wine",
      price: "Rs-1600",
      rating: 4.3,
      cuisine: "Mediterranean",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://celebrationblenders.com/wp-content/uploads/2016/03/Red-Pinot-Noir-w-cup-v2.png",
      name: "Pinot Noir",
      price: "Rs-2400",
      rating: 4.9,
      cuisine: "French",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://www.thehappyhigh.com/uploads/3/9/0/4/39046133/imported-chardonnay-india_orig.jpg",
      name: "Chardonnay",
      price: "Rs-1700",
      rating: 4.4,
      cuisine: "Australian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://www.luckettvineyards.com/cdn/shop/files/Imports-3of3_1_28beac49-31f7-4a0e-827e-c260ac06988a_1200x.png?v=1727970402",
      name: "White Riesling",
      price: "Rs-2000",
      rating: 4.6,
      cuisine: "German",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://settembrecellars.com/cdn/shop/files/2015-Sang-01.png?v=1714233102",
      name: "Sangiovese",
      price: "Rs-2200",
      rating: 4.7,
      cuisine: "Italian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://chizay.com/wp-content/uploads/2018/08/Merlot_2019-3.jpg",
      name: "Merlot",
      price: "Rs-1900",
      rating: 4.5,
      cuisine: "French",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://nicholsonriverwinery.com.au/cdn/shop/products/2015NRSyrah_750x947.jpg?v=1590994891",
      name: "Syrah/Shiraz",
      price: "Rs-2500",
      rating: 4.8,
      cuisine: "Australian",
      buttonLabel1: "Order Now",
    },
  ];

  const moveSlider = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex < 0) {
      setCurrentIndex(wines.length - 1);
    } else if (newIndex >= wines.length) {
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
      alert(`Table Booked!\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nTable Type: ${tableType}\nPersons: ${persons}\nDate: ${date}\nTime: ${time}\nWine: ${selectedDish.name} (${selectedDish.price})`);
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
        <h2 className="text-3xl font-semibold">Wine Specials</h2>
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
          {wines.map((wine, index) => (
            <div key={index} className="flex-shrink-0 w-full max-w-[280px] mx-2 border border-gray-200 rounded-lg bg-white shadow-lg text-center">
              <img src={wine.image} alt={wine.name} className="w-full object-cover h-40 rounded-t-lg mb-2" />
              <div className="flex justify-between items-center px-4 mt-2">
                <h3 className="text-lg font-bold text-red-700">{wine.name}</h3>
                <p className="text-yellow-500 text-sm">⭐ {wine.rating}/5</p>
              </div>
              <div className="flex justify-between items-center px-4 mt-1 mb-3">
                <p className="text-gray-700 font-semibold">{wine.price}</p>
                <p className="text-gray-500 text-sm">{wine.cuisine}</p>
              </div>
              <div className="flex flex-col items-center gap-2 mb-4">
                <button className="bg-red-700 text-white py-1 px-4 rounded hover:bg-red-900 transition text-sm" onClick={() => handleOrderNow(wine)}>
                  {wine.buttonLabel1}
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
          <div className="bg-white p-8 rounded-lg w-80 relative">
            <h2 className="text-xl font-bold mb-4 text-center text-red-700">Book Table</h2>
            <p className="mb-2"><strong>Wine:</strong> {selectedDish.name}</p>
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

export default Wine;
