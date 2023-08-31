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
        start: "top 60%",
        toggleActions: "play none none none ",
      },
      top: '0',
      stagger: 0.3,
      duration: 1.8,
      ease: "power1.out",
      delay: delay
    });
  }

  return { verticalCurtainOnScroll };
}