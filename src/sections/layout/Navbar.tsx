import { IconButton, Link } from '../../design-system/atoms';
import { NavIconContext } from "../../contexts/NavIconContext";
import { useContext, useEffect, useState, useRef, useLayoutEffect } from "react";
import { useGsapSlidesUp } from "../../hooks/gsap";
import styles from "./Navbar.module.scss";
import navItems from '../../core/data/NavItems.json';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { color, hidden } = useContext(NavIconContext);
  const navListRef = useRef<HTMLUListElement>(null!);
  const navbarRef = useRef<HTMLDivElement>(null!);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
  }, [hidden]);

  const { slideUp } = useGsapSlidesUp();
  let animation: any;

  useLayoutEffect(() => {
    if (isOpen) {
      if (!animation) {
        const ulItems = Array.from(navListRef.current.children);
        animation = slideUp(ulItems as HTMLElement[], 0.1);
      } else {
        animation.restart();
      }
    } else {
      animation && animation.seek(0).pause();
    }
  }, [isOpen]);

  return (
    <div ref={navbarRef} className={styles["navbar"]}>
      <div className={styles["navbar__icon-wrapper"]}>
        <span
          className={`
          ${styles["icon-wrapper"]} 
          ${isOpen ? styles["rotate45"] : ""} 
        `}
        >
          {
            !hidden &&
            <IconButton
              icon='plus'
              color={isOpen ? 'cream' : color}
              ariaLabel={isOpen ? "Close" : "Open"}
              onClick={toggleSidebar}
              size="l"
            />
          }
        </span>
      </div>
      <nav className={styles["navbar__menu"]} style={isOpen ? { transform: 'translateX(0)' } : {}}>
        <p className={styles["xxxl-koduq"]}>KODUQ</p>
        <ul ref={navListRef} className={styles["navbar__menu-list"]}>
          {navItems.map((navItem, index) => (
            <li key={index} onClick={toggleSidebar}>
              <Link 
                color='cream' 
                size='l' 
                href={navItem.link}
                aria-label={`Navigate to ${navItem.name} section`}
              >
                  {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}