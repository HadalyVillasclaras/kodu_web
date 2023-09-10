import styles from './DropdownSection.module.scss';
import { ReactNode, useRef, useLayoutEffect, forwardRef, useState, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { Colors } from '../types';
import { Heading } from '../atoms';

type Props = {
  children: ReactNode;
  customStyle?: React.CSSProperties;
  color?: Colors;
  title: string;
  // isOpen: boolean;
}

type DropdownRef = {
  toggleMenu: () => void;
};

export const DropdownSection = forwardRef<DropdownRef, Props>(({ title, color = 'brown', children }, parentRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuTween = useRef<gsap.core.Tween | null>(null);

  useImperativeHandle(parentRef, () => {
    return { toggleMenu }
  });

  useLayoutEffect(() => {
    if (!menuTween.current) {
      menuTween.current = gsap.to(dropdownRef.current, {
        y: '0%',
        borderBottomLeftRadius: '35px',
        borderBottomRightRadius: '35px',
        ease: 'linear',
        paused: true
      });
    }
    return () => {
      menuTween.current?.kill();
    };
  }, []);

  const toggleMenu = () => {
    if (!isOpen) {
      console.log('play');
      menuTween.current?.play();
    } else {
      console.log('reverse');
      menuTween.current?.reverse();
    }
    setIsOpen(!isOpen)
  }



  return (
    <div
      ref={dropdownRef}
      className={`${styles[`dropdown`]} ${styles[`dropdown__color--${color}`]}`}
      style={{ position: isOpen ? 'fixed' : 'absolute' }}
    >
      <section>
        <header>
          <Heading as='h1' font='fancy'>{title}</Heading>
        </header>
        {children}
      </section>
    </div>
  )
});