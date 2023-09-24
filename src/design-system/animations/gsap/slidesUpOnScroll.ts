import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const slidesUpOnScroll = (
  element: string | string[] | HTMLElement | HTMLElement[],
  triggerElement?: string | HTMLElement,
  delay?: number
  // scrub:boolean = false
) => {
  gsap.from(element, {
    scrollTrigger: {
      // scrub: scrub,
      trigger: triggerElement || element,
      start: 'top 80%',
      end: '90%',
      toggleActions: 'play none none none'
    },
    y: 70,
    stagger: 0.3,
    duration: 1,
    ease: 'power3.out',
    delay
  });
};