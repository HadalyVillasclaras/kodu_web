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
        start: "top 80%",
        toggleActions: "play none none none ",
        onRefreshInit: function(self) {
          if (self.progress === 1) {
            gsap.set(element, { top: '0' }); 
          }
        },
        onRefresh: function(self) {
          if (self.progress === 1) {
            gsap.set(element, { top: '100%' });
          }
        }
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
