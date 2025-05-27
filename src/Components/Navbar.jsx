import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import logo from '../assets/logo.png';
import Login from './Login';
import SignUp from './Signup';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get current path

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => {
    setIsModalOpen(true);
    setIsSignUp(false);
  };
  const openSignUpModal = () => {
    setIsModalOpen(true);
    setIsSignUp(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setIsSignUp(false);
  };
  const toggleForm = () => setIsSignUp(!isSignUp);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You have successfully ${isSignUp ? 'signed up' : 'logged in'}!`);
    setIsModalOpen(false);
    navigate('/');
  };

  const navItems = ["Home", "Menu", "Services", "Tables", "Contact"];

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20 h-auto" />
        </Link>

        {/* Nav links (desktop) */}
        <nav className="hidden lg:flex gap-8 items-center">
          <ul className="flex gap-6">
            {navItems.map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;

              return (
                <li key={item}>
                  <Link
                    to={path}
                    className={`transition ${
                      isActive
                        ? 'text-red-600 font-semibold'
                        : 'text-black hover:text-red-600'
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action buttons (desktop) */}
        <div className="hidden md:flex gap-4 items-center">
  {/* Login button with sliding bg */}
  <button
    onClick={openModal}
    className="relative px-6 py-2 border border-red-700 text-red-900 rounded overflow-hidden group cursor-pointer transition-all duration-300"
  >
    <span className="absolute left-0 top-0 w-0 h-full bg-red-500 transition-all duration-300 group-hover:w-full z-0"></span>
    <span className="relative z-10 group-hover:text-white">Login</span>
  </button>

  {/* Register button with pulse & scale */}
  <button
    onClick={openSignUpModal}
    className="px-6 py-2 border border-red-700 bg-red-700 text-white rounded cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-red-300 active:scale-100"
  >
    Register to Dine
  </button>
</div>


        {/* Hamburger (mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes size={24} className="text-black" />
            ) : (
              <FaBars size={24} className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col p-4 gap-4">
            {navItems.map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;

              return (
                <li key={item}>
                  <Link
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition ${
                      isActive
                        ? 'text-orange-600 font-semibold'
                        : 'text-black hover:text-orange-600'
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => {
                  openModal();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left text-black hover:text-orange-600"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  openSignUpModal();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left text-black hover:text-orange-600"
              >
                Register to Dine
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative border border-orange-600">
            <button onClick={closeModal} className="absolute top-2 right-2">
              <RxCross1 size={24} color="red" />
            </button>
            {isSignUp ? (
              <SignUp handleSubmit={handleSubmit} toggleForm={toggleForm} />
            ) : (
              <Login handleSubmit={handleSubmit} toggleForm={toggleForm} />
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
