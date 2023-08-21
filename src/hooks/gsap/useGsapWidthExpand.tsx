import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapWidthExpand = () => {
  const didAnimate = useRef(false);

  const expandWidthOnScroll = (
    element: string | HTMLElement | NodeListOf<HTMLElement>,
    trigger: string | HTMLElement | NodeListOf<HTMLElement>,
  ) => {

    const animation = gsap.to(element, {
      immediateRender: false,
      scrollTrigger: {
        trigger: trigger,
        start: 'top bottom',
        toggleActions: 'play none none reverse',
      },
      width: '100%',
      duration: 1,
      stagger: 0.3,
    });

    didAnimate.current = true;

    return () => {
      animation.kill();
    };
  };

  return { expandWidthOnScroll };
};
