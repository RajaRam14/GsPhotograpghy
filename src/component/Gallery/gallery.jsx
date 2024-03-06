import React from 'react';
import Portfolio  from '../home-gallery/home-gallery.jsx'
import GalleryHeader from './galleryHeader.jsx';
import BookDemo from '../BookDemo/BookDemo.jsx';
import Footer from '../footer.jsx';
// Define the GalleryComponent
const GalleryComponent = () => {
  return (
    <div>
        <GalleryHeader/>
        <BookDemo/>
        <Footer/>
    </div>
       
  );
};

export default GalleryComponent;
