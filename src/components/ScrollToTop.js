import React, { useEffect, useState } from 'react';
import UpArrow from '../assets/UpArrow.gif';

const iconStyle = {
  margin: '30px',
  width: '100px',
  zindex: '+1'
};

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div style={iconStyle} className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <img
            style={iconStyle}
            src={UpArrow}
            alt="Go to top"
          />
        </div>
      )}
    </div>
  );
}
