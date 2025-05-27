import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-20 px-20 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 ">
        <h2 className="font-bold text-3xl text-red-700 text-center">Get in Touch with Us</h2>
        <p className='mt-3 font-normal text-md text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, excepturi?</p>

        {/* Main container for content and map */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-20">
          {/* Content Section */}
          <div className="lg:w-1/2">
            <h3 className="font-bold text-xl text-red-700">Contact Information</h3>
            <p className="text-md font-light text-gray-700 mb-4">
              If you have any questions, feel free to reach out to us. We're always happy to help!
            </p>

            {/* Contact Info */}
            <div>
              <p className="text-md text-gray-700 mb-2"><strong>Email:</strong> abc@gmail.com</p>
              <p className="text-md text-gray-700 mb-2"><strong>Phone:</strong> +91 123456789</p>
              <p className="text-md text-gray-700 mb-4"><strong>Address:</strong>Hyderabad, India</p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    className="w-full px-2 py-1 border border-gray-300 rounded-md"
                    rows="2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-1 bg-red-700 text-white rounded-md hover:bg-red-800 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:w-1/2">
            <div className="w-full h-80 bg-gray-300 rounded-md overflow-hidden">
              {/* Google Map iframe for Hyderabad */}
              <iframe
                title="Google Map of Hyderabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.685804250669!2d78.47469631533118!3d17.385044920370317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94f9e21bb23d%3A0x442ab74b90db709f!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1632157419987!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
