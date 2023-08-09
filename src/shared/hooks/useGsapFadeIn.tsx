import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useGsapFadeIn = () => {
  const didAnimate = useRef(false);

  const fadeInOnScroll = (element: string | HTMLElement[] | HTMLElement | NodeListOf<HTMLElement>, trigger: string | HTMLElement | NodeListOf<HTMLElement>) => {
    if (didAnimate.current) {
      return;
    }

    gsap.from(element, {
      scrollTrigger: {
        trigger: trigger,
        start: 'top bottom', 
        toggleActions: 'play none none reverse',
        markers:true

      },
      y: 50,
      stagger: 0.1,
      opacity: 0,
      duration: 2,
    });

    didAnimate.current = true;
  };

  return { fadeInOnScroll };
};
