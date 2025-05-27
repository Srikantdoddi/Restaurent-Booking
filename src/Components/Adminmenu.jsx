import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Dashboard', path: '/admin/dashboard' },
  { name: 'User & Restaurent', path: '/admin/userrestaurent' },
  { name: 'Support & Issues', path: '/admin/supportissues' },
  // { name: 'Event Monitoring', path: '/admin/eventmoniter' },
  { name: 'Reports', path: '/admin/reports' },
];

const Adminmenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    // Clear tokens or session storage if needed
    navigate('/');
  };

  return (
    <div className='bg-white drop-shadow-lg px-4 sm:px-10 md:px-20 py-3'>
      <div className='flex items-center justify-between'>
        <img src={logo} alt="company logo" width={60} className='sm:w-[70px]' />

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-10'>
          <ul className='flex items-center gap-6'>
            {navLinks.map((link, index) => {
              const isActive = location.pathname.startsWith(link.path);
              return (
                <li
                  key={index}
                  className={`list-none cursor-pointer font-medium ${
                    isActive ? 'text-red-600 underline' : 'text-black hover:text-orange-600'
                  }`}
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
          <button
            onClick={handleLogout}
            className='px-5 py-2 border border-white hover:border-orange-700 bg-orange-700 hover:bg-white text-white hover:text-orange-700 rounded-lg cursor-pointer'
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className='md:hidden mt-4'>
          <ul className='flex flex-col gap-4'>
            {navLinks.map((link, index) => {
              const isActive = location.pathname.startsWith(link.path);
              return (
                <li
                  key={index}
                  className={`list-none cursor-pointer font-medium ${
                    isActive ? 'text-red-600 underline' : 'text-black hover:text-orange-600'
                  }`}
                >
                  <Link to={link.path} onClick={() => setMenuOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className='mt-4 w-full py-2 border border-white hover:border-orange-700 bg-orange-700 hover:bg-white text-white hover:text-orange-700 rounded-lg'
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Adminmenu;
