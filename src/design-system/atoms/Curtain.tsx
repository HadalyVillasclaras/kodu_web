import React, { useLayoutEffect, ReactNode } from 'react'
import { Colors } from '../types'
import styles from './Curtain.module.scss';
import { useGsapImgCurtain } from '../../hooks/gsap';
import gsap from 'gsap';

type Props = {
  bgColor?: Colors;
  elementRef: React.MutableRefObject<HTMLDivElement>;
  triggerElement: React.MutableRefObject<HTMLDivElement>;
  children?: ReactNode;
  delay?: number;
}

export const Curtain = ({ bgColor = 'green', elementRef, children, triggerElement, delay = 0 }: Props) => {
  const { verticalCurtainOnScroll } = useGsapImgCurtain();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      verticalCurtainOnScroll(elementRef.current, triggerElement.current as HTMLElement, delay);
    }, elementRef);
    return () => ctx.revert();
  }, [elementRef, delay]);

  return (
    <div className={`${styles['curtain-wrapper']}`}>
      {children}
      <div ref={elementRef} className={`${styles['curtain']} ${styles[`curtain__bg--${bgColor}`]}`}>
      </div>
    </div>
  )
}