import React, { useState } from 'react';

const Payment = ({ onBack, onClose }) => {
  const price = 500; // You can make this dynamic by passing it as a prop

  const handleCardPayment = (e) => {
    e.preventDefault();
    alert(`Payment of ₹${price} Successful via Card!`);
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black/40 flex justify-center items-center z-50 overflow-y-auto'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative'>
        <button
          className='absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl'
          onClick={onClose}
        >
          &times;
        </button>

        <h3 className='text-2xl font-semibold text-red-700 mb-2'>Card Payment</h3>
        <p className='text-lg text-gray-800 mb-4'>
          Amount: <span className='font-bold'>₹{price}</span>
        </p>

        <form onSubmit={handleCardPayment} className='space-y-4'>
          <div>
            <label className='block text-gray-700'>Cardholder Name</label>
            <input
              type='text'
              required
              placeholder='John Doe'
              className='w-full border border-gray-300 rounded px-4 py-2'
            />
          </div>
          <div>
            <label className='block text-gray-700'>Card Number</label>
            <input
              type='text'
              required
              maxLength={16}
              placeholder='1234 5678 9012 3456'
              className='w-full border border-gray-300 rounded px-4 py-2'
            />
          </div>
          <div className='flex gap-4'>
            <div className='w-1/2'>
              <label className='block text-gray-700'>Expiry Date</label>
              <input
                type='text'
                required
                placeholder='MM/YY'
                className='w-full border border-gray-300 rounded px-4 py-2'
              />
            </div>
            <div className='w-1/2'>
              <label className='block text-gray-700'>CVV</label>
              <input
                type='password'
                required
                maxLength={3}
                placeholder='123'
                className='w-full border border-gray-300 rounded px-4 py-2'
              />
            </div>
          </div>

          <div className='flex justify-between mt-6'>
            <button
              type='button'
              onClick={onBack}
              className='bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition'
            >
              Back
            </button>
            <button
              type='submit'
              className='bg-red-700 text-white py-2 px-6 rounded hover:bg-red-800 transition'
            >
              Continue to Pay ₹{price}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
