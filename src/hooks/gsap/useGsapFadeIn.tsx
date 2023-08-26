import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapFadeIn = () => {

  const slidesUpOnScroll = (
    element: string | string[] | HTMLElement | HTMLElement[], 
    triggerElement: string |  HTMLElement,
    delay?: number
    ) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: triggerElement,
          start: 'top bottom',
          markers: true,
          toggleActions: 'play none none reverse',
        },
        y: 70,
        stagger: 0.3,
        duration: 1,
        delay: delay
      });
  }

  return { slidesUpOnScroll };
};