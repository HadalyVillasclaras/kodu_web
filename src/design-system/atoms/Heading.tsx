import React, { forwardRef, useEffect, ReactNode, useRef } from 'react';
import styles from "./Heading.module.scss"; 
import { useGsapFadeIn } from '../../shared/hooks/useGsapFadeIn';
import { Colors } from '../types';

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  color?: Colors;
  children: ReactNode;
}

function createTagComponent(tag: string) {
  return forwardRef<HTMLElement, JSX.IntrinsicElements[typeof tag]>((props, ref) => {
    return React.createElement(tag, { ...props, ref });
  });
}

export const Heading = ({ children, as = "h1", color }: HeadingProps) => {
  const Tag = createTagComponent(as);

  const animatedTextRef = useRef<HTMLElement>(null);
  const { fadeInOnScroll } = useGsapFadeIn();

  useEffect(() => {
    fadeInOnScroll(animatedTextRef.current!, `.${styles['hero']}`);
  }, []);

  return (
    <Tag ref={animatedTextRef} className={`${styles["heading"]} ${styles[`heading--${as}`]}`} style={{ color: `var(--${color})` }}>
      {children}
    </Tag>
  );
};
