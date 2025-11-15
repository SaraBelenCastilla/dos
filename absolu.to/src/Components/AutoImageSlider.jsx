import React from 'react'
import { useState, useEffect } from 'react';



const AutoImageSlider = ({ 
  images, 
  interval = 4000, 
  className,
  alt = "Slider image"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
const [open, setOpen] = useState(false);
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 500);
      
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images.length) {
    return (
      <div className={`${noImages} ${className || ''}`}>
        <p>No hay imágenes disponibles</p>
      </div>
    );
  }

  return (
   <div className={`sliderS ${className || ''}`}>
    
  <img
    src={images[currentIndex]}
    alt={`${alt} ${currentIndex + 1}`}
    className={`image ${isVisible ? 'visible' : 'hidden'}`}
  />
  {images.length > 1 && (
    <div className='indicators'>
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => {
              setCurrentIndex(index);
              setIsVisible(true);
            }, 250);
          }}
          className={`indicator ${index === currentIndex ? 'active' : ''}`}
          aria-label={`Ir a imagen ${index + 1}`}
        />
      ))}
        </div>
      )}
    </div>
  );
};

export default AutoImageSlider