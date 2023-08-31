import { useState, useEffect, useRef, ReactNode  } from 'react';
import styles from './DinamicSlider.module.scss';
import { ArrowCursor } from '../../atoms/ArrowCursor';

type CursorPositionType = {
  x: string | number;
  y: string | number;
};

type ElementData = Record<string, string | number>;

interface SliderProps {
  transitionTime?: number;
  visibleSlides?: number;
  elementsData: ElementData[];
  renderElement: (data:ElementData) => JSX.Element;
  ChildComponent?: ReactNode;
}

export const DinamicSlider = ({ elementsData, renderElement, visibleSlides = 3 }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(elementsData.length <= visibleSlides);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [cursorPosition, setCursorPosition] = useState<CursorPositionType>({ x: '90%', y: '80%' });
  const [isCursorInside, setIsCursorInside] = useState(false);
  const [sliderSide, setSliderSide] = useState<"left" | "right" | null>(null);

  const [isInit, setIsInit] = useState(false);

  const nextSlide = () => {
    if (currentIndex < elementsData.length - visibleSlides) setCurrentIndex(prevState => prevState + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(prevState => prevState - 1);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isCursorInside && isInit) {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseEnter = (side: "left" | "right") => {
    setSliderSide(side);
    setIsCursorInside(true);
    setIsInit(true);
  };

  const handleMouseLeave = () => {
      setIsCursorInside(false);
  };

  // const initAnimatedCursor = () => {
  //   console.log('initanimated cursor');
  //   if (!isInit) {
  //     setIsInit(true);
  //   }
  // }

  // console.log('isCursorInside: ' + isCursorInside);
  // console.log('isInit: ' + isInit);

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
    setIsRightDisabled(currentIndex >= elementsData.length - visibleSlides);
  }, [currentIndex]);

  const slideGap = 2; // [2rem] the space between each slide (setted in scss) 
  return (
    <>
      <div className={styles['slider__wrapper']}  >
        <button
          className={`${styles['slider__controls']} ${styles["slider__controls-left"]}`}
          onMouseEnter={() => handleMouseEnter("left")}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onClick={prevSlide}
        />
        <div className={styles['slider__mask']}>
          <div className={styles['slider']} ref={sliderRef}>
            {elementsData.map((elementData: ElementData , index) => (
              <div
                key={index}
                className={styles['slider__slide']}
                style={{ flex: `0 0 calc((100% - ${(visibleSlides - 1) * slideGap}rem) / ${visibleSlides})` }}
              >
                {renderElement(elementData)}
              </div>
            ))}
          </div>
        </div>
        <button
          className={`${styles['slider__controls']} ${styles["slider__controls-right"]}`}
          onMouseEnter={() => handleMouseEnter("right")}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onClick={nextSlide}
        />
        {/* <span onMouseOver={initAnimatedCursor} className={styles['init-button']} ></span> */}
        <ArrowCursor
          topPosition={cursorPosition.y}
          leftPosition={cursorPosition.x}
          isCursorInside={isCursorInside}
          arrowDirection={sliderSide}
          isDisabled={isArrowButtonDisabled}
          isInit={isInit}
          color='brown'
        />
      </div>
    </>
  );
};
