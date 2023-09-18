import { Logo } from '../../../design-system/components/atoms';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Colors } from '../../../design-system/tokens';
import { useDeviceType, DeviceType } from '../../hooks/useDeviceType';
import styles from './Header.module.scss';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';
import { DropdownFrieze } from '../shared/DropdownFrieze/DropdownFrieze';

type HeaderProps = {
  bgColor?: Colors | null;
};

export const Header = ({ bgColor = null }: HeaderProps) => {
  const logoMain = useRef<HTMLDivElement>(null!);
  const headerRef = useRef<HTMLDivElement>(null!);
  const location = useLocation();
  const deviceType = useDeviceType();

  const animateLogo = (element: HTMLElement | null, triggerElement: HTMLElement | null) => {
    console.log(element?.offsetHeight);
    return gsap.from(element, {
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "+=500px",
        pinSpacing: false,
        scrub: true,
        pin: true
      },
      
      width: deviceType !== DeviceType.DESKTOP ? "80vw" : "55vw",
      ease: "power3.out",
      y: deviceType === DeviceType.MOBILE ? "20px" : "50px",
      x: deviceType === DeviceType.MOBILE ? "0px" : "1.5rem",
      duration: 20,
    });
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animateLogo(logoMain.current, headerRef.current);
    }, headerRef);
    return () => ctx.revert();
  }, [location]);

  return (
    <>
      <DropdownFrieze hasLogo={false} />
      <header
      style={{ marginBottom: `100px` }}
        id="header"
        ref={headerRef}
        className={`${styles[`header`]} ${bgColor ? styles[`header__bg--${bgColor}`] : ""}`}
      >
        <div className={styles["header__logo-dinamic-wp"]}  >
          <span ref={logoMain} id='logoSpan' className={styles["header__logo--dinamic"]} >
            <Logo size='100%' />
          </span>
        </div>
      </header>
    </>
  )
}