import { Heading } from "../../design-system/atoms";
import { useGsapSlidesUp } from '../../hooks/gsap';
import { useLayoutEffect, useRef } from 'react';
import sectionImages from '../../config/data/SectionImages.json';
import styles from "./Hero.module.scss";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Curtain } from "../../design-system/atoms/Curtain";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

export const Hero = () => {
  const introTextRef = useRef<HTMLElement>(null!);
  const introImgRef = useRef<HTMLImageElement>(null!);
  const curtainHero = useRef<HTMLDivElement>(null!);
 
  const { slidesUpOnScroll } = useGsapSlidesUp();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const introTextChildren = Array.from(introTextRef.current.children);
      slidesUpOnScroll(introTextChildren as HTMLElement[], introTextRef.current, 2.5);
      
      gsap.to(introImgRef.current, {
        scrollTrigger: {
          trigger: introTextRef.current,
          start: 'center top',
          end: "bottom top",
          scrub: true,
          toggleActions: 'play none none reverse',
        },
          margin: '0px',
          borderRadius: '0px'
      });
    }, introTextRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className={styles["hero__sect-text"]}>
        <section ref={introTextRef} className={styles["hero__sect-text-content"]}>
          <Heading color='brown' as='h4'>Sustainable lodgins</Heading>
          <p>Lorem ipsum dolor sit amet. Nunc auctor, et risus lacus quis sem. Sed sodales lorem, at lobortis odio porta vel. Nunc auctor. Class aptent et risus lacus quis sem taciti sociosqu ad litora torquent per nostra.</p>
        </section>
      </section>
      <section  className={styles['hero__sect-img']}>
        <img ref={introImgRef} src={`${BASE_ASSETS}${sectionImages.hero.src}`} alt={sectionImages.hero.alt} />
        <Curtain elementRef={curtainHero}  bgColor="cream" triggerElement={curtainHero}/>
      </section>
    </>
  )
}
