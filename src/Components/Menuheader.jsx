import React, { useRef, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { FaCartArrowDown } from 'react-icons/fa';

import Menu from './Menu';
import Nonvegstarter from './Nonvegstarter';
import Vegbiryani from './Vegbiryani';
import Nonvegbiryani from './Nonvegbiryani';
import Pizza from './Pizza';
import Burger from './Burger';
import Wine from './Wine';
import Snacks from './Snacks';
import Chefspecials from './Chefspecial';

const Menuheader = () => {
  const refs = {
    VegStarter: useRef(null),
    NonVegStarter: useRef(null),
    VegBiryani: useRef(null),
    NonVegBiryani: useRef(null),
    Pizza: useRef(null),
    Burger: useRef(null),
    Wine: useRef(null),
    Snacks: useRef(null),
    Chefspecial: useRef(null),
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const handleViewCart = () => {
    setShowCartModal(true);
  };

  const handleBookingConfirm = () => {
    if (customerName && contact && email) {
      alert(
        `Booking confirmed for ${customerName}!\nItems:\n${cart.map((item, i) => `${i + 1}. ${item.name}`).join('\n')}`
      );
      setCart([]);
      setShowCartModal(false);
      setCustomerName('');
      setContact('');
      setEmail('');
      setNotes('');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sections = [
    { label: 'VegStarter', component: <Menu onAddToCart={handleAddToCart} /> },
    { label: 'NonVegStarter', component: <Nonvegstarter onAddToCart={handleAddToCart} /> },
    { label: 'VegBiryani', component: <Vegbiryani onAddToCart={handleAddToCart} /> },
    { label: 'NonVegBiryani', component: <Nonvegbiryani onAddToCart={handleAddToCart} /> },
    { label: 'Pizza', component: <Pizza onAddToCart={handleAddToCart} /> },
    { label: 'Burger', component: <Burger onAddToCart={handleAddToCart} /> },
    { label: 'Wine', component: <Wine onAddToCart={handleAddToCart} /> },
    { label: 'Snacks', component: <Snacks onAddToCart={handleAddToCart} /> },
    { label: 'Chefspecial', component: <Chefspecials onAddToCart={handleAddToCart} /> },
  ];

  const filteredSections = sections.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-28 relative">
      {/* View Cart Button */}
      <div className="fixed top-20 right-5 z-50">
        <button
          onClick={handleViewCart}
          className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-800 flex items-center gap-2"
        >
          <FaCartArrowDown /> View Cart ({cart.length})
        </button>
      </div>

      <div className="px-4 sm:px-6 lg:px-20">
        <div className="flex flex-wrap items-center justify-center gap-3 overflow-x-auto py-4 scrollbar-hide">
          {sections.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(refs[item.label])}
              className="px-4 py-2 border border-gray-600 rounded-3xl text-sm whitespace-nowrap hover:bg-gray-200 transition"
            >
              {item.label}
            </button>
          ))}

          {/* Search Bar */}
          <div className="flex items-center gap-2 mt-5 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="px-6 py-2 rounded-lg border border-gray-400 text-sm focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="px-4 py-2 rounded-lg border border-red-700 bg-red-700 text-white hover:bg-red-500 transition"
              onClick={() => {
                if (filteredSections.length > 0) {
                  scrollToSection(refs[filteredSections[0].label]);
                }
              }}
            >
              <IoIosSearch />
            </button>
          </div>
        </div>
      </div>

      {/* Render Sections */}
      {sections.map((item) =>
        filteredSections.find((f) => f.label === item.label) ? (
          <div key={item.label} ref={refs[item.label]}>
            {item.component}
          </div>
        ) : null
      )}

      {/* Cart Modal */}
      {showCartModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
            <h2 className="text-2xl font-bold mb-4 text-center">Cart Booking</h2>

            <div className="mb-4 max-h-40 overflow-y-auto border rounded p-2">
              <ul className="list-disc pl-5 text-sm">
                {cart.map((item, i) => (
                  <li key={i}>{item.name}</li>
                ))}
              </ul>
            </div>

            <input
              type="text"
              placeholder="Your Name"
              className="border w-full mb-2 p-2 rounded"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="border w-full mb-2 p-2 rounded"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="border w-full mb-2 p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Special Requests or Notes (optional)"
              className="border w-full mb-4 p-2 rounded"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>

            <div className="flex justify-between">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
                onClick={handleBookingConfirm}
              >
                Confirm Booking
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800"
                onClick={() => setShowCartModal(false)}
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

export default Menuheader;