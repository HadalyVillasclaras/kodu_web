import { ReactNode, useRef, useLayoutEffect, forwardRef, useState, useImperativeHandle } from 'react';
import { Colors } from '../types';
import { Heading, IconButton } from '../atoms';
import styles from './DropdownMain.module.scss';
import { gsap } from 'gsap';

type Props = {
  children: ReactNode;
  customStyle?: React.CSSProperties;
  color?: Colors;
  title: string;
}

export type DropdownRef = {
  openDropdown: () => void;
};

export const DropdownMain = forwardRef<DropdownRef, Props>(({ title, color = 'brown', children }, parentRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTween = useRef<gsap.core.Tween | null>(null);

  useImperativeHandle(parentRef, () => {
    return { openDropdown }
  });

  useLayoutEffect(() => {
    if (!dropdownTween.current) {
      dropdownTween.current = gsap.to(dropdownRef.current, {
        y: '0%',
        // borderBottomLeftRadius: '35px',
        // borderBottomRightRadius: '35px',
        ease: 'linear',
        paused: true
      });
    }
    return () => {
      dropdownTween.current?.kill();
    };
  }, []);


  const openDropdown = () => {
    if (!isOpen) {
      dropdownTween.current?.play();
    }
    setIsOpen(true);
  }

  const closeDropdown = () => {
    if (isOpen) {
      dropdownTween.current?.reverse();
    }
    setIsOpen(false);
  }

  //if isOpen && is mobile --- body { overflow-y: hidden}
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
      <div className={`${styles[`dropdown__btn`]}`}>
        <IconButton icon='x' size='l' color='cream' onClick={closeDropdown} ariaLabel='Close dropdown'/>
      </div>
    </div>
  )
});