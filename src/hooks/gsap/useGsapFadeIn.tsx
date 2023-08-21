import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useGsapFadeIn = () => {
  const animatedElements = useRef(new Map()).current;

  const fadeInOnScroll = (element: string | HTMLElement | HTMLElement[] | null, trigger: string |  HTMLElement | null) => {
    if (!element) return;

    if (animatedElements.get(element)) {
      return;
    }

    const animation = gsap.from(element, {
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top bottom',
        toggleActions: 'play none none reverse',
      },
      y: 70,
      stagger: 0.3,
      duration: 1,
    });

    animatedElements.set(element, true);

    return () => {
      if (animation) {
        animation.revert();
      }
    };
  };


  const slidesUpOnScroll = (element: any, triggerElement: any) => {
    const ctx = gsap.context(() => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: triggerElement,
          start: 'top bottom',
          toggleActions: 'play none none reverse',
        },
        y: 70,
        stagger: 0.3,
        duration: 1,
      });

      return () => ctx.revert();
    })
  }



  return { fadeInOnScroll, slidesUpOnScroll };
};