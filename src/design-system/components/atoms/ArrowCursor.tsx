import { Icon } from '../atoms';
import { type Colors } from '../../tokens';
import styles from './ArrowCursor.module.scss';

interface Props {
  topPosition: number | string
  leftPosition: number | string
  isCursorInside: boolean
  arrowDirection: 'left' | 'right' | null
  isDisabled: boolean
  isInit?: boolean
  color?: Colors
}

export const ArrowCursor = ({ topPosition, leftPosition, isCursorInside, isInit, isDisabled = false, color = 'green', arrowDirection }: Props) => {
  const hidden = isInit && !isCursorInside;

  return (
    <button
      aria-label={arrowDirection === 'left' ? 'Previous Slide' : 'Next Slide'}
      className={`${styles['arrow-cursor']}`}
      style={{
        top: topPosition,
        left: leftPosition,
        opacity: hidden ? '0' : '1',
        position: isCursorInside || isInit ? 'fixed' : 'absolute'
      }}
    >
      <Icon disabled={isDisabled} color={color} variant='circle' icon={arrowDirection === 'left' ? 'arrowLeft' : 'arrowRight'} />
    </button>
  );
};