import { IconButton, Link } from '../../design-system/atoms';
import { NavIconContext } from "../../contexts/NavIconContext";
import { useContext, useEffect, useState, useRef } from "react";
import { useGsapSlidesUp } from "../../hooks/gsap";
import styles from "./Navbar.module.scss";
import navItems from '../../core/data/NavItems.json';
// import { gsap } from 'gsap';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { color, hidden } = useContext(NavIconContext);
  const navListRef = useRef<HTMLUListElement>(null!);
  const navbarRef = useRef<HTMLDivElement>(null!);

  const { slideUp } = useGsapSlidesUp();
  let animation: any;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
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

  useEffect(() => {
  }, [hidden]);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const ulItems = Array.from(navListRef.current.children);
  //     animation = slideUp(ulItems as HTMLElement[], 2);

  //   }, navbarRef);
  //   return () => ctx.revert();
  // }, []);

  return (
    <div ref={navbarRef} className={styles["navbar"]}>
      <div className={styles["navbar__icon-wrapper"]} style={{}}>
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
      <nav className={styles["navbar__menu"]} style={isOpen ? { right: 0 } : {}}>
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