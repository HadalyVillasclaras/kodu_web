import { ReactNode, useLayoutEffect, useRef } from "react";
import styles from "./BgImgContainer.module.scss";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type BgImgContainerProps = {
  children?: ReactNode;
  customStyle?: React.CSSProperties;
  bgImage?: string;
}

export const BgImgContainer = ({ bgImage, customStyle, children }: BgImgContainerProps) => {
  const containerRef = useRef(null);
  const bgImageClass = bgImage ? styles['container__bg-image'] : "";
  const bgImageUrl = bgImage ? { backgroundImage: `url(${bgImage})` } : {};

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        scrollTrigger: {
        markers: true,
          trigger: containerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.1,
        duration: 7
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`${styles["container"]} ${bgImageClass} ${customStyle}`} style={bgImageUrl}>
      {children}
    </div>
  );
}