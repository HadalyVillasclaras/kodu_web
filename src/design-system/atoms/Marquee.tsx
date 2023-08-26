import { useLayoutEffect, useRef } from 'react';
import { Colors } from '../types';
import styles from './Marquee.module.scss';
import { useGsapFadeIn } from '../../hooks/gsap/useGsapFadeIn';
import { gsap } from 'gsap';

interface MarqueeProps {
  text?: string;
  speed?: number;
  color?: Colors;
}

export const Marquee = ({text, color='green'}: MarqueeProps) => {
  const marqueeColor = color ? styles[`marquee-${color}`] : '';
  const marqueeRef = useRef<HTMLImageElement>(null!);

  const { slidesUpOnScroll } = useGsapFadeIn();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      slidesUpOnScroll(marqueeRef.current as HTMLElement, marqueeRef.current);
    }, marqueeRef);
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={marqueeRef} className={styles.marqueeContainer}>
      <p className={`${styles.marquee} ${marqueeColor}`} data-text={text}>
        {text}
      </p>
    </div>
  );
};
