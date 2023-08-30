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
}

export const Curtain = ({ bgColor = 'green', elementRef, triggerElement }: Props) => {
  const { verticalCurtainOnScroll } = useGsapImgCurtain();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      verticalCurtainOnScroll(elementRef.current, triggerElement.current as HTMLElement);
    }, elementRef);
    return () => ctx.revert();
  }, [elementRef]);

  return (
    <div
      ref={elementRef}
      className={`${styles['curtain']} ${styles[`curtain-${bgColor}`]}`}
    >
    </div>
  )
}