import React, { useState, useRef, useEffect } from 'react';
import styles from './Slider.module.scss';

interface SliderProps {
  images: string[]; 
  transitionTime?: number; 
  visibleSlides?: number;
}

const Slider: React.FC<SliderProps> = ({ images, transitionTime = 500, visibleSlides = 2 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      slider.style.transition = `transform ${transitionTime}ms ease-in-out`;
      slider.style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;
    }
  }, [currentIndex, transitionTime, visibleSlides]);

  return (
    <div className={styles['slider-container']}>
      <div className={styles['slider-container__slider']} ref={sliderRef}>
        {images.map((imageUrl, index) => (
          <div key={index} className={styles['slider-container__slider__slide']}>
            <img src={imageUrl} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className={styles['slider-container__buttons']}>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
