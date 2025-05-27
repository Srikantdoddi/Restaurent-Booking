import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Profile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLogout = () => {
    // Clear user state if using context or localStorage
    setShowDropdown(false);
    alert('Logged out!');
    navigate('/');
  };

  return (
    <div className="px-4 sm:px-10 py-2 bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" width={70} />
        </div>

        {/* Menu for larger screens */}
        <div className="hidden lg:flex items-center gap-6">
          {["Home", "Menu", "Services", "Tables", "Events", "Contact"].map((item) => (
            <li key={item} className="list-none text-black hover:text-red-700">
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </div>

        {/* Profile Icon */}
        <div className="hidden md:flex items-center gap-4 relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 text-black border px-4 py-2 rounded-lg"
          >
            <FaUserCircle size={24} />
            Srikanth
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white border shadow-md rounded-lg w-40 z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-red-100"
                onClick={() => setShowDropdown(false)}
              >
                My Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-red-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes size={24} className="text-black" />
            ) : (
              <FaBars size={24} className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-white shadow-md rounded-b-lg p-4">
          <ul className="flex flex-col gap-4 items-start">
            {["Home", "Menu", "Services", "Tables", "Events", "Contact"].map((item) => (
              <li key={item} className="text-black hover:text-red-700">
                <Link to={`/${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="text-black hover:text-red-700">
                My Profile
              </Link>
            </li>
            <li>
              <button onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }} className="text-black hover:text-red-700">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
