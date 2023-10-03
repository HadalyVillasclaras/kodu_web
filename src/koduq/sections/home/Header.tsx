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
  const bottomLimitRef = useRef<HTMLDivElement>(null!);

  const location = useLocation();
  const deviceType = useDeviceType();
  const [marginB, setMarginB] = useState(0);
  
  function enter() {
    console.log('enter!');
  }

  // const animate;
  const animateLogo = () => {
    return gsap.from(logoMain.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top top',
        end: '+=400px',
        pinSpacing: false,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
      width: deviceType !== DeviceType.DESKTOP ? '80vw' : '55vw',
      y: deviceType === DeviceType.MOBILE ? '3vh' : '7vh', // header height
      x: deviceType === DeviceType.MOBILE ? '3vh' : '7vh', // hero padding
      ease: 'power2.out',
      duration: 3
    });
  };

  useLayoutEffect(() => {
    // if (deviceType !== DeviceType.DESKTOP) {
    //   setTimeout(() => {
    //     setMarginB(logoMain.current.offsetHeight);
    //   }, 200);
    // } else {
    //   setMarginB(50);
    // }
    const ctx = gsap.context(() => {
      animateLogo();
    }, headerRef);
    
    return () => { ctx.revert(); };
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
      <div ref={bottomLimitRef} className={styles['bottom-limit']} style={{ marginBottom: `${marginB}px` }}></div>
      <Section id="hero" size='full'>
        <Hero setLogoColor={setLogoColor} />
      </Section>
    </>
  );
};
