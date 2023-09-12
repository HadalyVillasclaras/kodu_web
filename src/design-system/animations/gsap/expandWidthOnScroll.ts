import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const expandWidthOnScroll = (
  element: string | HTMLElement | NodeListOf<HTMLElement> | HTMLElement[],
  triggerElement?: string | HTMLElement | NodeListOf<HTMLElement> | HTMLElement[],
  delay?: number
) => {
  gsap.to(element, {
    immediateRender: false,
    scrollTrigger: {
      trigger: triggerElement || element,
      start: 'top bottom',
      toggleActions: 'play none none reverse',
    },
    width: '100%',
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    delay: delay
  });
};