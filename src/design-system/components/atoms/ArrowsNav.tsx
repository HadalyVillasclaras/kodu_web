import { IconButton } from '../atoms';
import { Colors } from '../../tokens';
import styles from "./ArrowsNav.module.scss";

type ArrowsNavProps = {
  color: Colors;
  onLeft: () => void;
  onRight: () => void;
  isLeftDisabled?: boolean;
  isRightDisabled?: boolean;
}

export const ArrowsNav = ({ onLeft, onRight, color, isLeftDisabled, isRightDisabled }: ArrowsNavProps) => {
  return (
    <nav className={styles["arrows-nav"]}>
      <IconButton
        icon='arrowLeft'
        color={isLeftDisabled ? 'green' : color}
        ariaLabel="Previous"
        onClick={isLeftDisabled ? undefined : onLeft}
      />
      <IconButton
        icon='arrowRight'
        color={isRightDisabled ? 'green' : color}
        ariaLabel="Next"
        onClick={isRightDisabled ? undefined : onRight}
      />
    </nav>
  )
}
