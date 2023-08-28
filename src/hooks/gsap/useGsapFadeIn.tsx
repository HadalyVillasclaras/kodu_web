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
          toggleActions: 'play none none reverse',
        },
        y: 70,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        delay: delay
      });
  }

 

  return { slidesUpOnScroll };
};