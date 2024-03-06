import React, { useState, useEffect } from 'react';
import './testimonial.css';
import image7 from '../../Images/image7.jpg';
import image8 from '../../Images/image8.jpg';

const testimonialData = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: image7
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: image8
  },
  // Add more testimonial data as needed
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-portfolio-title pink">Testimonial</h2>
      <div className="testimonial">
        <div className="testimonial-image">
          <img src={testimonialData[currentTestimonial].image} alt={testimonialData[currentTestimonial].name} />
        </div>
        <div className="testimonial-text antiquewhite">
          <h2>{testimonialData[currentTestimonial].text}</h2>
          <p>- {testimonialData[currentTestimonial].name}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
