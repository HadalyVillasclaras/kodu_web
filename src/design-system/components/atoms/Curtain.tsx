import React, { useLayoutEffect, type ReactNode } from 'react';
import { type Colors } from '../../tokens';
import styles from './Curtain.module.scss';
import gsap from 'gsap';
import { verticalCurtainOnScroll } from '../../animations/gsap';

interface Props {
  bgColor?: Colors
  elementRef: React.MutableRefObject<HTMLDivElement>
  triggerElement: React.MutableRefObject<HTMLDivElement>
  children?: ReactNode
  delay?: number
}

export const Curtain = ({ bgColor = 'green', elementRef, children, triggerElement, delay = 0 }: Props) => {
  useLayoutEffect(() => {
    if (gsap) {
      const ctx = gsap.context(() => {
        verticalCurtainOnScroll(elementRef.current, triggerElement.current as HTMLElement, delay);
      }, elementRef);
      return () => { ctx.revert(); };
    } else {
      elementRef.current.style.display = 'none';
    }
  }, [elementRef, delay]);

  return (
    <div className={`${styles['curtain-wrapper']}`}>
      {children}
      <div ref={elementRef} className={`${styles.curtain} ${styles[`curtain__bg--${bgColor}`]} `}>
      </div>
    </div>
  );
};
