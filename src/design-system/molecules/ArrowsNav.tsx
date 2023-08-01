import { Icon } from '../atoms/index'
import styles from "./ArrowsNav.module.scss";

type Colors = "cream" | "green" | "brown";

type ArrowsNavProps = {
  color: Colors;
  width?: string;
  onLeft: () => void;
  onRight: () => void;
}

export const ArrowsNav = ({ onLeft, onRight, color, width }: ArrowsNavProps) => {
  return (
    <nav style={{ display: "flex", gap: "3rem", margin: "2rem 0" }}>
      <button className={styles["arrows-nav__button"]} onClick={onLeft} aria-label="Previous">
        <Icon icon='arrowLeft' color={color} width={width}/>
      </button>
      <button className={styles["arrows-nav__button"]} onClick={onRight} aria-label="Next">
        <Icon icon='arrowRight' color={color} width={width} />
      </button>
    </nav>
  )
}