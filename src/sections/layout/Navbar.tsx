import styles from "./Navbar.module.scss";
import { Link } from '../../design-system/atoms/Link';

type NavbarProps = {
  isOpen: boolean;
}

const navItems: Array<any> = [
  { name: "About", link: "#" },
  { name: "Destinations", link: "#" },
  { name: "Contact", link: "#" },
];

export const Navbar = ({ isOpen }: NavbarProps) => {
  return (
    isOpen
      ? <nav className={styles["navbar"]}>
          <ul className={styles["navbar__list"]}>
            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link href={navItem.link}>{navItem.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      : null
  )
}
