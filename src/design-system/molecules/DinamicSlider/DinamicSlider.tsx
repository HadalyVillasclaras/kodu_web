import { useState, useEffect, useRef, ReactNode  } from 'react';
import styles from './DinamicSlider.module.scss';
import { ArrowCursor } from '../../atoms/ArrowCursor';
import DinamicControlButtons from '../DinamicControlButtons';

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

  const nextSlide = () => {
    if (currentIndex < elementsData.length - visibleSlides) setCurrentIndex(prevState => prevState + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(prevState => prevState - 1);
  };


  // let isArrowButtonDisabled = false;
  // if (sliderSide === "left" && isLeftDisabled) {
  //   isArrowButtonDisabled = true;
  // } else if (sliderSide === "right" && isRightDisabled) {
  //   isArrowButtonDisabled = true;
  // }

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${-currentIndex * (100 / visibleSlides)}%)`;
      // sliderRef.current.style.transform = `translateX(${totalTranslation}%)`;

    }
    setIsLeftDisabled(currentIndex === 0);
    setIsRightDisabled(currentIndex >= elementsData.length - visibleSlides);
  }, [currentIndex]);

  return (
    <>
      <div className={styles['slider__wrapper']}  >

        <DinamicControlButtons
            onLeftClick={prevSlide}
            onRightClick={nextSlide}
        >
        <div className={styles['slider__mask']}>
          <div className={styles['slider']} ref={sliderRef}>
            {elementsData.map((elementData: ElementData , index) => (
              <div
                key={index}
                className={styles['slider__slide']}
                style={{ flex: `0 0 calc((100%  / ${visibleSlides})` }}
              >
                {renderElement(elementData)}
              </div>
            ))}
          </div>
        </div>

        </DinamicControlButtons>
        {/* <span onMouseOver={initAnimatedCursor} className={styles['init-button']} ></span> */}
        {/* <ArrowCursor
          topPosition={cursorPosition.y}
          leftPosition={cursorPosition.x}
          isCursorInside={isCursorInside}
          arrowDirection={sliderSide}
          isDisabled={isArrowButtonDisabled}
          isInit={isInit}
          color='brown'
        /> */}
      </div>
    </>
  );
};
