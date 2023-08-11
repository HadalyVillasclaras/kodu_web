import  { useState, useEffect, useRef, ReactNode } from 'react';
import styles from './DestinationsSlider.module.scss';
import { ArrowCursor } from '../../../design-system/molecules/ArrowCursor';
import { DestinationCard } from '../../../design-system/molecules/DestinationCard';

interface SliderProps {
  transitionTime?: number;
  visibleSlides?: number;
  ChildComponent?: ReactNode;
}

const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

const destinations = [
  { 
    id: 903, 
    homeName: "Paraty", 
    img: `${BASE_ASSETS}imgs/homes/paraty/paraty-3.png`, 
    alt: "The Paraty home" 
  },
  { 
    id: 902, 
    homeName: "Dunlap Hollow", 
    img: `${BASE_ASSETS}imgs/homes/dunlap/dunlap-6.png`, 
    alt: "The Dunlap Hollow home" },
  { 
    id: 901, 
    homeName: "The Bloomhouse", 
    img: `${BASE_ASSETS}imgs/homes/bloom/bloom-7.png`, 
    alt: "The Bloomhouse in Austin with its unique organic and curved shape architecture" 
  },
  { 
    id: 903, 
    homeName: "Paraty", 
    img: `${BASE_ASSETS}imgs/homes/paraty/paraty-1.png`, 
    alt:"The Paraty home" 
  },
  { 
    id: 902, 
    homeName: "Dunlap Hollow", 
    img: `${BASE_ASSETS}imgs/homes/dunlap/dunlap-7.png`, 
    alt: "The Dunlap Hollow home" 
  }
];

export const DestinationsSlider = ({ visibleSlides = 3 }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(destinations.length <= visibleSlides);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorInside, setIsCursorInside] = useState(false);
  const [sliderSide, setSliderSide] = useState<"left" | "right" | null>(null);

  const nextSlide = () => {
    if (currentIndex < destinations.length - visibleSlides) setCurrentIndex(prevState => prevState + 1);
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
  } else if (sliderSide === "right" && isRightDisabled) {
    isArrowButtonDisabled = true;
  }

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${-currentIndex * (100 / visibleSlides)}%)`;
    }
    setIsLeftDisabled(currentIndex === 0);
    setIsRightDisabled(currentIndex >= destinations.length - visibleSlides);
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
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={styles['slider__slide']}
                style={{ flex: `0 0 calc(100% / ${visibleSlides})` }}
              >
                <DestinationCard id={Number(destination.id)} homeName={destination.homeName} src={destination.img} />
              </div>
            ))}
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
          isDisplayed={isCursorInside}
          arrowOrientation={sliderSide}
          isDisabled={isArrowButtonDisabled}
          color='brown'
        />
      </div>
    </>
  );
};
