import React from "react";
import ContactUsTwoSections from './contact/contact.jsx';
import Portfolio from "./home-gallery/home-gallery.jsx";
import Testimonial from "./Testimonial/testimonial.jsx";
import Services from "./services/services.jsx";
import Component from "./HeroSection/heroSection.jsx";
import Footer from './footer.jsx'
const Home = () => {
  return (
    <div>       
        <Component/>
        <Testimonial/>
        <Services/>
        <Portfolio/>
        <ContactUsTwoSections></ContactUsTwoSections>
      {/* <h1>Welcome to Our Website</h1>
      <p>This is the home page content. Customize it as per your needs.</p>
      <button onClick={()=> navigate('/NotFound')}> Not Found</button>
      <button onClick={()=> navigate('-1')}> Go Back</button>
      <Link to='/Home'>Home</Link> */}
      
    </div>
  );
};

export default Home;