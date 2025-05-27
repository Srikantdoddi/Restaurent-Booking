import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div
      id="Contact"
      className="max-w-4xl mx-auto m-10 bg-white shadow-md rounded-lg py-20 px-20"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Your Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-red-700 text-white py-3 px-8 rounded-md hover:bg-red-800 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
