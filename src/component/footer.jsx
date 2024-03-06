import React from 'react';

const Footer = () => {
    const footerStyle = {
        textAlign: 'center',
        borderTop: '1px solid #ccc', // Border line above footer
        padding: '20px 0',
    
        backgroundColor: ' #282828', 
       // Background color for the footer
    };

    return (
        <footer style={footerStyle } className='antiquewhite'>
            © 2024 Your Company Name. All rights reserved.
        </footer>
    );
};

export default Footer;
