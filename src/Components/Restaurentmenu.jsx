import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Dashboard', path: '/restaurant/dashboard' },
  { name: 'Orders', path: '/restaurent/orders' },
  { name: 'Menu', path: '/restaurant/menu' },
  // { name: 'Events', path: '/restaurant/events' },
  { name: 'Dining', path: '/restaurant/dining' },
  { name: 'Settings', path: '/restaurant/settings' },
];

const Restaurantmenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    // Optional: Clear auth tokens/session here
    navigate('/');
  };

  return (
    <nav className="bg-white drop-shadow-lg px-4 sm:px-6 md:px-10 lg:px-20 py-4">
      <div className="flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold text-red-600">RestoPanel</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={`text-gray-700 font-medium hover:text-red-700 transition ${
                  location.pathname === link.path ? 'text-red-700 underline' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logout Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:text-red-800 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-red-600"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-gray-700 font-medium hover:text-red-700 transition ${
                location.pathname === link.path ? 'text-red-700 underline' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:text-red-800 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Restaurantmenu;
