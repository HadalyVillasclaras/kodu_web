import React, { useState, useEffect, useRef } from 'react';
import styles from './DestinationsSlider.module.scss';
import { Button, Icon, IconButton } from '../../design-system/atoms';

interface SliderProps {
  images: string[];
  transitionTime?: number;
  visibleSlides?: number;
  ChildComponent?: React.FC<any>;
}

export const DestinationsSlider = ({ images, transitionTime = 500, visibleSlides = 3, ChildComponent }: SliderProps) => {
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

  useEffect(() => {
    setIsLeftDisabled(currentIndex === 0);
    setIsRightDisabled(currentIndex >= images.length - visibleSlides);
  }, [currentIndex, images.length, visibleSlides]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transform = `translateX(${-currentIndex * (100 / visibleSlides)}%)`;
    }
  }, [currentIndex, transitionTime, visibleSlides]);

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

  return (
    <>
      <div className={styles['destination-slider-container']} onMouseMove={handleMouseMove}  >
        <div 
          className={`${styles['slider__controls']} ${styles["slider__controls-left"]}`} 
          onMouseEnter={() => handleMouseEnter("left")} 
          onMouseLeave={handleMouseLeave}
        >
          <IconButton icon='arrowLeft' onClick={prevSlide} ariaLabel='Previous image' customStyle={{ width: "100%" }} />
        </div>
        <div className={styles['slider-container']}>
          <div className={styles['slider']} ref={sliderRef}>
            {images.map((imageUrl, index) => (
              <div key={index} className={styles['slider__slide']} style={{ flex: `0 0 calc(100% / ${visibleSlides})` }}>
                <img src={imageUrl} alt={`Slide ${index}`} />
              </div>
            ))}
          </div>
        </div>
        <div 
          className={`${styles['slider__controls']} ${styles["slider__controls-right"]}`} 
          onMouseEnter={() => handleMouseEnter("right")} 
          onMouseLeave={handleMouseLeave}
        >
          <IconButton icon='arrowRight' onClick={nextSlide} ariaLabel='Next image' customStyle={{ width: "100%" }} />
        </div>
        <div
          style={{
            position: 'fixed',
            top: cursorPosition.y,
            left: cursorPosition.x,
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'var(--brown)',
            transform: 'translate(-50%, -50%)',
            display: isCursorInside ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon color='green' icon={sliderSide === "left" ? 'arrowLeft' : 'arrowRight'} />
        </div>

      </div>
    </>
  );
};
