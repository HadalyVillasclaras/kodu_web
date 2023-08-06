import { IconButton } from '../atoms';
import { Colors } from '../types';
import styles from "./ArrowsNav.module.scss";

type ArrowsNavProps = {
  color: Colors;
  width?: string;
  onLeft: () => void;
  onRight: () => void;
  isLeftDisabled?: boolean;
  isRightDisabled?: boolean;
}

export const ArrowsNav = ({ onLeft, onRight, color, width, isLeftDisabled, isRightDisabled }: ArrowsNavProps) => {
  return (
    <nav className={styles["arrows-nav"]}>
      <IconButton
        icon='arrowLeft'
        color={isLeftDisabled ? 'green' : color}
        ariaLabel="Previous"
        onClick={isLeftDisabled ? undefined : onLeft}
        width={width}
      />
      <IconButton
        icon='arrowRight'
        color={isRightDisabled ? 'green' : color}
        ariaLabel="Next"
        onClick={isRightDisabled ? undefined : onRight}
        width={width}
      />
    </nav>
  )
}
