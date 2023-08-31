import { Icon } from '../atoms';
import { Colors } from '../types';
import styles from './ArrowCursor.module.scss';

type Props = {
  topPosition: number | string;
  leftPosition: number | string;
  isCursorInside: boolean;
  arrowDirection: "left" | "right" | null;
  isDisabled: boolean;
  isInit?: boolean;
  color?: Colors;
};

export const ArrowCursor = ({topPosition, leftPosition, isCursorInside, isInit, isDisabled = false, color="green", arrowDirection}: Props) => {
  const hidden = isInit && !isCursorInside;

  return (
    <span
      aria-label={arrowDirection === 'left' ? 'Previous Slide' : 'Next Slide'}
      className={`${styles['arrow-cursor']}`} 
      style={{
        top: topPosition,
        left: leftPosition,
        opacity: hidden ? "0" : "1",
        position: isCursorInside || isInit ? 'fixed' : 'absolute'
      }}
    >
    <Icon disabled={isDisabled} color={color} variant='circle' icon={arrowDirection === "left" ? 'arrowLeft' : 'arrowRight'} />
  </span>
  )
}