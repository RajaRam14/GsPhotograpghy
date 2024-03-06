import React from 'react';
import './home-gallery.css';
import {useNavigate} from 'react-router-dom';
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.jpg';
import image4 from '../../Images/image4.jpg';
import image5 from '../../Images/image5.jpg';
import image6 from '../../Images/image6.jpg';

const Portfolio = () => {

    const navigate = useNavigate();


    const handleExploreMore = (event) => {
        event.preventDefault(); // Prevent default behavior
        navigate('/gallery'); // Navigate to '/gallery' route
    };
    return (
        <div className="gallery-portfolio-container">
             <h2 className="gallery-portfolio-title pink">Gallery</h2>
            <div className="gallery-portfolio-images">
                <img src={image1} alt="Portfolio Item 1" className="gallery-portfolio-image" />
                <img src={image2} alt="Portfolio Item 2" className="gallery-portfolio-image" />
                <img src={image3} alt="Portfolio Item 3" className="gallery-portfolio-image" />
                <img src={image4} alt="Portfolio Item 4" className="gallery-portfolio-image" />
                <img src={image5} alt="Portfolio Item 5" className="gallery-portfolio-image" />
                <img src={image6} alt="Portfolio Item 6" className="gallery-portfolio-image" />
            </div>
            <button className='gallery-explore-button antiquewhite' onClick={handleExploreMore}>Explore More Work</button>
        </div>
    );
};

export default Portfolio;
