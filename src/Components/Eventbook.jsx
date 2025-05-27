import React, { useState } from 'react';
import Payment from './Payment';

const Eventbook = ({ selectedEvent, onClose }) => {
  const [showPayment, setShowPayment] = useState(false);

  const handleContinueToPayment = (e) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const handleBackToForm = () => {
    setShowPayment(false);
  };

  const handleCloseAll = () => {
    setShowPayment(false);
    onClose(); // close Eventbook too
  };

  return (
    <>
      <div className='fixed inset-0 bg-white/70 bg-opacity-50 z-50 pt-10 overflow-y-auto'>
        <div className='min-h-screen flex items-center justify-center px-4 py-10'>
          <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative'>
            <button
              className='absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl'
              onClick={onClose}
            >
              &times;
            </button>
            <h3 className='text-2xl font-semibold text-red-700 mb-4'>Book {selectedEvent}</h3>
            <form className='space-y-4' onSubmit={handleContinueToPayment}>
              <div>
                <label className='block text-gray-700'>Full Name</label>
                <input
                  type='text'
                  className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500'
                  placeholder='Enter your name'
                  required
                />
              </div>
              <div>
                <label className='block text-gray-700'>Email Address</label>
                <input
                  type='email'
                  className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500'
                  placeholder='Enter your email'
                  required
                />
              </div>
              <div>
                <label className='block text-gray-700'>Mobile Number</label>
                <input
                  type='tel'
                  className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500'
                  placeholder='Enter your mobile number'
                  required
                />
              </div>
              <div>
                <label className='block text-gray-700'>Select Date</label>
                <input
                  type='date'
                  className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500'
                  required
                />
              </div>
              <div>
                <label className='block text-gray-700'>Select Time</label>
                <input
                  type='time'
                  className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500'
                  required
                />
              </div>
              <div>
                <label className='block text-gray-700'>Event Type</label>
                <input
                  type='text'
                  value={selectedEvent}
                  disabled
                  className='w-full bg-gray-100 border border-gray-300 rounded px-4 py-2'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800 transition'
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>

      {showPayment && (
        <Payment onBack={handleBackToForm} onClose={handleCloseAll} />
      )}
    </>
  );
};

export default Eventbook;
