import { type ReactNode, useRef, useLayoutEffect, forwardRef, useState, useImperativeHandle } from 'react';
import { type Colors } from '../../tokens';
import { Heading, IconButton } from '../atoms';
import styles from './DropdownMain.module.scss';
import { gsap } from 'gsap';

interface Props {
  children: ReactNode
  customStyle?: React.CSSProperties
  color?: Colors
  title: string
}

export interface DropdownRef {
  openDropdown: () => void
  closeDropdown: () => void
}

export const DropdownMain = forwardRef<DropdownRef, Props>(({ title, color = 'brown', children }, parentRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTween = useRef<gsap.core.Tween | null>(null);

  useImperativeHandle(parentRef, () => {
    return { openDropdown, closeDropdown };
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!dropdownTween.current) {
        dropdownTween.current = gsap.to(dropdownRef.current, {
          y: '0%',
          ease: "power3.out",
          duration: 1.2,
          paused: true
        });
      }
     }, dropdownRef);
    return () => { 
      ctx.revert(); 
    };
  }, []);

  const openDropdown = () => {
    if (!isOpen) {
      dropdownTween.current?.play();
      document.body.classList.add('overflow-hidden');
    }
    setIsOpen(true);
  };

  const closeDropdown = () => {
    if (isOpen) {
      dropdownTween.current?.reverse();
      document.body.classList.remove('overflow-hidden');
    }
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`${styles.dropdown} ${styles[`dropdown__color--${color}`]}`}
    >
      <section>
        <header>
          <Heading as='h1' font='fancy'>{title}</Heading>
        </header>
        {children}
      </section>
      <span className={`${styles.dropdown__btn}`}>
        <IconButton icon='x' size='l' color='cream' onClick={closeDropdown} ariaLabel='Close dropdown'/>
      </span>
    </div>
  );
});
