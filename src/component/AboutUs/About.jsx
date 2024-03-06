import React from 'react';
import photographerImage from '../../Images/photographer.jpg'; // Adjust the path accordingly
import './About.css'; // Add your styling in AboutUs.css
import ContactUsTwoSections from '../contact/contact.jsx';
import Footer from '../footer.jsx';
const AboutUs = () => {
  return (
    <> 
    <div className="about-us-container">
     
    <div className="image-section">
        <img src={photographerImage} alt="Photographer" />
    </div>

    <div className="text-section">
        <p>
          <h1>
            <span className='Photo-name'> I am </span>
            <span className='Photographer-name'>Bittu Kumar</span>
          </h1>
          Welcome to our photography studio! We are passionate about capturing timeless moments of love and beauty. 
          With our skilled photographers and state-of-the-art equipment, we strive to create stunning visual stories 
          that will be cherished forever.
        </p>
     </div>

      
    </div>
    <ContactUsTwoSections/>
    </>
  );
};

export default AboutUs;
