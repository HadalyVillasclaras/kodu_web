import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export  const slideUp = (
  element: string | string[] | HTMLElement | HTMLElement[],
  delay?: number
) => {
  return gsap.fromTo(element, {
    y: 100,  
    opacity: 0 
  }, {
    y: 0,  
    opacity: 1, 
    stagger: 0.3,
    duration: 1,
    ease: "power3.out",
    delay: delay
  });
}