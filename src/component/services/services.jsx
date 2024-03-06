import React from 'react';
import './services.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Services = () => {

    const [selectedService, setSelectedService] = useState('');
    const navigate = useNavigate(); // Get the navigate function from the useNavigate hook

    // Function to handle service button click
    const handleServiceButtonClick = (serviceName) => {
        setSelectedService(serviceName);
        navigate('/gallery', { state: { selectedService: serviceName } });
    };

    return (
        <div className="services-container">
            <div>
               <h2 className="service-portfolio-title pink">Services</h2>
            </div>
        <div className='service-services-container'>
            <div className="service-card">
                <h2 className="service-title antiquewhite">Portrait Photography</h2>
                <p className="service-description">Professional portrait photography capturing your best moments.</p>
                 <button className="service-view-gallery-button" onClick={() => handleServiceButtonClick('Portrait')}>View Gallery</button>
            </div>

            <div className="service-card">
                <h2 className="service-title antiquewhite">Wedding Photography</h2>
                <p className="service-description">Capture the magical moments of your wedding day with our expert photographers.</p>
                <button className="service-view-gallery-button" onClick={() => handleServiceButtonClick('Portrait')}>View Gallery</button>
            </div>
            
            <div className="service-card">
                <h2 className="service-title antiquewhite">Wedding Photography</h2>
                <p className="service-description">Capture the magical moments of your wedding day with our expert photographers.</p>
                <button className="service-view-gallery-button" onClick={() => handleServiceButtonClick('Portrait')}>View Gallery</button>
            </div>

            <div className="service-card">
                <h2 className="service-title antiquewhite">Pre-Wedding Shoots</h2>
                <p className="service-description">Cherish the love between you and your partner with our romantic pre-wedding shoots.</p>
                <button className="service-view-gallery-button" onClick={() => handleServiceButtonClick('Portrait')}>View Gallery</button>
            </div>

            <div className="service-card">
                <h2 className="service-title antiquewhite">Family Photography</h2>
                <p className="service-description">Celebrate the love of your family with our heartwarming family photography sessions.</p>
                <button className="service-view-gallery-button" onClick={() => handleServiceButtonClick('Portrait')}>View Gallery</button>
            </div>

            <div className="service-card">
                <h2 className="service-title antiquewhite">Event Functions</h2>
                <p className="service-description">Capture the joy and excitement of your events and functions with our expert event photographers.</p>
                <button className="service-view-gallery-button" onClick={() => handleServiceButtonClick('Portrait')}>View Gallery</button>
            </div>
         </div>
        </div>
    );
};

export default Services;
