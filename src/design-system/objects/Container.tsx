import { ReactNode, useEffect, useRef } from "react";
import styles from "./Container.module.scss";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ContainerProps = {
  children: ReactNode;
  customStyle?: string;
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
          start: "top top",
          // end: "bottom bottom",
          scrub: 1,
        },
        scale: 1.05,
        duration: 3

      });
    }
  }, [bgImage]);

  return (
    <div ref={containerRef} className={`${styles["container"]} ${bgImageClass} ${customStyle}`} style={bgImageUrl}>
      {children}
    </div>
  );
}