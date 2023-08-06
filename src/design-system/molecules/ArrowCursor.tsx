import { Icon } from '../atoms';
import styles from './ArrowCursor.module.scss';

type Props = {
  topPosition: any;
  leftPosition: any;
  isDisplayed: boolean;
  arrowOrientation: "left" | "right" | null;
  isDisabled: boolean
}

export const ArrowCursor = ({topPosition, leftPosition, isDisplayed, isDisabled, arrowOrientation}: Props) => {
  return (
    <span
      className={styles['arrow-cursor']}
      style={{
      top: topPosition,
      left: leftPosition,
      backgroundColor: isDisabled ? 'var(--brown-disabled)' : 'var(--brown)',
      display: isDisplayed ? 'flex' : 'none',
    }}
  >
    <Icon color='cream' icon={arrowOrientation === "left" ? 'arrowLeft' : 'arrowRight'} />
  </span>
  )
}