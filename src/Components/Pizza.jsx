import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Pizza = ({ onAddToCart }) => {
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
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/960px-Pizza_Margherita_stu_spivack.jpg",
      name: "Margherita Pizza",
      price: "Rs-250",
      rating: 4.5,
      cuisine: "Italian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://vegplatter.in/files/public/images/partner/catalog/125/Farm%20House%20Pizza.jpg",
      name: "Farmhouse Pizza",
      price: "Rs-350",
      rating: 4.8,
      cuisine: "Italian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-2c.jpg",
      name: "Peppy Paneer Pizza",
      price: "Rs-330",
      rating: 4.6,
      cuisine: "Indian-Italian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://5.imimg.com/data5/SELLER/Default/2021/10/WD/PK/SB/4614651/frozen-special-veg-pizza-500x500.jpg",
      name: "Veg Extravaganza",
      price: "Rs-370",
      rating: 4.7,
      cuisine: "Italian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://b.zmtcdn.com/data/dish_photos/f00/df3c89151f271b3d9efe019d1bf01f00.jpg",
      name: "Chicken Golden Delight",
      price: "Rs-400",
      rating: 4.9,
      cuisine: "Italian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://content.jdmagicbox.com/comp/mahabubnagar/d8/9999p8542.8542.230414020404.i7d8/catalogue/domino-s-pizza-srinivasa-colony-mahabubnagar-pizza-outlets-pwWSvbo1IO.jpg",
      name: "Non-Veg Supreme",
      price: "Rs-450",
      rating: 4.8,
      cuisine: "Italian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://deliverywala.store/cdn/shop/files/images-_3_2_f3f1cb39-0337-4fb6-a4d1-899bd2e50267.jpg?v=1729366871",
      name: "Paneer Makhani Pizza",
      price: "Rs-320",
      rating: 4.6,
      cuisine: "Indian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh-hDc6L1I5MaPwHeKP9ATLbKsDrr7fo1Ew&s",
      name: "Tandoori Paneer Pizza",
      price: "Rs-340",
      rating: 4.7,
      cuisine: "Indian",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://littlespicejar.com/wp-content/uploads/2015/08/BBQ-Chicken-Pizza-22.jpg",
      name: "BBQ Chicken Pizza",
      price: "Rs-390",
      rating: 4.9,
      cuisine: "American",
      buttonLabel1: "Order Now",
    },
    {
      image: "https://cdn.dotpe.in/longtail/store-items/7885519/zHAJykHl.jpeg",
      name: "Cheese Burst Pizza",
      price: "Rs-300",
      rating: 4.8,
      cuisine: "Italian",
      buttonLabel1: "Order Now",
    },
  ];

  const totalDishes = dishes.length;

  const moveSlider = (direction) => {
    const newIndex = currentIndex + direction;
    setCurrentIndex((newIndex + totalDishes) % totalDishes);
  };

  const handleOrderNow = (dish) => {
    setSelectedDish(dish);
    setShowModal(true);
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
        <h2 className="text-3xl font-semibold">Pizza Specials</h2>
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

export default Pizza;
