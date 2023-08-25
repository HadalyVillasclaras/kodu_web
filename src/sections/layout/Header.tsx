import { Logo, Frieze } from '../../design-system/atoms';
import styles from './Header.module.scss';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGsapWidthExpand } from '../../hooks/gsap/useGsapWidthExpand';
import { Colors } from '../../design-system/types';

type HeaderProps = {
  isDinamic?: boolean;
  bgColor?: Colors | null;
};

const animateLogo = (element: HTMLElement | null, triggerElement: HTMLElement | null) => {
  return gsap.from(element, {
    scrollTrigger: {
      trigger: triggerElement,
      start: "top top",
      end: "+=500px",
      pinSpacing: false,
      scrub: true,
      pin: true
    },
    transformOrigin: "top left",
    width: "55vw",
    ease: "power3.out",
    y: "50px",
    x: "20px",
    duration: 20,
  });
}

export const Header = ({ bgColor = null, isDinamic = false }: HeaderProps) => {
  const dividerRef = useRef<HTMLHRElement | null>(null);
  const logoMain = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { expandWidthOnScroll } = useGsapWidthExpand();
  
  useLayoutEffect(() => {
    if (isDinamic) {
      setTimeout(() => {
        expandWidthOnScroll(dividerRef.current as HTMLElement, `.${styles['header']}`);
      }, 3000);
  
      const ctx = gsap.context(() => {
        animateLogo(logoMain.current, headerRef.current);
      }, headerRef);
  
      return () => ctx.revert();
    }
  }, [])

  return (
    <header 
      ref={headerRef} 
      className={`${styles[`header`]} ${bgColor ? styles[`header__bg-${bgColor}`] : ""}`}
    >
      <Frieze />
      <div className={styles["header__flexnav"]}>
        {
          isDinamic
          ? <div className={styles["header__logo-dinamic-wp"]}>
              <span ref={logoMain} className={styles["header__logo-dinamic"]} >
                <Logo size='100%' />
              </span>
            </div>
          : <Logo/>
        }
        <p>HEY</p>
        {/* <CheckAvailabilityForm /> */}
      </div>
      {/* <Divider ref={dividerRef}/> */}
    </header>
  )
}