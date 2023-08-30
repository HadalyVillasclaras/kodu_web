import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapImgCurtain = () => {
  const verticalCurtainOnScroll = (
    element: string | string[] | HTMLElement | HTMLElement[],
    triggerElement?: string | HTMLElement,
    delay?: number
  ) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: triggerElement || element,
        start: 'top center',
        toggleActions: 'play none none none',
      },
      top: '0',
      stagger: 0.3,
      duration: 1.5,
      ease: "power3.out",
      delay: delay
    });
  }

  return { verticalCurtainOnScroll };
}