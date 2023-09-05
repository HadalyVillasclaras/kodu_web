import React, { useState } from 'react'
import styles from './DinamicControlButtons.module.scss';
import { ArrowCursor } from '../atoms/ArrowCursor';

type Props = {
  onLeftClick: () => void;
  onRightClick: () => void;
  children?: React.ReactNode;
  isLeftDisabled?: boolean;
  isRightDisabled?: boolean;
  btnsWidth?: string | number;
}
type CursorPositionType = {
  x: string | number;
  y: string | number;
};

export const DinamicControlButtons = ({
  onLeftClick,
  onRightClick,
  isLeftDisabled, 
  isRightDisabled,
  btnsWidth,
  children
}: Props) => {

  const [cursorPosition, setCursorPosition] = useState<CursorPositionType>({ x: '90%', y: '80%' });
  const [isCursorInside, setIsCursorInside] = useState(false);
  const [sliderSide, setSliderSide] = useState<"left" | "right" | null>(null);
  const [isInit, setIsInit] = useState(false);

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

  let isArrowButtonDisabled = false;
  if (sliderSide === "left" && isLeftDisabled) {
    isArrowButtonDisabled = true;
  } else if (sliderSide === "right" && isRightDisabled) {
    isArrowButtonDisabled = true;
  }
  
  return (
    <div className={`${styles['control-btns-wrapper']}`}>
      <button
        style={{ width: btnsWidth }}
        className={`${styles['control-btn']} ${styles["control-btn--left"]}`}
        onMouseEnter={() => handleMouseEnter("left")}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={onLeftClick}
      />
      {children}
      <button
        style={{ width: btnsWidth }}
        className={`${styles['control-btn']} ${styles["control-btn--right"]}`}
        onMouseEnter={() => handleMouseEnter("right")}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={onRightClick}
      />
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
  )
}
 