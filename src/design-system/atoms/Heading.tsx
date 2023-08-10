import React, { forwardRef, useEffect, ReactNode, useRef } from 'react';
import styles from "./Heading.module.scss"; 
import { useGsapFadeIn } from '../../shared/hooks/useGsapFadeIn';
import { Colors } from '../types';

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  font?: "simple" | "fancy"
  color?: Colors;
  children: ReactNode;
}

function createTagComponent<T extends keyof JSX.IntrinsicElements>(tag: T) {
  return forwardRef<HTMLElement, JSX.IntrinsicElements[T]>((props, ref) => {
    return React.createElement(tag, { ...props, ref });
  });
}


export const Heading = ({ children, as = "h1", color, font = 'simple' }: HeadingProps) => {
  const Tag = createTagComponent(as);

  const animatedTextRef = useRef<HTMLElement>(null);
  const { fadeInOnScroll } = useGsapFadeIn();

  useEffect(() => {
    fadeInOnScroll(animatedTextRef.current!, `.${styles['hero']}`);
  }, []);

  let fontClass = `${styles[`heading--${as}`]}`;
  if (font === 'simple') {
    fontClass += ` ${styles[`heading--${as}-simple`]}`;
  }

  return (
    <Tag ref={animatedTextRef} className={`${fontClass}`} style={{ color: `var(--${color})` }}>
      {children}
    </Tag>
  );
};