import { Icon } from '../atoms';
import { Colors } from '../types';
import styles from './ArrowCursor.module.scss';

type Props = {
  topPosition: number;
  leftPosition: number;
  isDisplayed: boolean;
  arrowOrientation: "left" | "right" | null;
  isDisabled: boolean;
  color?: Colors;
}

export const ArrowCursor = ({topPosition, leftPosition, isDisplayed, isDisabled = false, color="green", arrowOrientation}: Props) => {
  const mode = isDisabled ? "disabled" : "active";
  console.log(typeof topPosition);
  return (
    <span
      className={`${styles['arrow-cursor']} ${styles[`arrow-cursor-${color}-${mode}`]}`} 
      style={{
      top: topPosition,
      left: leftPosition,
      display: isDisplayed ? 'flex' : 'none',
    }}
  >
    <Icon color='cream' width='2'  icon={arrowOrientation === "left" ? 'arrowLeft' : 'arrowRight'} />
  </span>
  )
}