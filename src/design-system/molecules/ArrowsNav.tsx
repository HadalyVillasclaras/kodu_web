import { IconButton } from '../atoms';
import { Colors } from '../types';
import styles from "./ArrowsNav.module.scss";

type ArrowsNavProps = {
  color: Colors;
  width?: string;
  onLeft: () => void;
  onRight: () => void;
}

export const ArrowsNav = ({ onLeft, onRight, color, width }: ArrowsNavProps) => {
  return (
    <nav className={styles["arrows-nav"]}>
      <IconButton
        icon='arrowLeft'
        color={color}
        ariaLabel="Previous"
        onClick={onLeft}
        width={width}
      />
      <IconButton
        icon='arrowRight'
        color={color}
        ariaLabel="Next"
        onClick={onRight}
        width={width}
      />
    </nav>
  )
}