import { Logo, Frieze } from '../../design-system/atoms';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Colors } from '../../design-system/types';
import { useDeviceType, DeviceType } from '../../hooks/useDeviceType';
import styles from './Header.module.scss';
import { gsap } from 'gsap';

type HeaderProps = {
  isDinamic?: boolean;
  bgColor?: Colors | null;
};

export const Header = ({ bgColor = null, isDinamic = false }: HeaderProps) => {
  const logoMain = useRef<HTMLDivElement>(null!);
  const headerRef = useRef<HTMLDivElement>(null!);
  const [marginBottom, setMarginBottom] = useState<number>(0);

  const deviceType = useDeviceType();

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
      width: deviceType !== DeviceType.DESKTOP ? "80vw" : "55vw",
      ease: "power3.out",
      y: deviceType === DeviceType.MOBILE ? "20px" : "50px",
      x: deviceType === DeviceType.MOBILE ? "0px" : "1.5rem",
      duration: 20,
    });
  }

  useEffect(() => {
    if (isDinamic) {
      const updateMarginBottom = () => {
        if (deviceType !== DeviceType.DESKTOP) {
          setMarginBottom(logoMain.current.offsetHeight);
        } else {
          setMarginBottom(0);
        }
      };
      updateMarginBottom();
      window.addEventListener('resize', updateMarginBottom);

      return () => {
        window.removeEventListener('resize', updateMarginBottom);
      };
    }
  }, [deviceType]);

  useLayoutEffect(() => {
    if (isDinamic) {
      const ctx = gsap.context(() => {
        animateLogo(logoMain.current, headerRef.current);
      }, headerRef);
      return () => ctx.revert();
    }
  }, [deviceType]);

  return (
    <header
      id="header"
      ref={headerRef}
      className={`${styles[`header`]} ${bgColor ? styles[`header__bg--${bgColor}`] : ""}`}
    >
      <Frieze />
      <div className={styles["header__flexnav"]}>
        {
          isDinamic
            ? <div className={styles["header__logo-dinamic-wp"]} style={{ marginBottom: `${marginBottom}px` }}>
              <span ref={logoMain} id='logoSpan' className={styles["header__logo--dinamic"]} >
                <Logo size='100%' />
              </span>
            </div>
            : <Logo />
        }
        <p>HEY</p>
        {/* <CheckAvailabilityForm /> */}
      </div>
    </header>
  )
}