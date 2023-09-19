import { Logo } from '../../../design-system/components/atoms';
import { useLayoutEffect, useRef, useState } from 'react';
import { type Colors } from '../../../design-system/tokens';
import { useDeviceType, DeviceType } from '../../hooks/useDeviceType';
import styles from './Header.module.scss';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';
import { DropdownFrieze } from '../shared/DropdownFrieze/DropdownFrieze';

interface HeaderProps {
  bgColor?: Colors | null
}

export const Header = ({ bgColor = null }: HeaderProps) => {
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
        // onRefresh: () => {
        //   console.log(logoMain.current.offsetHeight);
        //   if (deviceType !== DeviceType.DESKTOP) {
        //     setMarginB(logoMain.current.offsetHeight)
        //   } else {
        //     setMarginB(50)
        //   }
        // }
      },
      width: deviceType !== DeviceType.DESKTOP ? '80vw' : '55vw',
      ease: 'power3.out',
      y: deviceType === DeviceType.MOBILE ? '2vw' : '5vw',
      x: deviceType === DeviceType.MOBILE ? '4vw' : '5vw',
      duration: 20
    });
  };

  useLayoutEffect(() => {
    if (deviceType !== DeviceType.DESKTOP) {
      setMarginB(logoMain.current.offsetHeight);
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
        className={`${styles.header} ${bgColor ? styles[`header__bg--${bgColor}`] : ''}`}
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
