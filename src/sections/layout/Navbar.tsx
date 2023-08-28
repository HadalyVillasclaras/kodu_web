import styles from "./Navbar.module.scss";
import { IconButton, Link } from '../../design-system/atoms';
import navItems from '../../config/data/NavItems.json';
import { useNavIconColor } from "../../contexts/NavIconContext";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { color } = useNavIconColor();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__icon-content"]} style={{}}>
        <div
          className={`
          ${styles["icon-wrapper"]}
          ${isOpen ? styles["rotate45"] : ""} 
          `}
        >
          <IconButton
            icon='plus'
            color={isOpen ? 'cream' : color}
            ariaLabel={isOpen ? "Close" : "Open"}
            onClick={toggleSidebar}
            size="l"
          />
        </div>
      </div>
      <nav className={styles["navbar__menu"]} style={isOpen ? { right: 0 } : {}}>
        <ul className={styles["navbar__menu-list"]}>
          {navItems.map((navItem, index) => (
            <li key={index} onClick={toggleSidebar}>
              <Link color='cream' size='l' href={navItem.link}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}