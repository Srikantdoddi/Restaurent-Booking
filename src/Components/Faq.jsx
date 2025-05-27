import React, { useState } from 'react';

const faqs = [
  {
    question: 'How can i book an Event',
    answer:
      'You can book an Event directly through our website by clicking the "Book Now" button on the event page.',
  },
  {
    question: 'Can I get a refund if I can’t attend?',
    answer:
      'Refund policies vary by event. Please check the specific event’s details. In most cases, tickets are non-refundable.',
  },
  {
    question: 'Is there parking available at the venue?',
    answer:
      'Yes, most venues offer parking. Availability and cost may vary, so we recommend checking the event location info.',
  },
  {
    question: 'Are events family-friendly?',
    answer:
      'Some events are family-friendly, while others may be 18+ or 21+. Check the event listing for age restrictions.',
  },
  {
    question: 'Will food and drinks be available?',
    answer:
      'Most events feature food and beverage vendors. Some may also have licensed bars—bring your ID if you’re over 21.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="px-20 py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://www.shutterstock.com/shutterstock/videos/1101412843/thumb/1.jpg?ip=x480')`,
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-red-700">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium hover:bg-red-50 transition"
            >
              <span>{faq.question}</span>
              <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-3 bg-red-50 text-gray-600 border-t border-t-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
