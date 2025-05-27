import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing left and right arrow icons

// Sample Testimonial Data (8 cards)
const testimonials = [
  {
    name: "Srikanth",
    feedback: "The food here is absolutely amazing! Highly recommend.",
    image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1742886908~exp=1742890508~hmac=087937355b70de99641e08350a1290469616bdcb38963ad8739de5957da8e263&w=996"
  },
  {
    name: "Parimala",
    feedback: "Absolutely the best pasta I’ve ever had.",
    image: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1742887098~exp=1742890698~hmac=26fc677ff71cbbd96c8a4693ab57b6fd1cabe48b9515d96350a3435725f0739b&w=996"
  },
  {
    name: "Suresh",
    feedback: "Great service and delicious food. I will come back for sure!",
    image: "https://img.freepik.com/premium-photo/happiness-bearded-businessman-smiling-into-camera-businessman-with-beard-grinning-having-positive-look-studio-shot_416530-4258.jpg?w=996"
  },
  {
    name: "Kowsalya",
    feedback: "The best dessert options I have ever tasted!",
    image: "https://img.freepik.com/free-photo/picture-dissatisfied-grumpy-young-afro-american-woman-with-long-straight-hair-expressing-her-disagreement-keeping-arms-folded-looking-with-serious-skeptical-facial-expression_344912-1026.jpg?t=st=1742887742~exp=1742891342~hmac=8d7e5e284bc747969c3a2c4ffc6671e6fe6a3454266875eddb9f08a3ba069079&w=996"
  },
  {
    name: "Surya",
    feedback: "Best pizza in town! Loved the ambiance and the staff.",
    image: "https://img.freepik.com/premium-photo/portrait-young-handsome-bearded-hipster-man-white_251136-80290.jpg?w=996"
  },
  {
    name: "Sushmitha",
    feedback: "Such a great experience. Will recommend to everyone.",
    image: "https://img.freepik.com/premium-photo/portrait-young-beautiful-cute-cheerful-girl-smiling-gray-wall_136354-3056.jpg?w=996"
  },
  {
    name: "Prabhakar",
    feedback: "A delightful experience with family. Highly recommended!",
    image: "https://img.freepik.com/free-photo/handsome-smiling-man-looking-with-disbelief_176420-19591.jpg?t=st=1742887299~exp=1742890899~hmac=ef1f7518c591645fc12d7404f6a58ffec6b229b1d607875915b96b60a36cdd39&w=996"
  },
 
  
  {
    name: "Bhavana",
    feedback: "Great ambiance, excellent food. Will be back soon.",
    image: "https://img.freepik.com/premium-photo/young-english-woman-isolated-pink-background-keeping-arms-crossed-frontal-position_1368-312423.jpg?w=900"
  },
  
];

const TestimonialSlider = () => {
  const settings = {
     // show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 2 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Show left and right arrows
    nextArrow: (
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 text-white bg-orange-700 rounded-full opacity-75 hover:opacity-100 focus:outline-none">
        <FaArrowRight size={20}  color='white' className='bg-orange-700 w-8 p-1 h-auto rounded-4xl' /> {/* Right Arrow */}
      </button>
    ),
    prevArrow: (
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 text-white bg-orange-700 rounded-full opacity-75 hover:opacity-100 focus:outline-none">
        <FaArrowLeft size={20} color='white' className='bg-orange-700 w-8 p-1 h-auto rounded-4xl' /> {/* Left Arrow */}
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024, // Medium devices like tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small devices like mobile phones
        settings: {
          slidesToShow: 1, // Show 1 card at a time
        },
      },
    ],
  };

  return (
    
    <div className="testimonial-slider-container   py-20 px-20 relative flex-row items-center text-center ">
      <h2 className="font-bold  text-3xl text-orange-700 ">What Our Customers Say</h2>
      <p className='mt-3 font-normal text-md mb-15'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, excepturi?</p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide  px-4">
            <div className="testimonial-content bg-white p-5 rounded-xl shadow-xl text-center border border-orange-700">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full mb-6 object-cover"
              />
              <p className="text-xl text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
              <h4 className="text-xl font-semibold text-gray-800">- {testimonial.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
