import styles from "./Navbar.module.scss";
import { IconButton, Link } from '../../design-system/atoms';
import navItems from '../../config/data/NavItems.json';
import { useNavIconColor } from "../../contexts/NavIconContext";
import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { color } = useNavIconColor();
  const listItemsRef = useRef([]);
  const animationRef = useRef(null!);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Set up the animation once and store it in a ref
    animationRef.current = gsap.to(listItemsRef.current, {
      y: '-70px',
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
      paused: true,
    });
  }, []); 

  useEffect(() => {
    if (isOpen) {
      gsap.delayedCall(1, () => animationRef.current.play());
    } else {
      gsap.delayedCall(1, () => animationRef.current.reverse());
    }
    return () => {
      animationRef.current.kill();
    };
  }, [isOpen]);

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
      <nav className={styles["navbar__menu"]} style={isOpen ? { transform: 'translateX(0)' } : {}}>
        <ul className={styles["navbar__menu-list"]}>
          {navItems.map((navItem, index) => (
            <li key={index} onClick={toggleSidebar} ref={el => listItemsRef.current[index] = el}>
              <Link color='cream' size='l' href={navItem.link}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}