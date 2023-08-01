import styles from "./Navbar.module.scss";
import { Link } from '../../design-system/atoms';
import navItems from '../../data/NavItems.json';
import { NavbarControl } from "./NavbarControl";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{
      width: '100%',
      height: '100%',
    }}>
      <NavbarControl isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {
        isOpen &&
        <nav className={styles["navbar"]}>
          <ul className={styles["navbar__list"]}>
            {navItems.map((navItem, index) => (
              <li key={index} onClick={toggleSidebar}>
                <Link size="l" href={navItem.link}>{navItem.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      }
    </div>
  )
}