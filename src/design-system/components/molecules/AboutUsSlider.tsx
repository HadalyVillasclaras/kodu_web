import React, { useState, useEffect, useRef, ReactNode } from 'react';
import styles from './AboutUsSlider.module.scss';
import { AboutUs } from '../../../koduq/sections/home';
import { ArrowCursor } from '../atoms';

interface SliderProps {
  images?: string[];
  transitionTime?: number;
  visibleSlides?: number;
  ChildComponent?: ReactNode;
}

export const AboutUsSlider = ({ images=['1', '2'], visibleSlides = 1 }: SliderProps) => {
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(images.length <= visibleSlides);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorInside, setIsCursorInside] = useState(false);
  const [sliderSide, setSliderSide] = useState<"left" | "right" | null>(null);

  const nextSlide = () => {
    if (currentIndex < images.length - visibleSlides) setCurrentIndex(prevState => prevState + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(prevState => prevState - 1);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (side: "left" | "right") => {
    setSliderSide(side);
    setIsCursorInside(true);
  };

  const handleMouseLeave = () => {
    setIsCursorInside(false);
  };

  let isArrowButtonDisabled = false;
  if (sliderSide === "left" && isLeftDisabled) {
    isArrowButtonDisabled = true;
  } else if(sliderSide === "right" && isRightDisabled) {
    isArrowButtonDisabled = true;
  }

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${-currentIndex * (100 / visibleSlides)}%)`;
    }
    setIsLeftDisabled(currentIndex === 0);
    setIsRightDisabled(currentIndex >= images.length - visibleSlides);
  }, [currentIndex]);

  return (
    <>
      <div className={styles['destination-slider-container']} onMouseMove={handleMouseMove}  >
        <button 
          className={`${styles['slider__controls']} ${styles["slider__controls-left"]}`} 
          onMouseEnter={() => handleMouseEnter("left")} 
          onMouseLeave={handleMouseLeave}
          onClick={prevSlide} 
        />
        <div className={styles['slider-container']}>
          <div className={styles['slider']} ref={sliderRef}>
              <div className={styles['slider__slide']} style={{ flex: `0 0 calc(100% / ${visibleSlides})` }}>
              <AboutUs />
              </div>
              <div className={styles['slider__slide']} style={{ flex: `0 0 calc(100% / ${visibleSlides})` }}>
                <img  src={`${BASE_ASSETS}imgs/destinations/paraty/paraty-1.png`} />
              </div>
          </div>
        </div>
        <button 
          className={`${styles['slider__controls']} ${styles["slider__controls-right"]}`} 
          onMouseEnter={() => handleMouseEnter("right")} 
          onMouseLeave={handleMouseLeave}
          onClick={nextSlide}
        />
        <ArrowCursor
          topPosition={cursorPosition.y}
          leftPosition={cursorPosition.x}
          isCursorInside={isCursorInside}
          arrowDirection={sliderSide}
          isDisabled ={isArrowButtonDisabled}
          color='green'
        />
      </div>
    </>
  );
};
