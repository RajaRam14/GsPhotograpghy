import React from 'react';
import './heroSection.css'; // Make sure to link your CSS file
import image9 from '../../Images/image9.jpg';
const Component = () => {
  return (
    <div className="container">
      <div className="first-div">
        <div className="sub-div1">
          {/* <p className='very-small-font  padding-top'>Nalanda City , India</p> */}
          <p className='big-font pink' >WE ARE GS-PHOTOGRAPHY <br /> CAPTURING MOMENT WITH PERFECTION</p>
        </div>
        <div className="sub-div2">
          <p className='very-small-font text antiquewhite'>welcome to our photography portfolio . we excel in capturing memories and creating stunning visuals  </p>
        </div>
      </div>

      {/* Second div */}
      <div className="second-div">
         <img  src={image9} alt="Image" className="bordered-image" />
      </div>

      {/* Third div */}
      <div className="third-div">
        <div className="third-div1">
            <p className=' very-small-font '><b><span className="big-font antiquewhite">5000</span></b><br /> photoshoots <br /> completed</p>
        </div>
        <div className="third-div1">
             <p className='very-small-font '><b><span className="big-font antiquewhite">20+</span></b><br />years of <br />expertise</p>
        </div>
        <div className="third-div1">
            <p className='very-small-font '><b><span className="big-font antiquewhite">12</span></b><br /> recognition <br /> awards</p>
        </div>
        <div className="third-div2">
            <p className='very-small-font '><b><span className="big-font antiquewhite">85</span></b><br /> happy  <br />clients</p>
        </div>
      </div>
    </div>
  );
};

export default Component;
