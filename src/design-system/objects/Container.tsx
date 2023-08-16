import { ReactNode, useEffect, useRef } from "react";
import styles from "./Container.module.scss";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ContainerProps = {
  children: ReactNode;
  customStyle?: React.CSSProperties;
  bgImage?: string;
}

export const Container = ({ bgImage, customStyle, children }: ContainerProps) => {
  const containerRef = useRef(null);
  const bgImageClass = bgImage ? styles['container__bg-image'] : "";
  const bgImageUrl = bgImage ? { backgroundImage: `url(${bgImage})` } : {};

  useEffect(() => {
    if (bgImage) {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "35% center",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.1,
        duration: 7
      });
    }
  }, [bgImage]);

  return (
    <div ref={containerRef} className={`${styles["container"]} ${bgImageClass} ${customStyle}`} style={bgImageUrl}>
      {children}
    </div>
  );
}