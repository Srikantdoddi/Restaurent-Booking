import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='bg-red-700'>
      <div className='px-4 sm:px-10 py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

          {/* Left section with logo and description */}
          <div>
            <div>
              <h1 className='font-extrabold text-3xl sm:text-4xl text-white italic'>Let's Eat</h1>
              <p className='font-extralight text-sm sm:text-base text-white'>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Doloribus quam esse<br />
                laboriosam veniam inventore aliquid<br />
                maxime at possimus sed sint.
              </p>
            </div>
            <div className='flex items-center space-x-5 mt-6'>
              <FaFacebookF size={20} color='white' />
              <AiFillInstagram size={20} color='white' />
              <FaYoutube size={20} color='white' />
              <RiTwitterXLine size={20} color='white' />
            </div>
          </div>

          {/* Company links */}
          <div className='flex flex-col items-center'>
            <h3 className='text-2xl font-semibold text-white'>Company</h3>
            <div className='flex flex-col items-center space-y-2 mt-4'>
              <Link className='text-lg font-extralight text-white'>Home</Link>
              <Link className='text-lg font-extralight text-white'>Menu</Link>
              <Link className='text-lg font-extralight text-white'>Restaurants</Link>
              <Link className='text-lg font-extralight text-white'>Locations</Link>
              <Link className='text-lg font-extralight text-white'>Features</Link>
            </div>
          </div>

          {/* Legal links */}
          <div className='flex flex-col items-center'>
            <h3 className='text-2xl font-semibold text-white'>Legal</h3>
            <div className='flex flex-col items-center space-y-2 mt-4'>
              <Link className='text-lg font-extralight text-white'>Terms & Conditions</Link>
              <Link className='text-lg font-extralight text-white'>Privacy & Policy</Link>
              <Link className='text-lg font-extralight text-white'>Help & Support</Link>
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className='text-2xl font-semibold text-white'>Get In Touch</h3>
            <div>
              <p className="text-md text-white mb-2"><strong>Email:</strong> abc@gmail.com</p>
              <p className="text-md text-white mb-2"><strong>Phone:</strong> +91 123456789</p>
              <p className="text-md text-white mb-4"><strong>Address:</strong> Hyderabad, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
