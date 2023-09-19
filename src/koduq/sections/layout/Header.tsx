import { Logo } from '../../../design-system/components/atoms';
import { useLayoutEffect, useRef, useState } from 'react';
import { useDeviceType, DeviceType } from '../../hooks/useDeviceType';
import styles from './Header.module.scss';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';
import { DropdownFrieze } from '../shared/DropdownFrieze/DropdownFrieze';

export const Header = () => {
  const logoMain = useRef<HTMLDivElement>(null!);
  const headerRef = useRef<HTMLDivElement>(null!);
  const location = useLocation();
  const deviceType = useDeviceType();
  const [marginB, setMarginB] = useState(0);
  console.log(deviceType);
  const animateLogo = (element: HTMLElement | null, triggerElement: HTMLElement | null) => {
    return gsap.from(element, {
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top top',
        end: '+=500px',
        pinSpacing: false,
        scrub: true,
        pin: true
      },
      width: deviceType !== DeviceType.DESKTOP ? '80vw' : '55vw',
      ease: 'power3.out',
      y: deviceType === DeviceType.MOBILE ? '3vh' : '5vh', //header height
      x: deviceType === DeviceType.MOBILE ? '0.8rem' : '3.4rem', //hero padding
      duration: 20
    });
  };

  useLayoutEffect(() => {
    if (deviceType !== DeviceType.DESKTOP) {
      setTimeout(() => {
        setMarginB(logoMain.current.offsetHeight);
      }, 200);
    } else {
      setMarginB(50);
    }
    const ctx = gsap.context(() => {
      animateLogo(logoMain.current, headerRef.current);
    }, headerRef);
    
    return () => { ctx.revert(); };
  }, [location, deviceType]);

  return (
    <>
      <DropdownFrieze hasLogo={false} />
      <header
        id="header"
        ref={headerRef}
        className={`${styles.header} `}
      >
        <div className={styles['header__logo-dinamic-wp']} >
          <span ref={logoMain} id='logoSpan' className={styles['header__logo--dinamic']} >
            <Logo size='100%' />
          </span>
        </div>
      </header>
      <div className={styles['bottom-limit']} style={{ marginBottom: `${marginB}px` }}></div>
    </>
  );
};
