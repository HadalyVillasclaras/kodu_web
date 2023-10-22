import { type ReactNode, useLayoutEffect, useRef } from 'react';
import styles from './BgImgContainer.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BgImgContainerProps {
  children?: ReactNode
  customStyle?: React.CSSProperties
  bgImage?: string
}

export const BgImgContainer = ({ bgImage, customStyle, children }: BgImgContainerProps) => {
  const containerRef = useRef(null);
  const bgImageClass = bgImage ? styles['container__bg-image'] : '';
  const bgImageUrl = bgImage ? { backgroundImage: `url(${bgImage})` } : {};

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 0.3,
        },
        borderRadius: 0,
        scale: 1.3,
        transformOrigin: 'top'
      });
    }, containerRef);

    return () => { ctx.revert(); };
  }, []);

  return (
    <div ref={containerRef} className={`${styles.container} ${bgImageClass} ${customStyle}`} style={bgImageUrl}>
      {children}
    </div>
  );
};
