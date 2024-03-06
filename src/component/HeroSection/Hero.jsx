import React from 'react';
import weddingImage from  '../../Images/wedding.webp';
import './hero.css';

const WeddingPhotography = () => {
  return (
    <div id="hero-section">
      <div id="text-section">
        <h1>Capturing Timeless Moments of Love</h1>
        <div className="button-container">
          <button>View Our Portfolio</button>
          <button>Explore Our Work</button>
        </div>
      </div>
      <div id="image-section">
        <img src={weddingImage} alt="Wedding" />
      </div>
    </div>
  );
};

export default WeddingPhotography;
