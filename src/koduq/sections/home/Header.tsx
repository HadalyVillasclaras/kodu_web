import { Logo } from '../../../design-system/components/atoms';
import { useLayoutEffect, useRef, useState } from 'react';
import { useDeviceType, DeviceType } from '../../hooks/useDeviceType';
import styles from './Header.module.scss';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';
import { DropdownFrieze } from '../shared/DropdownFrieze/DropdownFrieze';
import { Hero } from '.';
import { Section } from '../../../design-system/components/objects';
import { type Colors } from '../../../design-system/tokens';

export const Header = () => {
  const [logoColor, setLogoColor] = useState<Colors>('brown');
  const logoMain = useRef<HTMLDivElement>(null!);
  const headerRef = useRef<HTMLDivElement>(null!);
  const location = useLocation();
  const deviceType = useDeviceType();
  const [marginB, setMarginB] = useState<Number | null>(null);
  // const animate;
  const animateLogo = () => {
    return gsap.to(logoMain.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top top',
        end: deviceType === DeviceType.MOBILE ? '+=700px' : '+=500px',
        scrub: 0.5,
        pin: true,
        pinSpacing: false,
      },
      width: deviceType === DeviceType.MOBILE ? "40%" :  "30%",
      y: "1rem",
      x: "1rem",

      duration: 3,
      ease: "none"
    });
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      if (deviceType !== DeviceType.DESKTOP) {
        setTimeout(() => {
          setMarginB(logoMain.current.offsetHeight);
          console.log(logoMain.current.offsetHeight);
        }, 100);
      } else {
        setMarginB(0);
      }
    };

    handleResize();

    const ctx = gsap.context(() => {
      animateLogo();
    }, headerRef);

    window.addEventListener("resize", handleResize);
    
    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [location, deviceType]);


  return (
    <>
      <DropdownFrieze hasLogo={false} />
      <header id="header" ref={headerRef} className={`${styles.header} `}>
        <div className={styles['header__logo-dinamic-wp']} >
          <span ref={logoMain} id='logoSpan' className={styles['header__logo--dinamic']} >
            <Logo color={logoColor} size='100%' />
          </span>
        </div>
      </header>
      <div className={styles['header__margin']} style={{ height: `${marginB }px` }}></div>
      <Section id="hero" size='full'>
        <Hero setLogoColor={setLogoColor} isMobile={deviceType === DeviceType.MOBILE} />
      </Section>
    </>
  );
};
