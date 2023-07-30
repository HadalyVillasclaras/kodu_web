import styles from "./Navbar.module.scss";
import { Link } from '../../design-system/atoms/Link';
import navItems from '../../data/NavItems.json';

type NavbarProps = {
  isOpen: boolean;
}

export const Navbar = ({ isOpen }: NavbarProps) => {
  return (
    isOpen
      ? <nav className={styles["navbar"]}>
        <ul className={styles["navbar__list"]}>
          {navItems.map((navItem, index) => (
            <li key={index}>
              <Link size="big" href={navItem.link}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      : null
  )
}
