import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [/* Your slide data here */];

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearTimeout(timer);
  }, [slideIndex, slides.length]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className="swiper-slide" 
          style={{display: index === slideIndex ? 'block' : 'none'}}
        >
          {/* Slide content here */}
        </div>
      ))}
    </div>
  );
};

export default Slideshow;