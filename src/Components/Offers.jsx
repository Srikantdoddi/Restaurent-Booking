import React from 'react';
import { MdOutlineEventSeat } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { RiSecurePaymentLine, RiCustomerServiceLine } from "react-icons/ri";

const offersData = [
  {
    icon: <MdOutlineEventSeat size={50} className="text-red-600" />,
    title: "Fine Dining",
    description: "Enjoy gourmet meals prepared by top chefs",
  },
  {
    icon: <CiBookmarkCheck size={50} className="text-red-600" />,
    title: "Table Booking",
    description: "Reserve your seat in advance with ease.",
  },
  {
    icon: <RiSecurePaymentLine size={50} className="text-red-600" />,
    title: "100% Payment Secure",
    description: "Your transactions are fully protected.",
  },
  {
    icon: <RiCustomerServiceLine size={50} className="text-red-600" />,
    title: "Support 24/7",
    description: "We're here for you any time, day or night.",
  },
];

const Offers = () => {
  return (
    <section className="px-4 py-16 sm:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offersData.map((offer, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border border-orange-300 bg-gray-100 hover:bg-white hover:shadow-lg transition rounded-lg"
            >
              <div className="mb-4">{offer.icon}</div>
              <h3 className="text-lg font-semibold">{offer.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
