import { Icon } from '../atoms/Icon'
import styles from "./ArrowsNav.module.scss";

type Colors = "cream" | "green" | "brown";

type ArrowsNavProps = {
  color: Colors;
}

export const ArrowsNav = ({ color }: ArrowsNavProps) => {
  function previousSlide() {
    //mirar funcionalidad cursos rldys
  }

  function nextSlide() {

  }

  return (
    <nav style={{ display: "flex", justifyContent: "center", gap: "3rem", margin: "2rem 0" }}>
      <button className={styles["arrows-nav__button"]} onClick={previousSlide} aria-label="Previous">
        <Icon icon='arrowLeft' color={color} />
      </button>
      <button className={styles["arrows-nav__button"]} onClick={nextSlide} aria-label="Next">
        <Icon icon='arrowRight' color={color} />
      </button>
    </nav>
  )
}