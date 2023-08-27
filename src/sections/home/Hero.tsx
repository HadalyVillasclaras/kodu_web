import styles from "./Hero.module.scss";
import sectionImages from '../../config/data/SectionImages.json';
import { Heading } from "../../design-system/atoms";
import gsap from 'gsap';
import { useGsapFadeIn } from '../../hooks/gsap/useGsapFadeIn';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;
  const introTextRef = useRef<HTMLElement>(null!);
  const introImgRef = useRef<HTMLElement>(null!);

  const { slidesUpOnScroll } = useGsapFadeIn();

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
      </section>
    </>
  )
}
