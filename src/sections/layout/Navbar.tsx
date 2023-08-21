import styles from "./Navbar.module.scss";
import { IconButton, Link } from '../../design-system/atoms';
import navItems from '../../config/data/NavItems.json';
import { useState } from "react";
import { useNavIconColor } from "../../contexts/NavIconContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { color, rotate} = useNavIconColor(); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__icon-wrapper"]} style={{ }}>
      <span 
        className={`
          ${styles["icon-wrapper"]} 
          ${isOpen ? styles["rotate45"] : ""} 
          ${rotate ? styles["rotate360"] : ""}
        `}
      >
        <IconButton
          icon='plus'
          color={isOpen ? 'cream' : color}
          ariaLabel={isOpen ? "Close" : "Open"}
          onClick={toggleSidebar}
          size="l"
          width="2"
        />
      </span>
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