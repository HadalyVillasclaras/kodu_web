import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);


export const useGsapImgCurtain = () => {
  const animatedElements = useRef(new Map()).current;

  const verticalCurtainOnScroll = (element: string | HTMLElement | HTMLElement[] | null, trigger: string |  HTMLElement | null) => {
    if (!element) return;

    if (animatedElements.get(element)) {
      return;
    }

    const animation = gsap.from(element, {
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top center',
        toggleActions: 'play none none none',
      },
      top: '0',
      stagger: 0.3,
      duration: 1.5,
    });

    animatedElements.set(element, true);

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  };

  return { verticalCurtainOnScroll };
}