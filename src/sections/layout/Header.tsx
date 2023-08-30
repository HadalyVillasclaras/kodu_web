import { Logo, Frieze} from '../../design-system/atoms';
import { useLayoutEffect, useRef } from 'react';
import { useGsapWidthExpand } from '../../hooks/gsap';
import { Colors } from '../../design-system/types';
import { useDeviceType, DeviceType } from '../../hooks/useDeviceType';
import styles from './Header.module.scss';
import { gsap } from 'gsap';

type HeaderProps = {
  isDinamic?: boolean;
  bgColor?: Colors | null;
};

export const Header = ({ bgColor = null, isDinamic = false }: HeaderProps) => {
  const dividerRef = useRef<HTMLHRElement | null>(null);
  const logoMain = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const { expandWidthOnScroll } = useGsapWidthExpand();
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
      transformOrigin: "top left",
      width: deviceType === DeviceType.MOBILE ? "100%" : "55vw",
      ease: "power3.out",
      y: deviceType === DeviceType.MOBILE ? "20px" : "50px", 
      x: deviceType === DeviceType.MOBILE ? "0px" : "20px",
      duration: 20,
    });
  }

  useLayoutEffect(() => {
    if (isDinamic) {
      const ctx = gsap.context(() => {
        animateLogo(logoMain.current, headerRef.current);
        expandWidthOnScroll(dividerRef.current as HTMLElement, headerRef.current as HTMLElement, 3)
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