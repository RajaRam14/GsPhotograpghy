import React, { useState } from 'react';
import './galleryHeader.css'; // You can define your styles in this file
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.jpg';
import image4 from '../../Images/image4.jpg';
import image5 from '../../Images/image5.jpg';
import image6 from '../../Images/image6.jpg';

const GalleryHeader = () => {
  const [selectedService, setSelectedService] = useState('Photo Gallery');

  // Function to handle service button click
  const handleServiceButtonClick = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <>
      <div className="galleryContainer">
        <h1 className="galleryTitle">{selectedService}</h1>
        <div className="serviceButtons">
          <button className="serviceButton" onClick={() => handleServiceButtonClick('Prewedding')}>Prewedding</button>
          <button className="serviceButton" onClick={() => handleServiceButtonClick('Portrait')}>Portrait</button>
          <button className="serviceButton" onClick={() => handleServiceButtonClick('Landscape')}>Landscape</button>
          <button className="serviceButton" onClick={() => handleServiceButtonClick('Event Coverage')}>Event Coverage</button>
          <button className="serviceButton" onClick={() => handleServiceButtonClick('Fashion')}>Fashion</button>
          <button className="serviceButton" onClick={() => handleServiceButtonClick('Commercial')}>Commercial</button>
        </div>
      </div>
      <div className="gallery-portfolio-container">
        <div className="gallery-portfolio-images">
          <img src={image1} alt="Portfolio Item 1" className="gallery-portfolio-image" />
          <img src={image2} alt="Portfolio Item 2" className="gallery-portfolio-image" />
          <img src={image3} alt="Portfolio Item 3" className="gallery-portfolio-image" />
          <img src={image4} alt="Portfolio Item 4" className="gallery-portfolio-image" />
          <img src={image5} alt="Portfolio Item 5" className="gallery-portfolio-image" />
          <img src={image6} alt="Portfolio Item 6" className="gallery-portfolio-image" />
        </div>
        <button className='gallery-explore-button antiquewhite'>Explore More Work</button>
      </div>
    </>
  );
};

export default GalleryHeader;
